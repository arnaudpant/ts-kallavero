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
        text: "Application de gestion de bouteilles de vin (En développement)",
        code: "https://github.com/arnaudpant/ts-rack-pinard",
        tech: ["TypeScript", "React", "Firebase"],
        demo: "https://rack-a-pinard.web.app/",
    },
    {
        img: "./Site4.png",
        title: "N'Joy Life",
        text: "Commande pour un client - Landing page d'une naturopathe",
        code: "",
        tech: ["TypeScript", "Tailwind", "Figma"],
        demo: "https://www.joelle-corda-naturopathe.fr/index.html",
    },
    {
        // TODO: Site responsive
        img: "./Site2.png",
        title: "Kal Agency",
        text: "Site vitrine d'une agence web",
        code: "https://github.com/arnaudpant/react-kal-agency",
        tech: ["React", "redux"],
        demo: "https://kal-agency.netlify.app/",
    },
];