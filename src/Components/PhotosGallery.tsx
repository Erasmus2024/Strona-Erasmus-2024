import { FC, useEffect, useState } from "react";
import { IPhotosGallery } from "./interfaces/PhotosGallery.interface";

const img_context = require.context("../../public/images", true);

const PhotosGallery: FC<IPhotosGallery> = ({gallery}) => {

    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        const img_list = img_context.keys().filter((img: string) => img.includes(gallery));
        setImages(img_list.map((img: string) => img_context(img)));
    }, [gallery]);

    return (
        <>
            {
                images.length === 0 ? (
                    <div className="photos-gallery-error">
                        {"Brak zdjęć"}
                    </div>
                ) : (
                    <div className="photos-gallery-content-container">
                        {
                            images.map((image, index) => (
                                <img key={index} src={image} alt={`${gallery}-${index + 1}`} />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};

export default PhotosGallery;