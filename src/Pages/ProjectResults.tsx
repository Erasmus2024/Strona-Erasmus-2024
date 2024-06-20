import { FC } from "react";
import MainNavbar from "../Components/MainNavbar";
import Footer from "../Components/Footer";
import "./PageStyles/Gallery.scss";
import "./PageStyles/ProjectResults.scss"
import VideosGalleryWrapper from "../Components/VideosGalleryWrapper";


const ProjectResults: FC = () => {
    return(
        <div className="container">
            <MainNavbar />
            <div className="content">
                <div className="section-header">
                    <span className="section-header-text">Filmy podsumowujące staż zawodowy</span>
                    <hr />
                </div>
                <VideosGalleryWrapper />
                <br />
                <div className="section-header">
                    <span className="section-header-text">Plakaty informacyjno-edukacyjne</span>
                    <hr />
                </div>
                <div className="posters-section">
                    <a href="../../public/files/plakat-obywatelski.pdf" className="poster-button" target="_blank">
                        <span className="label no-external">Plakat Obywatelski</span>
                    </a>
                    <a href="../../public/files/Ecology in Málaga.pdf" className="poster-button" target="_blank">
                        <span className="label no-external">Ekologia w Maladze</span>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectResults;