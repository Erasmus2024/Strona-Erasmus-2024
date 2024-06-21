import { FC } from "react";
import MainNavbar from "../Components/MainNavbar";
import Footer from "../Components/Footer";
import "./PageStyles/Gallery.scss";
import "./PageStyles/ProjectResults.scss"


const ProjectResults: FC = () => {
    return(
        <div className="container" style={{marginTop: '70px'}}>
            <MainNavbar />
            <div className="content">
                
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