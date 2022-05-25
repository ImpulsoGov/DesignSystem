import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import { Footer } from "../componentes/Footer/Footer.jsx";
import { NavBar } from "../componentes/NavBar/NavBar.jsx";
import { Header } from "../componentes/Header/Header.jsx"
import { Parcerias } from "../componentes/Parcerias/Parcerias.jsx";
import { ImageFull } from "../componentes/ImageFull/ImageFull.jsx";
import { Content3Col } from "../componentes/Content3Col/Content3Col.jsx";
import { TextCol } from "../componentes/TextCol/TextCol.jsx";
import { Slider } from "../componentes/Slider/Slider.jsx";


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
			path: "fundamentos/espacamento",
			title: "Espaçamento",
			content: pageLoader(() => import("../documentacoes/espacamento.md"))
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
		  },
		  {
			path: "componentes/parcerias",
			title: "Parcerias",
			imports: { Parcerias },
			content: pageLoader(() => import("../componentes/Parcerias/README.md"))
		  },
		  {
			path: "componentes/imagefull",
			title: "Imagens",
			imports: { ImageFull },
			content: pageLoader(() => import("../componentes/ImageFull/README.md"))
		  },
		  {
			path: "componentes/textcol",
			title: "Coluna de Texto",
			imports: { TextCol },
			content: pageLoader(() => import("../componentes/TextCol/README.md"))
		  },
		  {
			path: "componentes/content3col",
			title: "Conteiner de 3 Colunas",
			imports: { Content3Col, TextCol },
			content: pageLoader(() => import("../componentes/Content3Col/README.md"))
		  },
		  {
			path: "componentes/slider",
			title: "Slider",
			imports: { Slider },
			content: pageLoader(() => import("../componentes/Slider/README.md"))
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
