import React from 'react';
import { Link } from "react-router-dom";

/* stylesheets */
import "../styles/about.css";

/* assets */
import icon from "../assets/pages/about/icon.png";
import github from "../assets/icons/github.png";
import twitter from "../assets/icons/twitter.png";
import pixiv from "../assets/icons/pixiv.png";

function About() {
  document.title = "About - archIVe";

  return(
    <>
      <span className="flex-box">
        <div className="profile">
          <img className="icon" src={ icon } alt="icon" />
          <p className="name">N</p>
        </div>

        <div className="block interests">
          <h2 className="h2-about">interests</h2>
          <ul className="interests">
            <li>Cyber Security</li>
            <li>Blockchain</li>
            <li>3DCG</li>
          </ul>
        </div>

        <div className='block links'>
          <h2 className='h2-about'>Links</h2>

          <ul>
            <li><a href="https://twitter.com/arch4e_ShioN"><img src={ twitter} alt="twitter" /></a></li>
          <a href="https://github.com/arch4e"><img src={ github } alt="github" /></a>
          <a href="https://www.pixiv.net/users/20493799"><img src={ pixiv } alt="pixiv" /></a>
          </ul>
        </div>

        <div className='block blog'>
          <h2 className='h2-about'>blog</h2>
          <Link to={ `posts` } className='link'>arch4e</Link>
        </div>
      </span>
    </>
  );
}

export default About;
