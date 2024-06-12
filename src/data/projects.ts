export type Card = {
    img: string,
    title: string,
    text: string,
    desc: string,
    tech: string[],
    demo: string
}

export const projects: Card[] = [
    {
        img: "./Site-rack.png",
        title: "Application de gestion de cave à vin",
        text: "Gérez vos stocks de bouteilles",
        desc: "Ajoutez, supprimez vos bouteilles et gardez un historique",
        tech: ["React", "TypeScript", "Firebase"],
        demo: "https://rack-a-pinard.web.app/",
    },
    {
        img: "./Site-vinted2.png",
        title: "Site de vente entre particuliers",
        text: "Vendez vos vêtements ou objets à des particuliers",
        desc: "Projet agile type SCRUM",
        tech: ["React", "TypeScript", "Firebase", "SCRUM"],
        demo: "https://bootcamp-vinted.netlify.app/",
    },
    {
        img: "./Site-njoy.png",
        title: "Site vitrine professionel",
        text: "Landing page d'une naturopathe (Commande client)",
        desc: "Création de la maquette sur Figma",
        tech: ["TypeScript", "Tailwind", "Figma"],
        demo: "https://www.joelle-corda-naturopathe.fr/index.html",
    },
];