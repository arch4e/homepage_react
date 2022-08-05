import { useEffect } from 'react';

/* stylesheets */
import "../styles/about.css";

/* assets */
import icon from "../assets/pages/about/icon.png";
import github from "../assets/icons/github.png";
import twitter from "../assets/icons/twitter.png";
import pixiv from "../assets/icons/pixiv.png";

function About() {
  useEffect(() => {
    document.title = "About - archIVe";
  }, []);

  return(
    <>
      <div className="profile">
        <img className="icon" src={ icon } alt="icon" />
        <div className="description">
          <p className="name">0x04</p>
          <p className="skill">code writer: Elixir, Node, Rust, ... ( 2014~ ) /</p>
          <p className="skill">3DCG modeler ( 2021~ )</p>
          <div className="links">
            <a href="https://twitter.com/NoIV_Dev"><img src={ twitter} alt="twitter" /></a>
            <a href="https://github.com/LyIV"><img src={ github } alt="github" /></a>
            <a href="https://www.pixiv.net/users/20493799"><img src={ pixiv } alt="pixiv" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;