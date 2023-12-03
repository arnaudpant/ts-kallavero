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
        img: "./Site1.png",
        title: "Racks à pinard",
        text: "Application de gestion de bouteilles de vin (En développement)",
        code: "https://github.com/arnaudpant/ts-rack-pinard",
        tech: ["React", "TypeScript", "Firebase"],
        demo: "https://rack-a-pinard.web.app/",
    },
    {
        img: "./Site4.png",
        title: "N'Joy Life",
        text: "Landing page d'une naturopathe (Commande pour un client)",
        code: "https://github.com/arnaudpant/ts-njoylife",
        tech: ["TypeScript", "Tailwind", "Figma"],
        demo: "https://www.joelle-corda-naturopathe.fr/index.html",
    },
    {
        img: "./Site3.png",
        title: "Clone Netflix",
        text: "Clone du site de Netflix",
        code: "https://github.com/arnaudpant/ts-netflix",
        tech: ["React", "TypeScript", "Firebase", "MUI", "React Query"],
        demo: "",
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