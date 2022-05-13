# Footer

## Tabela de Propriedades

|Prop            |Type              |Struct                                                                                              |
|:---:           |:---:             |:---                                                                                                |
|address         |object/json       | <code lang="json"> {"first": "str","second":"str"} </code>                                         |
|contactCopyright|object/json       | <code lang="json"> {"copyright": "str","email":"str"} </code>                                      |
|links           |object/json array | <code lang="json"> [{"label": "str","url":"str"}] </code>                                          |
|socialMediaURLs |object/json       | <code lang="json"> {"facebook": "str","instagram":"str","linkedIn":"str","/twitter":"str"} </code> |


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
