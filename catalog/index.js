import React from "react";
import { createRoot } from "react-dom/client";
import { Catalog, pageLoader } from "catalog";
import { Footer } from "../componentes/Footer/Footer.jsx";
import { NavBar } from "../componentes/NavBar/NavBar.jsx";
import ReactDOM from "react-dom";
//import reportWebVitals from 'reportWebVitals';

const config = {
  title: "Design System da Impulso",
  imports: {
    Provider: require("rebass").Provider
  },
  logoSrc:
    "https://raw.githubusercontent.com/ImpulsoGov/design-system/main/estatico/Color%3DBlack%2C%20Size%3DMedium.png",
  theme: {
    // Colors
    background: "#F9F9F9",
    textColor: "#333333",
    codeColor: "#00263E",
    linkColor: "#FF5555",
    // NavigationBar background color, but also sometimes used as a foreground or border color.
    lightColor: "#D6D6D6",
    // Used in PageHeader
    pageHeadingBackground: "#2EA6BC",
    pageHeadingTextColor: "#fff",
    // Used in Menu and PageHeader to make sure the top parts have the same height.
    pageHeadingHeight: 200,
    // Used for navigation bar
    navBarBackground: "#EFF5F9",
    navBarTextColor: "#2EA6BC",
    // Used in ResponsiveTabs (tab text), Download specimen (title text). Typography: headings.
    brandColor: "#2EA6BC",
    sidebarColor: "#FFFFFF",
    sidebarColorText: "#1F7A99",
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
  },
  pages: [
    {
      path: "/",
      title: "Introdução",
      content: pageLoader(() => import("../documentacoes/introducao.md"))
    },
    {
      path: "instalacao",
      title: "Instalação",
      content: pageLoader(() => import("../documentacoes/instalacao.md"))
    },
    {
      title: "Fundamentos Visuais",
      pages: [
        {
          path: "fundamentos/cores",
          title: "Cores",
          content: pageLoader(() => import("../documentacoes/cores.md"))
        },
        {
          path: "fundamentos/tipografia",
          title: "Tipografia",
          content: pageLoader(() => import("../documentacoes/tipografia.md"))
        },
        {
          path: "fundamentos/logos",
          title: "Logos",
          content: pageLoader(() => import("../documentacoes/logos.md"))
        }
      ]
    },
    {
      title: "Componentes",
      pages: [
        {
          path: "componentes/Dropdown",
          title: "Dropdown",
          content: pageLoader(() =>
            import("../componentes/Dropdown/README.md")
          ),
          imports: { Dropdown: require("../componentes/Dropdown/") }
        },
        {
          path: "componentes/Tags",
          title: "Tags",
          content: pageLoader(() => import("../componentes/Tags/README.md")),
          imports: { Tags: require("../componentes/Tags") }
        },
        {
          path: "componentes/ValuePicker",
          title: "ValuePicker",
          content: pageLoader(() =>
            import("../componentes/ValuePicker/README.md")
          ),
          imports: { ValuePicker: require("../componentes/ValuePicker") }
        },
        {
          path: "componentes/footer",
          title: "Footer",
          imports: { Footer },
          content: pageLoader(() => import("../componentes/Footer/README.md"))
        },
        {
          path: "componentes/navbar",
          title: "NavBar",
          imports: { NavBar },
          content: pageLoader(() => import("../componentes/NavBar/README.md"))
        }
      ]
    },
    {
      path: "/templates",
      title: "Templates",
      content: pageLoader(() => import("../documentacoes/template_base.md"))
    }
  ]
};

ReactDOM.render(<Catalog {...config} />, document.getElementById("catalog"));
