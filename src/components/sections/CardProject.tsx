import { RiLayout5Fill } from "react-icons/ri";
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
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-once="true"
            className="flex flex-col gap-2 max-w-md shadow-xl rounded-3xl overflow-hidden bg-rad3"
        >
            {/* IMAGE */}
            <div className="w-full">
                <img src={card.img} alt={card.text} className=" shadow-sm" />
            </div>
            {/* DESCRIPTIF */}
            <div className="p-4 flex flex-col justify-between">
                <p className="text-lg text-center font-semibold pb-4 text-rad9">
                    {card.title}
                </p>

                <p className="text-md text-center pb-2 text-rad12">
                    {card.text}
                </p>

                <p className="text-md text-center pb-4 text-rad12">
                    {card.desc}
                </p>

                <div className="flex flex-row justify-center gap-2 pb-4 flex-wrap">
                    {card.tech.map((tech, index) => (
                        <div className="bg-rad5 px-3 rounded-lg" key={index}>
                            {tech}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-end pt-4 md:pt-0">
                    <p className="text-sm pr-1 text-rad11">Demo</p>
                    <span>
                        {card.demo !== "" ? (
                            <Link to={card.demo}>
                                <RiLayout5Fill className="text-2xl cursor-pointer mr-2 text-rad11" />
                            </Link>
                        ) : (
                            <div className="text-3xl mr-6 cursor-not-allowed">
                                ⛔️
                            </div>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
