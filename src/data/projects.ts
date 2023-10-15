export type Card = {
    img: string,
    title: string,
    text: string,
    code: string,
    tech: string[],
    demo: string
}

export const projects: Card[] = [
    {
        img: "./Site7.png",
        title: "Racks à pinard",
        text: "Site en cours de développement",
        code: "https://github.com/arnaudpant/ts-rack-pinard",
        tech: ["TypeScript", "React", "Firebase"],
        demo: "https://rack-a-pinard.web.app/",
    },
    {
        img: "./Site4.png",
        title: "N'Joy Life",
        text: "Commande pour un client - En cours de recodage",
        code: "",
        tech: ["TypeScript", "Tailwind", "Figma"],
        demo: "https://www.joelle-corda-naturopathe.fr/index.html",
    },
    {
        // TODO: Site responsive
        img: "./Site2.png",
        title: "Kal Agency",
        text: "Site d'une agence web avec un beau design.",
        code: "https://github.com/arnaudpant/react-kal-agency",
        tech: ["React", "redux"],
        demo: "https://kal-agency.netlify.app/",
    },
    {
        //TODO: Responsive
        img: "./Site_FitBody.png",
        title: "FitBody",
        text: "Site vitrine d'une salle de sport.",
        code: "https://github.com/arnaudpant/fitbody",
        tech: ["React", "redux"],
        demo: "https://react-fitbody.netlify.app/",
    },
    {
        //TODO: Footer en bas
        img: "./Site3.png",
        title: "React Marmitton",
        text: "Inspiré du site de cuisine Marmitton, possibilité de chercher des recettes, de les mettre en favoris.",
        code: "https://github.com/arnaudpant/react-marmitton",
        tech: ["React", "SASS"],
        demo: "https://react-marmitton.netlify.app/",
    },
];