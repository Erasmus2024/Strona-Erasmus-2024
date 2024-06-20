import { FC, useState, useEffect } from "react";
import PhotosGallery from "./PhotosGallery";
import { IPhotosGalleryWrapper } from "./interfaces/PhotosGalleryWrapper.interface";

const PhotosGalleryWrapper: FC<IPhotosGalleryWrapper> = ({section}) => {

    const [selectedGallery, setSelectedGallery] = useState<string>("Szkolenie");

    useEffect(() => {
        if(section === "Wycieczki" || section === "Szkolenie")
        {
            setSelectedGallery(section);
        }
    }, [])

    return (
        <div className="photos-gallery-container" style={{padding: '0 50px 0 50px', marginBottom: '100px' }}>
            <div className="gallery-picker">
                <div className={`wrapper-container ${selectedGallery === "Szkolenie" ? "left-underline" : "right-underline"}`}>
                    <div className="gallery-pick" onClick={() => setSelectedGallery("Szkolenie")}>
                        Szkolenie
                    </div>
                    <div className="gallery-pick" onClick={() => setSelectedGallery("Wycieczki")}>
                        Wycieczki
                    </div>
                </div>
            </div>
            <PhotosGallery gallery={selectedGallery} />
        </div>
    );
};

export default PhotosGalleryWrapper;