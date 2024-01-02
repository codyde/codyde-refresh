import React from "react";
import { FaBlog } from "react-icons/fa";

type SpotlightArticleProps = {
  publication: string;
  title: string;
  date: string;
  link: string;
};

const SpotlightArticle: React.FC<SpotlightArticleProps> = ({
  publication,
  title,
  date,
  link,
}) => {
  return (
    <div className="grid">
      <div className="flex flex-row items-center">
        <span className="mr-4">
          <FaBlog size={24} className="dark:text-white text-black" />
        </span>
        <div className="grid">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="text-2xl font-bold text-orange-600">{title}</p>
        </a>
        <p className="text-lg dark:text-gray-200/50 text-black font-semibold">
          {publication} - {date}
        </p>
        </div>
      </div>
    </div>
  );
};

export default SpotlightArticle;
