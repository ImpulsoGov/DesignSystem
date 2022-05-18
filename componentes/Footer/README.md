# Footer

## Tabela de Propriedades

```html|span-3,no-source,plain,light

<style>
    .container {
        background-color: #FFF;
        border: 1px solid #FFF;
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
    }
    table,thead,td,tr,th {
        border-bottom: 1px solid #ddd;
        border-collapse: collapse;
        text-align: left;
        padding: 20px;
        width: 100%;
    }
    th {background-color: #f2f2f2;}
    tr:nth-child(even) {background-color: #f2f2f2;}
</style>
<div class="container">
<table>
<thead>
  <tr>
    <th>Propriedade</th>
    <th>Tipo</th>
    <th>Estrutura</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>address</td>
    <td>object/json</td>
    <td>
        {<br>"first": "str",<br> "second":"str"<br>}
    </td>
  </tr>
  <tr>
    <td>contactCopyright</td>
    <td>object/json</td>
    <td>{<br>"copyright": "str",<br>"email":"str"<br>}</td>
  </tr>
  <tr>
    <td>links</td>
    <td>object/json array</td>
    <td>[{<br>"label": "str",<br>"url":"str"<br>}]</td>
  </tr>
  <tr>
    <td>socialMediaURLs</td>
    <td>object/json</td>
    <td>{<br>"facebook": "str",<br>"instagram":"str",<br>"linkedIn":"str",<br>"twitter":"str"<br>}</td>
  </tr>
</tbody>
</table>
</div>
```

```react
responsive: true

---
<Footer
    address={{
        first: "Rua Aracaju 100 - Vila Madalena",
        second: "São Paulo - SP, 01010-100",
    }}
    contactCopyright={{
        copyright: "© 2021 Impulso",
        email: "contato@impulsogov.org",
    }}
    links={[
        { label: "Quem somos", url: "/quem-somos" },
        { label: "Nossa atuação", url: "/nossa-atuacao" },
        { label: "Notícias", url: "/noticias" },
        { label: "Trabalhe conosco", url: "/trabalhe-conosco" },
        { label: "Quero doar", url: "/quero-doar" },
        { label: "Contato", url: "/contato" }
    ]}
    socialMediaURLs={{
        facebook: "/facebook",
        instagram: "/instagram",
        linkedIn: "/linkedin",
        twitter: "/twitter",
    }}
    />
```

