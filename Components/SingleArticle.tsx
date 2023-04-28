import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../interfaces/article";
import { Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import {format} from "date-fns";

const SingleArticle = () => {
  const params = useParams();
  console.log("params object", params);

  const [newsToShow, setNewsToShow] = useState<Article | null>(null);


  const fetchSingleArticle = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setNewsToShow(data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
  }, [params.id]);

  if (!newsToShow) {
    return <div>No news found!</div>;
  }

  const publishedDate = newsToShow.publishedAt ? format(new Date(newsToShow.publishedAt), 'yyyy-MM-dd') : '';

  return (
    
    <Row className="my-5 d-flex flex-column">
      <Col xs={12} className="d-flex flex-column w-50 mx-auto">
        <h2>{newsToShow.title}</h2>
        <small className="mb-4"><strong>Published at: </strong>{publishedDate}</small>
        <img src={newsToShow.imageUrl} alt={newsToShow.title} />
        <p className="fs-4">{newsToShow.summary}</p>
        <p><strong>Read the complete news at:</strong> <a href={newsToShow.url} target="blank">{newsToShow.newsSite}</a></p>
      </Col>
      <Col className="d-flex justify-content-center">
        <Link className="btn btn-outline-primary" to="/">Homepage</Link>
      </Col>
    </Row>
  );
};

export default SingleArticle;
