import React from 'react';
import { IVideoData } from './interfaces/IVideoData';


const VideoDisplay: React.FC<IVideoData> = ({ authors, code }) => {
    return (
        <div className='video'>
            <div className="authors">
                {/* Autorzy: {authors.join(', ')} */}
            </div>
            <div className="video-display">
        <iframe
       
        src={`https://www.youtube.com/embed/${code}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
            </div>
        </div>
    );
};

export default VideoDisplay;