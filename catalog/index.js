import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import { Footer } from "../componentes/Footer/Footer.jsx";
import { NavBar } from "../componentes/NavBar/NavBar.jsx";
import { Header } from "../componentes/Header/Header.jsx"

const pages = [
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
		  },
		  {
			path: "componentes/header",
			title: "Header",
			imports: { Header },
			content: pageLoader(() => import("../componentes/Header/README.md"))
		  }

		]
	  },
	  {
		path: "/templates",
		title: "Templates",
		content: pageLoader(() => import("../documentacoes/template_base.md"))
	  }
];

// https://docs.catalog.style/configuration/theming
// https://github.com/interactivethings/catalog/blob/master/src/DefaultTheme.js
ReactDOM.render(
	<Catalog
		title="Design System da Impulso"
		pages={pages}
		logoSrc={"https://raw.githubusercontent.com/ImpulsoGov/design-system/main/estatico/Color%3DBlack%2C%20Size%3DMedium.png"}
		theme={
      {
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

				// Fonts
				fontFamily: "'Inter'",
				fontHeading: "'Inter'",
				fontMono: "'Inter'",
				// Base font size in pixels.
				baseFontSize: 16,
				// Modular scale ratio that is used to figure out all the different font sizes
				msRatio: 1.2
      }
    }
	/>,
	document.getElementById("catalog")
);
