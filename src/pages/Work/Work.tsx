import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { Video } from "../../types/Video";
import "./Work.css";
import React from "react";

const videos: Video[] = [
  {
    title: "Generation Mars",
    href: "https://vimeo.com/810907356",
    imageUrl: "https://vumbnail.com/810907356.jpg",
  },
  {
    title: "PARADIS trailer",
    href: "https://vimeo.com/810912431",
    imageUrl: "https://vumbnail.com/810912431.jpg",
  },
  {
    title: "Kill the Rich teaser",
    href: "https://vimeo.com/251934669",
    imageUrl: "https://vumbnail.com/251934669.jpg",
  },
  {
    title: "Todays youth",
    href: "https://vimeo.com/810843525",
    imageUrl: "https://vumbnail.com/810843525.jpg",
  },
  {
    title: "4 minuter äldrevård",
    href: "https://vimeo.com/810832912",
    imageUrl: "https://vumbnail.com/810832912.jpg",
  },
];

// https://vumbnail.com/662366685.jpg
class Work extends React.Component<{}, { selectedVideo: Video | undefined }> {
  constructor(props: {}) {
    super(props);
    this.state = { selectedVideo: undefined };
  }

  setSelectedVideo = (video: Video | undefined) => (event: unknown) => {
    this.setState({ selectedVideo: video });
    console.log(video);
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    if (this.state.selectedVideo !== undefined) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return (
      <div className="Work">
        <div className="videos">
          {videos.map((video) => (
            <Thumbnail
              video={video}
              onClick={this.setSelectedVideo}
              key={video.href}
            ></Thumbnail>
          ))}
        </div>
        <div className="video-fullscreen" hidden={!this.state.selectedVideo}>
          <button
            className="close-button"
            onClick={this.setSelectedVideo(undefined)}
          >
            ×
          </button>
          <div className="container">
            <div className="foo">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${"c977-5lBJu4"}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div className="info">
              <p>
                The path of the righteous man is beset on all sides by the
                iniquities of the selfish and the tyranny of evil men. Blessed
                is he who, in the name of charity and good will, shepherds the
                weak through the valley of darkness, for he is truly his
                brother’s keeper and the finder of lost children. And I will
                strike down upon thee with great vengeance and furious anger
                those who would attempt to poison and destroy My brothers. And
                you will know My name is the Lord when I lay My vengeance upon
                thee.
              </p>
              <p>
                Now that we know who you are, I know who I am. I’m not a
                mistake! It all makes sense! In a comic, you know how you can
                tell who the arch-villain’s going to be? He’s the exact opposite
                of the hero. And most times they’re friends, like you and me! I
                should’ve known way back when… You know why, David? Because of
                the kids. They called me Mr Glass.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
