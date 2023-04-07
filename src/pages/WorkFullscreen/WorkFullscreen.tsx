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
          <span>{selectedVideo?.title}</span>
          <Link className="close-button" to="/#/work">
            ×
          </Link>
        </div>
        <div className="short-description">
          {selectedVideo?.productionDescription}
        </div>
        <div className="container">
          <div className="video-container">
            <iframe
              hidden={selectedVideo?.source !== "Vimeo"}
              src={"https://player.vimeo.com/video/" + selectedVideo?.id}
              allow="autoplay; fullscreen"
              title="Embedded Vimeo"
            ></iframe>

            <iframe
              hidden={selectedVideo?.source !== "Youtube"}
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${selectedVideo?.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded Youtube"
            />
          </div>
          <div className="info">
            <p hidden={!selectedVideo?.tagline}>{selectedVideo?.tagline}</p>
            <p hidden={!selectedVideo?.description}>
              {selectedVideo?.description}
            </p>

            <div hidden={!selectedVideo?.starring}>
              <h3>Starring</h3>
              <p> {selectedVideo?.starring?.join(", ")}</p>
            </div>

            <div hidden={!selectedVideo?.awardsAndNominations}>
              <h3>Awards and nominations</h3>
              <p>
                <ul>
                  {selectedVideo?.awardsAndNominations?.map((a) => (
                    <li>
                      <div className="awards-and-nominations">{a}</div>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
            <div
              hidden={
                !(selectedVideo?.screenedAt || selectedVideo?.premieredAt)
              }
            >
              <h3>Screened at</h3>
              <p className="premiered-at" hidden={!selectedVideo?.premieredAt}>
                {selectedVideo?.premieredAt}
              </p>
              <p hidden={!selectedVideo?.screenedAt}>
                {selectedVideo?.screenedAt?.join(", ") + "."}
              </p>
            </div>

            <p className="imdb" hidden={!selectedVideo?.imdbLink}>
              For full cast and crew, visit<span> </span>
              <a
                href={selectedVideo?.imdbLink}
                target="_blank"
                rel="noreferrer"
              >
                IMDB
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFullscreen;
