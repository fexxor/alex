import { Video } from "../../types/Video";
import React from "react";
import "./WorkFullscreen.css";
import { useParams } from "react-router-dom";

const videos: Video[] = [
  {
    title: "Generation Mars",
    info: {
      title: "GENERATION MARS 25 min (2016)",
      description: "Graduation film from The Norwegian Film School.",
      starring: [
        "Inga Ibsdotter Lilleaas",
        "Samantha Lawson",
        "Bernt Bjørn",
        "Ingegjerd Egeberg",
      ],
      awardsAndNominations: [
        "Student Academy Award finalist in the foreign language section.",
        "CINE Golden Eagle Finalist (Student drama).",
        "Won Best Director at Global Youth Film Festival Lakshmipur.",
        "Won Best Narrative Short Film at Sydney World Film Festival",
        "Won Best Drama Short at Berlin Sci-fi Filmfest.",
        "Won Best Cinematography, Best Sound Design, Best Original Score, Best Supporting Actress and the Bronze Medal in the student category at Sweden's Short Film Festival.",
      ],
      screenedAt: [
        "New Filmmakers LA",
        "Bogota Short Film Festival",
        "Flickers Rhode Island IFF",
        "Washington DC Short Film Festival",
        "Big Sur Film Festival",
        "Kyoto International Student Film Festival",
        "First Step Film Festival (Albania 2017)",
        "The Norwegian Film Festival Haugesund",
        "Kristiansand International Childrens Film Festival",
        "Viten Filmfestival Bergen",
        "Amandus Studentfilmfestival",
        "Bermuda International Film Festival",
        "Zlin Dog International Film Festival",
        "Brussels Independent Film Festival",
        "Boston Science Fiction Film Festival",
        "Festival At The Fringe Tranås",
        "Aesthetica Short Film Festival",
      ],
    },
    id: "810907356",
  },
  {
    title: "PARADIS trailer",
    info: {
      title: "PARADIS 17 min (Mer Film, 2021)",
      starring: [
        "Aile Viola Løkken Haggärde",
        "Mathea Olava Lian",
        "Pangea Mcnair",
        "Ira Johansen",
        "Trude Øines",
      ],
      screenedAt: [
        "Bergen International Film Festival",
        "The Norwegian Short Film Festival",
        "Edmonton International Film Festival",
        "Julien Dubuque International Film Festival",
      ],
    },
    id: "810912431",
  },
  {
    title: "Kill the Rich teaser",
    info: {
      title: "KILL THE RICH 17 min (Independent, 2018)",
      description: "Premiered at Gothenburg International Film Festival.",
      starring: ["Melina Tranulis", "Henrik Eilif Borge", "Jon Stensby"],
      screenedAt: [
        "STOCKmotion (2018)",
        "Uppsala International Short Film Festival (2018)",
        "At the Fringe Tranås (2018)",
        "Wunderground Film Festival (Belgium 2019)",
        "Go Short Nijmegen (2019 & 2020)",
        "Nordic Labor Film Festival (2021)",
      ],
    },
    id: "251934669",
  },
  {
    title: "Todays youth",
    info: {
      title: "TODAYS YOUTH",
      description: "Premiered at The Swedish Short Film Festival in 2013",
    },
    id: "810843525",
  },
  {
    title: "4 minuter äldrevård",
    info: {
      title: "4 MINUTER ÄLDREVÅRD",
      description:
        "Premiered at The Swedish Short Film Festival in 2012 (Honorable mention)",
      screenedAt: ["UNICA, Bulgaria (2012)", "Vårrullen (2013)"],
    },
    id: "810832912",
  },
];

const WorkFullscreen: React.FC = () => {
  const { id } = useParams();

  const selectedVideo = videos.find((v) => v.id === id);

  return (
    <div className="WorkFullscreen">
      <div className="video-fullscreen">
        <div className="top-bar">
          <span>{selectedVideo?.info.title}</span>
          <a className="close-button" href="/#/work">
            ×
          </a>
        </div>
        <div className="container">
          <div className="video-container">
            <iframe
              src={"https://player.vimeo.com/video/" + selectedVideo?.id}
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
          <div className="info">
            <p hidden={!selectedVideo?.info.description}>
              {selectedVideo?.info.description}
            </p>
            <p hidden={!selectedVideo?.info.starring}>
              Starring: {selectedVideo?.info.starring?.join(", ")}
            </p>
            <p hidden={!selectedVideo?.info.awardsAndNominations}>
              <ul>
                {selectedVideo?.info.awardsAndNominations?.map((a) => (
                  <li>
                    <div className="awards-and-nominations">
                      <span>-</span>
                      {a}
                    </div>
                  </li>
                ))}
              </ul>
            </p>
            <p hidden={!selectedVideo?.info.screenedAt}>
              Screened at: {selectedVideo?.info.screenedAt?.join(", ") + "."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFullscreen;
