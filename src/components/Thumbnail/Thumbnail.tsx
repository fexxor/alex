import React from "react";
import "./Thumbnail.css";
import playSvg from "../../play.svg";
import { Video } from "../../types/Video";

type ThumbnailProps = {
  video: Video;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ video }) => {
  return (
    <a className="Thumbnail" href={"/#/view/" + video.id}>
      <img
        src={"https://vumbnail.com/" + video.id + ".jpg"}
        alt={video.title}
      />
      <div className="overlay"></div>
      <p className="video-title">{video.title}</p>
      <div className="play-wrapper">
        <img className="play-icon" src={playSvg} />
      </div>
    </a>
  );
};

export default Thumbnail;
