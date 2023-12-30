import React from 'react';

type YouTubeProps = {
    title: string;
    date: string;
    link: string;
  };

const YouTubeCard: React.FC<YouTubeProps> = ({ link, date, title }) => {
    const videoId = link.split('/').pop();
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  
    return (
        <div className=''>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className='p-4 grid items-center space-y-2'>
            <img className="rounded-md" src={thumbnailUrl} alt={`Thumbnail for video with id ${videoId}`} />
            <p className='font-semibold text-md text-center text-white pt-4'>{title}</p>
        </div>
        </a>
        </div>
    );
};

export default YouTubeCard;
