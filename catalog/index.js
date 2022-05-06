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
      }
    ]
  },
  {
    title: "Componentes",
    pages: [
      {
        path: "Componentes/footer",
        title: "Footer",
        content: pageLoader(() => import("./documentacoes/footer.md"))
      }
    ]
  },
  {
    title: "Templates",
    pages: [
      {
        path: "templates/template_base",
        title: "Template Base",
        content: pageLoader(() => import("./documentacoes/template_base.md"))
      }
    ]
  }
];

ReactDOM.render(
  <Catalog title="Design System da Impulso" pages={pages} />,
  document.getElementById("catalog")
);
