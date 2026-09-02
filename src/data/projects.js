import proy1 from "../assets/imgProjects/screenshotLight.webp";
import proy2 from "../assets/imgProjects/backgrounds.webp";
import contrastExtension from "../assets/imgProjects/extension.webp"

export const projects = [
  {
    number: 1,
    title: "Mi Biblioteca Personal",
    description: "Gestor de libros de escritorio en Java Swing. Cataloga tu biblioteca, busca libros con una API externa y organiza por categorías con tema claro/oscuro.",
    listItems: [
      "Integración con Google Books API",
      "Caché local de portadas",
      "Arquitectura en capas"
    ],
    img: proy1,
    pills: ["java", "swing", "api rest"],
    urlRepo: "https://github.com/itsnazaretdev/miBibliotecaApp"
  },
  {
    
  number: 2,
  title: "Contrast Checker",
  description: "Extensión para Visual Studio Code que permite comprobar al instante el contraste entre colores y verificar su cumplimiento con los criterios de accesibilidad WCAG 2.1.",
  listItems: [
    "Soporte para colores HEX, RGB y HSL",
    "Informe de cumplimiento AA y AAA para texto normal y grande",
    "Resultados directamente en el panel Output de VS Code"
  ],
  img: contrastExtension,
  pills: ["javascript", "wcag", "accessibility"],
  urlRepo: "https://github.com/itsnazaretdev/contrastExtension"
  },
  {
     number: 3,
    title: "Collectable Colors",
    description: "Galería de fondos CSS y Tailwind listos para copiar y usar, con vista previa en web simulada y variantes claro/oscuro para cada uno.",
    listItems: [
      "Fondos en CSS puro y como utilidad de Tailwind",
      "Vista previa en un layout completo",
      "Variantes light y dark pensadas como opuestos para un tema completo"
    ],
    img: proy2,
    pills: ["astro", "tailwindcss", "css"],
    urlRepo: "https://github.com/itsnazaretdev/collectable-colors"
  },
  
];

