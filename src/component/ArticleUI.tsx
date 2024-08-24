import React from "react";
import { ArticleProp } from "../types";

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

const ArticleUI: React.FC<{ article: ArticleProp }> = ({ article }) => {
  return (
    <div className="border-2 border-slate-200 p-5 flex flex-col gap-4 max-w-sm m-auto">
      <div>
        <img
          className="w-full h-full"
          src={article.imageUrl}
          alt="Article"
        />
      </div>

      <div className="flex flex-col  gap-1">
        <h2 className="text-yellow-600 text-sm">{article.newsSite}</h2>
        <p className="text-slate-500 text-sm">
          {new Date(article.publishDate).toDateString()}
        </p>
      </div>

      <h1 className="">{article.title}</h1>

      <p className="text-slate-600 text-sm">
        {" "}
        {truncateText(article.summary, 100)}
      </p>
      <div className="flex gap-2">
        <a
          href={article.url}
          target="_blank"
          className="text-white text-center p-2 bg-blue-600 flex-1"
        >
          Read more
        </a>
        <button
          type="button"
          className="flex-1 bg-yellow-700 text-white"
        >
          Save
        </button>
        <button
          type="button"
          className="flex-1 bg-green-600 text-white"
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default ArticleUI;
