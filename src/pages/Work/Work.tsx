import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { Video } from "../../types/Video";
import { videos } from "../../Videos";
import "./Work.css";
import React from "react";

class Work extends React.Component<{}, { selectedVideo: Video | undefined }> {
  render() {
    return (
      <div className="Work">
        <div className="videos">
          {videos.map((video) => (
            <Thumbnail video={video} key={video.id}></Thumbnail>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
