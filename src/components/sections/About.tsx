import about from "./../../img/portfolio/canal.png";
import mirage from "./../../img/portfolio/M2D.png";
import { RiNotionFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const About: React.FC = () => {
    return (
        <section
            className="w-full flex flex-col justify-evenly md:justify-center items-center bg-rad1 text-rad12"
            id="about"
        >
            <div className="container my-16 flex flex-col-reverse justify-center items-center md:flex-row md:justify-between">
                {/* Box Titre */}
                <div className="text-left md:w-1/2 md:px-4">
                    <h2 className="text-xl md:text-2xl text-rad9 font-bold px-8 md:px-0">
                        A propos de moi
                    </h2>
                    <p className="text-lg pt-4 px-8 md:px-0 ">
                        Passionné d'aviation et pilote d'ULM, j'ai effectué une première
                        carrière dans l'Armée de l'Air a réparer et entretenir des avions de
                        chasse au sein d'équipes de mécaniciens ✈️
                        <br />
                        J'ai découvert le code pour touver les solutions aux
                        problèmes que je rencontrais en tant que chef d'équipe.
                        🤔 <br /> Après avoir passé des heures et parfois des
                        nuits 😵‍💫 à coder des logiciels ou des sites web, je
                        me suis tout naturellement reconverti comme
                        développeur web React & TypeScript pour ma deuxième carrière
                        pour vous qui recherchez des
                        développeurs avec un vécu et un savoir être. 🫡
                    </p>
                    <p className="text-lg pt-4 px-8 md:px-0">Travail en remote 💻 et en région parisienne possible.</p>
                    <div className="flex flex-row items-center mt-4">
                        <p className="text-base italic pl-8 pr-2 md:pl-0 text-rad9">
                            Plus d'infos ici:{" "}
                        </p>
                        <Link to="https://continuous-sandalwood-0d9.notion.site/This-is-Arnaud-c8cf4e04a7474303877b86e5a6acd5b2">
                            <span>
                                <RiNotionFill className="text-4xl text-rad10 cursor-pointer" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Box Photo */}
                <div className="w-72 md:w-96 md:mr-4 mb-8 md:mb-0">
                    <img
                        src={about}
                        alt="laptop with developer"
                        className="rounded-xl shadow-lg"
                    />
                     <img
                        src={mirage}
                        alt="laptop with developer"
                        className="rounded-xl shadow-lg mt-4"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
