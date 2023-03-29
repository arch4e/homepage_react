import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

/* components */
import AdsCard from "./AdsCard.jsx";

/* scripts */
import { posts } from "../scripts/log.js";

/* stylesheets */
import "../styles/ads.css";
import "../styles/log.css";

function Log() {
  useEffect(() => {
    document.title = "Log - archIVe";
  }, []);

  return(
    <>
      <div className="container">
        <ul className="posts">
          {
            posts.map(post =>
              <li className="post" key={ post["slug"] }>
                <Link to={ post["slug"] }>
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

        <div className="ads-card">
          <AdsCard />
        </div>
      </div>
    </>
  );
}

export default Log;