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
        img: "./Site-vinted2.png",
        title: "Site de vente entre particuliers",
        text: "Projet en équipe de 4 développeurs",
        desc: "Site e-commerce, concurrent de Vinted",
        code: "https://github.com/arnaudpant/vinted",
        tech: ["React", "TypeScript", "Firebase", "SCRUM"],
        demo: "https://bootcamp-vinted.netlify.app/",
    },
    {
        img: "./Site-rack.png",
        title: "Racks à pinard",
        text: "Application de gestion de cave à vin",
        desc: "Visualisez, ajoutez, supprimez ou sauvegardez vos bouteilles de vin. Gardez un historique et gérez vos stocks",
        code: "https://github.com/arnaudpant/ts-rack-pinard",
        tech: ["React", "TypeScript", "Firebase"],
        demo: "https://rack-a-pinard.web.app/",
    },
    {
        img: "./Site-njoy.png",
        title: "N'Joy Life",
        text: "Landing page d'une naturopathe (Commande client)",
        desc: "Création de la maquette sur Figma",
        code: "https://github.com/arnaudpant/ts-njoylife",
        tech: ["TypeScript", "Tailwind", "Figma"],
        demo: "https://www.joelle-corda-naturopathe.fr/index.html",
    },
];