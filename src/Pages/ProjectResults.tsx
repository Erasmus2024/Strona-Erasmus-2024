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
                    <embed className="poster-frame" type="application/pdf" title="Plakat Obywatelski" src="/Strona-Erasmus-2024/files/plakat-obywatelski.pdf" />
                    <embed className="poster-frame" type="application/pdf" title="Ekologia w Maladze" src="/Strona-Erasmus-2024/files/Ecology in Málaga.pdf" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectResults;