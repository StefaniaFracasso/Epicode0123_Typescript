export interface Launch {
    id:       string;
    provider: string;
}

export enum NewsSite {
    Arstechnica = "Arstechnica",
    NASASpaceflight = "NASASpaceflight",
    SpaceNews = "SpaceNews",
}

export interface News {
    id:          number;
    title:       string;
    url:         string;
    imageUrl:    string;
    newsSite:    NewsSite;
    summary:     string;
    publishedAt: Date;
    updatedAt:   Date;
    featured:    boolean;
    launches:    Launch[];
    events:      any[];
}