export type Card = {
    img: string,
    title: string,
    text: string,
    desc: string,
    code: string,
    tech: string[],
    demo: string
}

export const projects: Card[] = [
    {
        img: "./Site1.png",
        title: "Racks à pinard",
        text: "Application de gestion de cave à vin",
        desc: "Projet personnel avec authentification et base de données sur Firebase",
        code: "https://github.com/arnaudpant/ts-rack-pinard",
        tech: ["React", "TypeScript", "Firebase"],
        demo: "https://rack-a-pinard.web.app/",
    },
    {
        img: "./Site4.png",
        title: "N'Joy Life",
        text: "Landing page d'une naturopathe (Commande client)",
        desc: "Création de la maquette sur Figma",
        code: "https://github.com/arnaudpant/ts-njoylife",
        tech: ["TypeScript", "Tailwind", "Figma"],
        demo: "https://www.joelle-corda-naturopathe.fr/index.html",
    },
    {
        img: "./Site5.png",
        title: "HuileVak",
        text: "Site vitrine d'un artisan (Commande client)",
        desc: "Site e-commerce et landing page en construction",
        code: "",
        tech: ["React", "Tailwind", "Figma"],
        demo: "https://huilevak-demo.netlify.app/",
    }
];