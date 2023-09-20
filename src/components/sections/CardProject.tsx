import { RiGithubLine, RiLayout5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Card } from '../../data/projects';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

type Props = {
    card: Card
}

const CardProject = ({ card }: Props) => {
    AOS.init();
    return (
        <div 
            data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1200" data-aos-once="true"
        
        className="w-4/5 mx-auto my-8 max-w-3xl shadow-xl rounded-3xl flex flex-col md:flex-row gap-2 overflow-hidden bg-prim-variant">
            {/* IMAGE */}
            <div className="md:w-3/5">
                <img src={card.img} alt="" className="rounded-2xl shadow-lg" />
            </div>
            {/* DESCRIPTIF */}
            <div className="md:w-2/5 p-4 flex flex-col justify-between">
                <p className="text-lg text-center font-semibold ">
                    {card.title}
                </p>
                <p className="text-md text-center">{card.text}</p>
                <div className="flex flex-row justify-center gap-2 flex-wrap">
                    {card.tech.map((tech, index) => (
                        <div className="bg-primaire px-3 rounded-lg" key={index}>{tech}</div>
                    ))}
                </div>

                <div className="flex flex-row justify-center items-center pt-4 md:pt-0">
                    <p className="text-sm pr-1">Code</p>
                    <span>
                        {card.code !== "" ? (
                            <Link to={card.code}>
                                <RiGithubLine className="testA text-3xl cursor-pointer mr-6 text-secondaire" />
                            </Link>
                        ) : (
                            <div className="text-3xl mr-6 cursor-not-allowed">
                                ⛔️
                            </div>
                        )}
                    </span>
                    <p className="text-sm pr-1">Demo</p>
                    <span>
                        <Link to={card.demo}>
                            <RiLayout5Fill className="text-2xl cursor-pointer mr-2 text-secondaire" />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
