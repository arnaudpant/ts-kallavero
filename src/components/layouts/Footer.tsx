import { Link } from "react-router-dom";
import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";

const Footer: React.FC = () => {
    return (
        <footer className="md:h-14 flex flex-col md:flex-row flex-wrap justify-around items-center bg-secondaire text-primaire">
            <p className="pt-2 text-center">Site créé avec React et TypeScript</p>
            <p className="pt-2 text-center">Tous droits réservés &copy; 2023</p>
            <div className="flex flex-row p-2 gap-4">
                <Link to="https://www.linkedin.com/in/arnaud-pantenier/">
                    <RiLinkedinFill className="text-4xl text-primaire cursor-pointer" />
                </Link>
                <Link to="https://github.com/arnaudpant/">
                    <RiGithubLine className="text-4xl text-primaire cursor-pointer" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
