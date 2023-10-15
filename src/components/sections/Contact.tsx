import { RiMapPin2Line } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";

const Contact: React.FC = () => {
    return (
        <section
            className="w-full flex justify-evenly md:justify-center items-center bg-prim-variant"
            id="contact"
        >
            <div className="container mx-auto my-16 md:px-4 flex flex-col md:flex-row justify-center items-start">

                {/* CONTACT */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-2xl text-center md:text-left text-secondaire font-bold px-8 md:px-0">
                        Contact
                    </h2>
                    <h3 className="text-lg pt-4 px-6 md:px-0 text-center md:text-left">
                        Ne soyez pas timide !
                    </h3>

                    <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 mt-4 gap-y-4">
                        <div className="flex flex-row items-center">
                            <button className="flex flex-row items-center bg-secondaire rounded px-2 py-1 text-primaire">
                                <RiMailSendFill className="text-4xl text-primaire mr-2" />
                                <a href="mailto:arnaud.pantenier@gmail.com">
                                    Contactez-moi
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* LOCALISATION */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0 ">
                    <h2 className="text-xl md:text-2xl text-center md:text-left text-secondaire font-bold px-8 md:px-0">
                        Localisation
                    </h2>
                    <div className="w-full md:w-1/2 flex flex-row items-center justify-center md:justify-start md:mt-0 pt-4">
                        <RiMapPin2Line className="text-4xl text-secondaire mr-2" />
                        <p>Nancy, FRANCE 🇫🇷</p>
                    </div>
                    <p className="pt-4 text-center md:text-left">Ouvert au télétravail et région parisienne</p>
                </div>

            </div>
        </section>
    );
};

export default Contact;
