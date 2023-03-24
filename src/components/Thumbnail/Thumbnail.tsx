import React from "react";
import "./Thumbnail.css";
import playSvg from "../../play.svg";
import { Video } from "../../types/Video";

type ThumbnailProps = {
  video: Video;
  onClick: (video: Video) => (event: unknown) => void;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ video, onClick }) => {
  return (
    <div className="Thumbnail" onClick={onClick(video)}>
      <img src={video.imageUrl} alt={video.title} />
      <div className="overlay"></div>
      <p className="video-title">{video.title}</p>
      <div className="play-wrapper">
        <img className="play-icon" src={playSvg} />
      </div>
    </div>
  );
};

export default Thumbnail;
