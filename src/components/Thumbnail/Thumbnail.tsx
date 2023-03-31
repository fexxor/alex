import React from "react";
import "./Thumbnail.css";
import playSvg from "../../play.svg";
import { Video } from "../../types/Video";
import { Link } from "react-router-dom";

type ThumbnailProps = {
  video: Video;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ video }) => {
  return (
    <Link className="Thumbnail" to={"/view/" + video.id}>
      <img
        src={"https://vumbnail.com/" + video.id + ".jpg"}
        alt={video.title}
      />
      <div className="overlay"></div>
      <p className="video-title">{video.title}</p>
      <div className="play-wrapper">
        <img className="play-icon" src={playSvg} />
      </div>
    </Link>
  );
};

export default Thumbnail;
