import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { News } from "../interfaces/news";
import {Link} from "react-router-dom";

const Home = () => {
  const [news, setNews] = useState<News[]>([]);

  const fetchNews = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setNews(data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const truncateSummary = (summary: string, maxLength: number) => {
    if (summary.length <= maxLength) {
      return summary;
    }
    return summary.slice(0, maxLength) + "...";
  };

  return (
    <>
      <h2 className="my-3 text-center">News</h2>
      <Container>
        <Row>
          {news.map((singleNews) => (
            <Col
              key={singleNews.id}
              xs={12}
              md={6}
              lg={3}
              className="card-container"
            >
              <Card>
                <Card.Img variant="top" src={singleNews.imageUrl} />
                <Card.Body>
                  <Card.Title>{singleNews.title}</Card.Title>
                  <Card.Text>
                    {truncateSummary(singleNews.summary, 60)}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/article/${singleNews.id}`} className="btn btn-outline-primary w-50">Read More</Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
