import { NewsItem } from "../../types/NewsItem";
import "./News.css";
import news1 from "./news1.png";
import news2 from "./news2.png";
import news3 from "./news3.png";

const news: NewsItem[] = [
  {
    timestamp: new Date("2023-04-07"),
    title: "PARADIS to Julien Dubuque!",
    imageUrl: news3,
    paragraphs: [
      "PARADIS will have its American premiere at Julian Dubuque International Film Festival on Wednesday 26th of April!",
    ],
  },
  {
    timestamp: new Date("2023-03-01"),
    title: "4 new short films coming up in 2023!",
    imageUrl: news1,
    paragraphs: [
      "In February, I had the great pleasure of working with the 3rd year acting students at Nord Universitetet in Verdal. During two weeks we shot 4 short films together. All the films are now in post production and will be released later in 2023!",
    ],
  },
  {
    timestamp: new Date("2022-11-09"),
    title: "PARADIS to screen at Edmonton International Film Festival",
    imageUrl: news2,
    paragraphs: [
      "I'm proud to announce that PARADIS will have its international premiere later this September at Edmonton International Film Festival in the category: SHORT STOP: INTERNATIONAL SHORT FILM SERIES.",
    ],
  },
];

const News: React.FC = ({}) => {
  return (
    <div className="News">
      {news.map((n) => (
        <div className="news-item">
          <div className="top">
            <h2 className="news-title">{n.title}</h2>
            <span>{n.timestamp.toLocaleDateString()}</span>
          </div>
          <div className="image-text">
            <div className="image-container">
              <img src={n.imageUrl}></img>
            </div>
            <div className="text-container">
              {n.paragraphs.map((p) => (
                <p>{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
