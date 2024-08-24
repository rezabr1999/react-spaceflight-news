import React, { useEffect, useState } from "react";
import ArticleUI from "./component/ArticleUI";
import { ArticleProp } from "./types";

function App() {
  const [article, setArticle] = useState<ArticleProp | null>(null);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => res.json())
      .then((data) => {
        const apiArticle = data.results[0];
        const formattedArticle: ArticleProp = {
          id: apiArticle.id,
          title: apiArticle.title,
          imageUrl: apiArticle.image_url,
          newsSite: apiArticle.news_site,
          publishDate: apiArticle.published_at,
          summary: apiArticle.summary,
          url: apiArticle.url,
        };
        setArticle(formattedArticle);
      });
  }, []);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-xl m-auto">
        {article && <ArticleUI article={article} />}
      </div>
    </div>
  );
}

export default App;
