import { FC, useEffect, useState } from "react";
import { IPhotosGallery } from "./interfaces/PhotosGallery.interface";


const PhotosGallery: FC<IPhotosGallery> = ({gallery}) => {

    const [images, setImages] = useState<string[]>([]);
    const [loadError, setLoadError] = useState<boolean>(false);

    useEffect(() => {
        fetch("http://localhost:3200/api/photos")
            .then((res) => res.json())
            .then((res) => {
                setImages(res);
            })
            .catch((err) => {
                setLoadError(true);
                console.log(err);
            })
    }, [gallery]);

    return (
        <>
            {
                images.length === 0 || loadError ? (
                    <div className="photos-gallery-error">
                        {loadError ? "Wystąpił błąd przy ładowaniu zdjęć" : "Brak zdjęć"}
                    </div>
                ) : (
                    <div className="photos-gallery-content-container">
                        {
                            images.map((image, index) => (
                                <img key={index} src={`http://localhost:3200/static/photos/${gallery}/${image}`} alt={image.split("/").at(image.length - 1)} />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};

export default PhotosGallery;