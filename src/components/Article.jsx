import Asciidoctor from "asciidoctor";
import React, { useEffect, useState } from "react";

/* components */
import AdsCard from "./AdsCard.jsx";

/* scripts */
import { posts } from "../scripts/log.js";

/* stylesheets */
import "../styles/ads.css";
import "../styles/article.css";

function Article() {
  const asciidoctor = Asciidoctor();
  const [article, setArticle] = useState("");
  const slug = document.location.pathname.split("/").pop();
  const post = posts.find(post => post.slug === slug);

  useEffect(() => {
    document.title = `${post.title} - archIVe`;

    fetch(`https://arch4e.com/static/posts/${slug}.adoc`).then(res => {
      res.text().then(text => {
        setArticle(asciidoctor.convert(text))
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="article">
          <h1>{ post.title }</h1>
          <span dangerouslySetInnerHTML={{
            __html: article
          }}>
          </span>
        </div>

        <div className="ads-card">
          <AdsCard />
        </div>
      </div>
    </>
  );
}

export default Article;
