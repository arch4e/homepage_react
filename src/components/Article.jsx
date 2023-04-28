import React, { useEffect, useState } from "react";
import { marked } from "marked";

/* components */
import AdsCard from "./AdsCard.jsx";

/* scripts */
import { posts } from "../scripts/log.js";

/* stylesheets */
import "../styles/ads.css";
import "../styles/article.css";

function Article() {
  const [article, setArticle] = useState("");
  const slug = document.location.pathname.split("/").pop();
  const post = posts.find(post => post.slug === slug);

  useEffect(() => {
    document.title = `${post.title} - archIVe`;

    fetch(`https://arch4e.com/static/posts/${slug}.md`).then(res => {
      res.text().then(text => {
        setArticle(marked.parse(text))
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="article" dangerouslySetInnerHTML={{__html: article}} />

        <div className="ads-card">
          <AdsCard />
        </div>
      </div>
    </>
  );
}

export default Article;
