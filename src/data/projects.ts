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
        text: "Application de gestion de bouteilles de vin",
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
        img: "./Site5.png",
        title: "Huile",
        text: "Site vitrine d'un artisan",
        code: "",
        tech: ["React", "Figma"],
        demo: "https://huilevak-demo.netlify.app/",
    },
    {
        img: "./Site3.png",
        title: "Clone Netflix",
        text: "Clone du site de Netflix",
        code: "https://github.com/arnaudpant/ts-netflix",
        tech: ["React", "TypeScript", "Firebase", "MUI", "React Query"],
        demo: "",
    },
];