
import React from 'react';
import { FaBlog } from 'react-icons/fa';

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
    <div className='grid'>
      <p className='text-xl text-gray-200/50 font-semibold'>{publication}</p>
      <div className='flex flex-row items-center'>
      <FaBlog size={24} className="text-white mr-2" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p className='text-2xl font-bold text-orange-600'>{title}</p></a>
        </div>
      <p className='text-xl text-gray-200/50'>{date}</p>
    </div>
  );
};

export default SpotlightArticle;
