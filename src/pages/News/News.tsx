import { NewsItem } from "../../types/NewsItem";
import "./News.css";

const news: NewsItem[] = [
  {
    timestamp: new Date("2020-01-01"),
    title: "4 new short films coming up in 2023!",
    imageUrl: "/images/NEWS_4_new_short_films.png",
    paragraphs: [
      "In February, I had the great pleasure of working with the 3rd year acting students at Nord Universitetet in Verdal. During two weeks we shot 4 short films together. All the films are now in post production and will be released later in 2023!",
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
          <div className="image-container">
            <img src={n.imageUrl}></img>
          </div>
          {n.paragraphs.map((p) => (
            <p>{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default News;
