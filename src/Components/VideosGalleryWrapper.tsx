import React, {useState, useEffect} from 'react';
import jsonVideoData from '../VideoData.json';
import { IVideoData } from './interfaces/IVideoData';
import VideoDisplay from './VideoDisplay';


const VideosGalleryWrapper: React.FC = () => {

    const [videoData, setVideoData] = useState<IVideoData[]>([]);

    
useEffect(() => {

    try{
    const fetchedJSONData = jsonVideoData as IVideoData[];
    setVideoData(fetchedJSONData);
    }catch(error){
        console.error('Error fetching data from JSON file: ', error);
    }
  

}, []);

    return (
        <div className='videos-gallery-container' style={{padding: '0 50px 0 50px', marginBottom: '100px'}}>
           {videoData.map((element) => {
            return <VideoDisplay key={element.code} authors={element.authors} code={element.code} />
           })}
        </div>
    );
};

export default VideosGalleryWrapper;