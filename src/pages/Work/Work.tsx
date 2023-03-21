import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { Video } from "../../types/Video";
import "./Work.css";
import React from "react";

const videos: Video[] = [
  {
    title: "Dagens ungdom",
    imageUrl: "https://img.youtube.com/vi/37IeQzG8tHU/mqdefault.jpg",
    alt: "",
    href: "https://www.youtube.com/watch?v=37IeQzG8tHU",
  },
  {
    title: "BLOGGBRUDAR",
    imageUrl: "https://img.youtube.com/vi/gZC0P3azcw4/mqdefault.jpg",
    alt: "",
    href: "https://www.youtube.com/watch?v=gZC0P3azcw4",
  },
  {
    title: "4 minuter äldrevård",
    imageUrl: "https://img.youtube.com/vi/aP9HTmmiUb0/mqdefault.jpg",
    alt: "",
    href: "https://www.youtube.com/watch?v=aP9HTmmiUb0",
  },
  {
    title: "PARADIS Trailer - TIFF 2022 (FFN)",
    imageUrl: "https://vumbnail.com/662366685.jpg",
    alt: "",
    href: "https://vimeo.com/662366685",
  },
];

class Work extends React.Component<{}, { selectedVideo: Video | undefined }> {
  constructor(props: {}) {
    super(props);
    this.state = { selectedVideo: undefined };
  }

  setSelectedVideo = (video: Video | undefined) => (event: unknown) => {
    this.setState({ selectedVideo: video });
    console.log(video);
  };

  render() {
    return (
      <div className="Work">
        <div className="videos">
          {videos.concat(videos).map((video) => (
            <Thumbnail
              video={video}
              onClick={this.setSelectedVideo}
              key={video.href}
            ></Thumbnail>
          ))}
        </div>
        <div className="video-fullscreen" hidden={!this.state.selectedVideo}>
          <button onClick={this.setSelectedVideo(undefined)}>X</button>
        </div>
      </div>
    );
  }
}

export default Work;
