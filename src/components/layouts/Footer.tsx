import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";

const Footer: React.FC = () => {
    return (
        <footer className="md:h-14 flex flex-col md:flex-row flex-wrap justify-around items-center bg-rad9 text-rad1">
            <p className="pt-2 text-center">Tous droits réservés &copy; 2023</p>
            <div className="flex flex-row p-2 gap-4">
                <a href="https://www.linkedin.com/in/arnaud-pantenier/">
                    <RiLinkedinFill className="text-4xl text-primaire cursor-pointer" />
                </a>
                <a href="https://github.com/arnaudpant/">
                    <RiGithubLine className="text-4xl text-primaire cursor-pointer" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
