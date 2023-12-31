//import CardProject from "./CardProject";
import { projects } from "../../data/projects";
import { Card } from "../../data/projects";
import CardProject from "./CardProject";

const Portfolio: React.FC = () => {
    return (
        <section
            className="w-full flex flex-col justify-evenly md:justify-center items-center bg-rad2 text-rad12"
            id="portfolio"
        >
            <div className="container mx-auto my-16 md:px-4 flex flex-col ">
                {/* Box Titre */}
                <div className="text-left">
                    <h2 className="text-xl md:text-2xl text-rad9 font-bold px-8 md:px-0">
                        Portfolio
                    </h2>
                    <p className="text-lg pt-4 px-8 md:px-0">
                        Mes principaux projets 🔎
                    </p>
                </div>
                <div className="flex flex-wrap justify-evenly px-4 gap-8 mt-8">
                    {projects.map((card: Card, index) => (
                        <CardProject card={card} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
