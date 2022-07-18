import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

/* stylesheets */
import "../styles/article.css";

function Article() {
  const [article, setArticle] = useState("");
  const slug = document.location.pathname.split("/").pop();

  useEffect(() => {
    fetch(`https://arch4e.com/static/posts/${slug}.md`).then(res => {
        res.text().then(text => {
          setArticle(text);
    })})});

    return (
      <>
        <div className="article">
          <ReactMarkdown children={ article } />
        </div>
      </>
    )
}

export default Article;