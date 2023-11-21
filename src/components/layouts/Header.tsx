const Header: React.FC = () => {
    return (
        <header className="hidden md:fixed md:flex justify-end items-center w-full h-14 bg-rad9 z-10 shadow text-rad1">
            <nav className="text-primaire mr-8">
                <a href="#home" className="mr-8">Accueil</a>
                <a href="#about" className="mr-8">A propos</a>
                <a href="#portfolio" className="mr-8">Projets</a>
                <a href="#contact" className="">Contact</a>
            </nav>
        </header>
    );
};

export default Header;