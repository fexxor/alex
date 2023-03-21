import { NewsItem } from "../../types/NewsItem";
import "./News.css";

const news: NewsItem[] = [
  {
    timestamp: new Date("2020-01-01"),
    title: "This is some good news",
    imageUrl:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_169627/cf_259/cupcakes.jpg",
    paragraphs: [
      "Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.",
    ],
  },
  {
    timestamp: new Date("2020-01-01"),
    title: "Once upon a time",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hansel-and-gretel-rackham.jpg",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
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
