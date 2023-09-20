//import CardProject from "./CardProject";
import { projects } from '../../data/projects';
import { Card } from '../../data/projects';
import CardProject from './CardProject';


const Portfolio: React.FC = () => {
    return (
        <section
            className="w-full flex flex-col justify-evenly md:justify-center items-center bg-background"
            id="portfolio"
        >
            <div className="container mx-auto my-16 md:px-4 flex flex-col">
                {/* Box Titre */}
                <div className="text-left">
                    <h2 className="text-xl md:text-2xl text-secondaire font-bold px-8 md:px-0">
                        Portfolio
                    </h2>
                    <p className="text-lg pt-4 px-8 md:px-0">
                        Un aperçu de mes projets 🔎
                    </p>
                </div>

                {projects.map((card: Card, index) => (
                    <CardProject card={card} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
