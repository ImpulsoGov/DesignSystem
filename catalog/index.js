import React from "react";
import { createRoot } from 'react-dom/client'
import { Catalog, pageLoader } from "catalog";
import {Footer} from "../componentes/Footer/Footer.jsx"
//import reportWebVitals from 'reportWebVitals';

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
        imports : {Footer},
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

const root = createRoot(document.getElementById('catalog'));
root.render(
    <Catalog title="Design System da Impulso" pages={pages} />
);
//reportWebVitals();