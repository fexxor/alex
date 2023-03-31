import { videos } from "../../Videos";
import React from "react";
import "./WorkFullscreen.css";
import { Link, useParams } from "react-router-dom";

const WorkFullscreen: React.FC = () => {
  const { id } = useParams();

  const selectedVideo = videos.find((v) => v.id === id);

  return (
    <div className="WorkFullscreen">
      <div className="video-fullscreen">
        <div className="top-bar">
          <span>{selectedVideo?.info.title}</span>
          <Link className="close-button" to="/#/work">
            ×
          </Link>
        </div>
        <div className="short-description">
          {selectedVideo?.info.productionDescription}
        </div>
        <div className="container">
          <div className="video-container">
            <iframe
              src={"https://player.vimeo.com/video/" + selectedVideo?.id}
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
          <div className="info">
            <p hidden={!selectedVideo?.tagline}>{selectedVideo?.tagline}</p>
            <p hidden={!selectedVideo?.info.description}>
              {selectedVideo?.info.description}
            </p>

            <div hidden={!selectedVideo?.info.starring}>
              <h3>Starring</h3>
              <p> {selectedVideo?.info.starring?.join(", ")}</p>
            </div>

            <div hidden={!selectedVideo?.info.awardsAndNominations}>
              <h3>Awards and nominations</h3>
              <p>
                <ul>
                  {selectedVideo?.info.awardsAndNominations?.map((a) => (
                    <li>
                      <div className="awards-and-nominations">{a}</div>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
            <div hidden={!selectedVideo?.info.screenedAt}>
              <h3>Screened at</h3>
              <p>{selectedVideo?.info.screenedAt?.join(", ") + "."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFullscreen;
