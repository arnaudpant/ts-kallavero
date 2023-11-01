import arnaud from "./../../img/arnaud.jpg";
import { Link } from "react-router-dom";
import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";

const Home: React.FC = () => {
    return (
        <section className="flex flex-col justify-between items-center w-full h-screen md:pt-14 md:justify-evenly bg-background"
            id="home">

            {/* == BLOC B & C == */}
            <div className="flex flex-col-reverse justify-around items-center h-4/5 w-full md:flex-row md:h-3/5 md:px-10">

                {/* Bloc C Infos */}
                <div className="flex flex-col justify-around grow mt-6 text-center md:text-left md:w-2/3 md:h-3/5 md:mt-0 md:px-10">

                    <h1 className="text-xl md:text-3xl font-semibold px-8 md:px-0">
                        Ensemble développons un produit web innovant !
                    </h1>
                    <div>
                        <p className="text-lg pt-4 px-4 md:text-xl md:px-0">
                            Bonjour, je suis Arnaud. <span>👋🏻</span>
                        </p>
                        <p className="text-lg pt-2 px-4 md:text-xl md:px-0">
                            Développeur Front-End
                        </p>
                        <p className="text-lg pt-2 px-4 md:text-xl md:px-0">React & Typescript
                        </p>
                    </div>
                    <button className="w-40 mx-auto bg-secondaire rounded mt-4 px-2 py-1 text-primaire md:mx-0">
                        <a href="mailto:arnaud.pantenier@gmail.com">
                            Contactez-moi
                        </a>
                    </button>
                    <div className="flex flex-row justify-center md:justify-start mt-2 md:mt-4 gap-4">
                        <Link to="https://www.linkedin.com/in/arnaud-pantenier/">
                            <RiLinkedinFill className="text-3xl text-secondaire cursor-pointer" />
                        </Link>
                        <Link to="https://github.com/arnaudpant/">
                            <RiGithubLine className="text-3xl text-secondaire cursor-pointer mr-2" />
                        </Link>
                    </div>
                </div>

                {/* Bloc B Portrait */}
                <div className="mt-8 md:w-1/3 md:mt-0">
                    <img
                        src={arnaud}
                        alt="Portrait de Arnaud"
                        className="w-1/2 mx-auto rounded-full shadow-lg md:w-full"
                    />
                </div>

            </div>


            {/* BOX STACK  */}
            <div className="mt-2 flex flex-col md:flex-row items-center gap-2 md:gap-8">
                <div className="flex flex-row items-center gap-2 md:gap-4">
                    {/* React */}
                    <svg width="35.93" height="32" viewBox="0 0 256 228">
                        <path
                            fill="#00D8FF"
                            d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
                        />
                    </svg>
                    {/* TypeScript */}
                    <svg viewBox="0 0 48 48" width="48px" height="48px">
                        <rect
                            width="36"
                            height="36"
                            x="6"
                            y="6"
                            fill="#1976d2"
                        />
                        <polygon
                            fill="#fff"
                            points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                        />
                        <path
                            fill="#fff"
                            d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                        />
                    </svg>
                    {/* Git */}
                    <svg width="75.86" height="32" viewBox="0 0 256 108">
                        <path
                            fill="#2F2707"
                            d="M152.984 37.214c-5.597 0-9.765 2.748-9.765 9.362c0 4.983 2.747 8.443 9.463 8.443c5.693 0 9.56-3.355 9.56-8.65c0-6-3.46-9.155-9.258-9.155Zm-11.19 46.701c-1.325 1.625-2.645 3.353-2.645 5.39c0 4.067 5.186 5.291 12.31 5.291c5.9 0 13.938-.414 13.938-5.9c0-3.261-3.867-3.462-8.753-3.768l-14.85-1.013Zm30.113-46.394c1.828 2.34 3.764 5.597 3.764 10.276c0 11.292-8.851 17.904-21.667 17.904c-3.259 0-6.209-.406-8.038-.914l-3.359 5.39l9.969.61c17.602 1.122 27.975 1.632 27.975 15.157c0 11.702-10.272 18.311-27.975 18.311c-18.413 0-25.433-4.68-25.433-12.716c0-4.578 2.035-7.015 5.596-10.378c-3.358-1.419-4.476-3.961-4.476-6.71c0-2.24 1.118-4.273 2.952-6.208c1.83-1.93 3.864-3.865 6.306-6.103c-4.984-2.442-8.75-7.732-8.75-15.262c0-11.697 7.733-19.731 23.295-19.731c4.376 0 7.022.402 9.362 1.017h19.84v8.644l-9.361.713Zm27.259-18.487c-5.8 0-9.157-3.36-9.157-9.161c0-5.793 3.356-8.95 9.157-8.95c5.9 0 9.258 3.157 9.258 8.95c0 5.801-3.357 9.161-9.258 9.161ZM186.04 80.171v-8.033l5.19-.71c1.425-.205 1.627-.509 1.627-2.038V39.48c0-1.116-.304-1.832-1.325-2.134l-5.492-1.935l1.118-8.238h21.061V69.39c0 1.63.098 1.833 1.629 2.039l5.188.71v8.032H186.04Zm69.227-3.944c-4.376 2.135-10.785 4.068-16.586 4.068c-12.106 0-16.682-4.878-16.682-16.38V37.264c0-.61 0-1.017-.817-1.017h-7.12V27.19c8.955-1.02 12.513-5.496 13.632-16.585h9.666v14.45c0 .71 0 1.017.815 1.017h14.343v10.173H237.36v24.313c0 6.002 1.426 8.34 6.917 8.34c2.852 0 5.799-.71 8.24-1.626l2.75 8.954"
                        />
                        <path
                            fill="#DE4C36"
                            d="M104.529 49.53L58.013 3.017a6.86 6.86 0 0 0-9.703 0l-9.659 9.66l12.253 12.252a8.145 8.145 0 0 1 8.383 1.953a8.157 8.157 0 0 1 1.936 8.434L73.03 47.125c2.857-.984 6.154-.347 8.435 1.938a8.161 8.161 0 0 1 0 11.545a8.164 8.164 0 0 1-13.324-8.88L57.129 40.716l-.001 28.98a8.248 8.248 0 0 1 2.159 1.544a8.164 8.164 0 0 1 0 11.547c-3.19 3.19-8.36 3.19-11.545 0a8.164 8.164 0 0 1 2.672-13.328v-29.25a8.064 8.064 0 0 1-2.672-1.782c-2.416-2.413-2.997-5.958-1.759-8.925l-12.078-12.08L2.011 49.314a6.863 6.863 0 0 0 0 9.706l46.516 46.514a6.862 6.862 0 0 0 9.703 0l46.299-46.297a6.866 6.866 0 0 0 0-9.707"
                        />
                    </svg>
                </div>
            </div>


            {/* BOX SWIPPE */}
            <div className="relative flex justify-center h-12 md:hidden">
                <div className="home-swippe-icon-scroll "></div>
            </div>
        </section>
    );
};

export default Home;