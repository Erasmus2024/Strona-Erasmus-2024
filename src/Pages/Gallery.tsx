import React, { useState } from 'react';
import MainNavbar from '../Components/MainNavbar';
import './PageStyles/Gallery.scss';
import VideosGalleryWrapper from '../Components/VideosGalleryWrapper';
import PhotosGalleryWrapper from '../Components/PhotosGalleryWrapper';
import Footer from '../Components/Footer';

const Gallery: React.FC = () => {
    const [actualChoice, setActualChoice] = useState<boolean>(false); // false - videos, true - photos

    return (
        <div className='container' >
            <MainNavbar />
            <div className="choose-videos-gallery-container">
                <div className={`wrapper-container ${actualChoice ? 'right-underline' : 'left-underline'}`}>
                    <div 
                        className="videos-pick-wrapper" 
                        onClick={() => setActualChoice(false)}
                    >
                        Galeria filmów
                    </div>
                    <div 
                        className="gallery-pick-wrapper" 
                        onClick={() => setActualChoice(true)}
                    >
                        Galeria zdjęć
                    </div>
                </div>
            </div>
            { actualChoice ? (
                <PhotosGalleryWrapper />
            ) : (
                <VideosGalleryWrapper />
            )}
            <Footer />
        </div>
    );
};

export default Gallery;
