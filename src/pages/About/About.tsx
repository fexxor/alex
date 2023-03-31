import "./About.css";
import portrait from "./portrait.jpg";

const About: React.FC = ({}) => {
  return (
    <div className="About">
      <img src={portrait}></img>
      <div className="info">
        <p>Hello!</p>
        <p>
          I'm a Swedish-Greek filmmaker based in Bergen, Norway. I grew up in
          Stockholm, Sweden and moved to Norway in 2013 when I was admitted to
          the Norwegian Film School in Lillehammer. (BFA in Directing)
        </p>
        <p>
          I love political topics, strong female characters, alternate
          realities, intimacy, surprising dialogue and expressionist visuals.
        </p>
        <p>
          Injustice and class struggle makes my blood boil. Creatively I'm more
          of a dreamer than a researcher. My process always starts with a
          fantasy of some sort. Regardless of if I'm working with a big team or
          on a micro budget, I always try to create fascination to lure the
          audience.
        </p>
        <p>
          My most notable works are GENERATION MARS which was an academy award
          finalist in the student drama section and screened at many acclaimed
          festivals all over the world, KILL THE RICH, which won prizes at the
          Swedish Short Film Festival, the Norwegian Short Film Festival and
          Tolpuddle Radical Film Festival, and PARADIS which is now in
          distribution.
        </p>
        <p>
          Don't hesitate to contact me. I'm always curious about new
          collaborations.
        </p>
      </div>
    </div>
  );
};

export default About;
