import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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
        setArticle(text)
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="article">
          <ReactMarkdown children={ article } />
        </div>

        <div className="ads-card">
          <AdsCard />
        </div>
      </div>
    </>
  );
}

export default Article;
