import { FC, useState } from "react";
import PhotosGallery from "./PhotosGallery";

const PhotosGalleryWrapper: FC = () => {

    const [selectedGallery, setSelectedGallery] = useState<string>("Szkolenie");

    return (
        <div className="photos-gallery-container">
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