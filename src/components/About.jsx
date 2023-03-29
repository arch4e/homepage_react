import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

/* scripts */
import { posts } from "../scripts/log.js";

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
          <p className="name">ShioN</p>
          <p className="skill">code writer: Elixir, Node, Rust, ... ( 2014~ ) /</p>
          <p className="skill">3DCG modeler ( 2021~ )</p>
          <div className="links">
            <a href="https://twitter.com/arch4e_ShioN"><img src={ twitter} alt="twitter" /></a>
            <a href="https://github.com/arch4e"><img src={ github } alt="github" /></a>
            <a href="https://www.pixiv.net/users/20493799"><img src={ pixiv } alt="pixiv" /></a>
          </div>
        </div>
      </div>

      <div className="recent-posts">
        <h2>Recent Posts</h2>
        <ul className="posts">
            {
              (posts.slice(0, 3)).map(post =>
                <li className="post" key={ post["slug"] }>
                  <Link to={ `posts/${post["slug"]}` }>
                    <p className="post-title">{ post["title"] }</p>
                    <p className="post-date">date: { post["date"] }</p>
                    <>
                      <span className="post-tags">
                        <p>tag: </p>
                        {
                          post["tags"].map(tag => <p className="post-tag" key={ tag }>{ tag }</p>)
                        }
                      </span>
                    </>
                  </Link>
                </li>
              )
            }
          </ul>
          <span className="jump-to-posts">
            <Link to={ `posts` } className="link">show all posts &gt;&gt;&gt;</Link>
          </span>
      </div>
    </>
  );
}

export default About;
