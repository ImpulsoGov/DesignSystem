import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Introdução",
    content: pageLoader(() => import("./documentacoes/introducao.md"))
  },
  {
    path: "instalacao",
    title: "Instalação",
    content: pageLoader(() => import("./documentacoes/instalacao.md"))
  },
  {
    title: "Fundamentos Visuais",
    pages: [
      {
        path: "fundamentos/cores",
        title: "Cores",
        content: pageLoader(() => import("./documentacoes/cores.md"))
      },
      {
        path: "fundamentos/tipografia",
        title: "Tipografia",
        content: pageLoader(() => import("./documentacoes/tipografia.md"))
      }
    ]
  },
  {
    title: "Componentes",
    pages: [
      {
        path: "componentes/dropdown",
        title: "Dropdown",
        content: pageLoader(() => import("../componentes/Dropdown/README.md"))
      },
      {
        path: "componentes/footer",
        title: "Footer",
        content: pageLoader(() => import("../componentes/Footer/README.md"))
      }
    ]
  },
  {
    path: "/templates",
    title: "Templates",
    content: pageLoader(() => import("./documentacoes/template_base.md"))
  }
];

const theme = {  
  // Colors
  background: "#F9F9F9",
  textColor: "#333333",
  codeColor: "#00263E",
  linkColor: "#FF5555",

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: "#D6D6D6",

  // Used in PageHeader
  pageHeadingBackground: "#2EA6BC",
  pageHeadingTextColor: "#fff",

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 200,

  // Used for navigation bar
  navBarBackground: "#EFF5F9",
  navBarTextColor: "#2EA6BC",

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: "#2EA6BC",

  sidebarColor: "#FFFFFF",
  sidebarColorText: "#2EA6BC",
  sidebarColorTextActive: "#FF5555",
  sidebarColorLine: "#EBEBEB",
  sidebarColorHeading: "#2EA6BC",

  // Used in the html, react, and image specimens.
  bgLight: "#F2F2F2",
  bgDark: "#333333",

  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: { color: "#FF5555" },
    punctuation: { color: "#535353" },
    script: { color: "#3F7397" },
    function: { color: "#FF5555" },
    keyword: { color: "#3F7397" },
    string: { color: "#00263E" }
  },

  // Patterns
  checkerboardPatternLight:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=",
  checkerboardPatternDark:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==",

  // Fonts
  fontFamily: "'Inter'",
  fontHeading: "'Inter'",
  fontMono: "'Inter'",

  // Base font size in pixels.
  baseFontSize: 16,

  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.2
}

ReactDOM.render(
  <Catalog title="Design System da Impulso" pages={pages} theme={theme} />,
  document.getElementById("catalog")
);
