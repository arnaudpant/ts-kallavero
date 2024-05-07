import { RiMapPin2Line } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";

const Contact: React.FC = () => {
    return (
        <section
            className="w-full flex justify-evenly md:justify-center items-center bg-rad1 text-rad-12"
            id="contact"
        >
            <div className="container mx-auto my-16 md:px-4 flex flex-col md:flex-row justify-center items-start">

                {/* CONTACT */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-2xl text-center md:text-left text-rad9 font-bold px-8 md:px-0">
                        Contact
                    </h2>
                    <h3 className="text-lg pt-4 px-6 md:px-0 text-center md:text-left">
                        Ne soyez pas timide !
                    </h3>

                    <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 mt-4 gap-y-4">
                        <div className="flex flex-row items-center">
                            <button className="flex flex-row items-center bg-rad10 hover:bg-rad8 rounded px-2 py-1 text-rad1">
                                <RiMailSendFill className="text-4xl text-primaire mr-2" />
                                <a href="mailto:arnaud.pantenier@gmail.com" itemProp = "email">
                                    Contactez-moi
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* LOCALISATION */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0 ">
                    <h2 className="text-xl md:text-2xl text-center md:text-left text-rad9 font-bold px-8 md:px-0">
                        Localisation
                    </h2>
                    <div className="w-full md:w-1/2 flex flex-row items-center justify-center md:justify-start md:mt-0 pt-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <RiMapPin2Line className="text-4xl text-rad9 mr-2" />
                        <p itemProp="addressLocality">Nancy, FRANCE 🇫🇷</p>
                    </div>
                    <p className="pt-4 text-center md:text-left">Lorraine - Luxembourg et région parisienne</p>
                </div>

            </div>
        </section>
    );
};

export default Contact;
