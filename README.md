# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Utilizando API Rest Fake

Para simular o uso do `HttpClient`, precisamos de uma API REST, como o foco é o `HttpClient` não vamos nos preocupar em criar uma API REST, para isso podemos usar o `json-server`, que faz uma API REST fake, assim focaremos no `HttpClient`.
Para mais detalhes sobre o `json-server`, podemos consultar seu github.

Para instalar o `json-server`, bastar executar o seguinte comando:

`npm install -g json-server`

Dento do nosso projeto, vamos criar uma pasta chamada “data” dentro de "assets"

`/src/assets/db`

Agora crie um arquivo chamado db.json e jogue dentro da pasta “data” que acabamos de criar:

`/src/assets/data/db.json`

Vamos abrir o arquivo `db.json` e incluir o seguinte json:

`{ "API": [ { "cover": "assets/bt-1.jpg", "type": "DIGITAL", "label": "DIGITAL | PS4", "price": "R$ 129,99" }, { "cover": "assets/bt-4.jpg", "type": "EXCLUSIVE", "label": "DISC | PS5", "price": "R$ 269,99" }, { "cover": "assets/ac-cover.jpg", "type": "BEST OF YEAR", "label": "DIGITAL | PS5", "price": "R$ 369,99" }, { "cover": "assets/bt-hardline.jpg", "type": "NEW", "label": "DIGITAL | PS3 PS4 PS5", "price": "R$ 369,99" } ], "header": { { "novidades": "https://store.playstation.com/pt-br/pages/latest", "colecoes": "https://store.playstation.com/pt-br/pages/collections", "ofertas": "https://store.playstation.com/pt-br/pages/deals", "ps5": "https://store.playstation.com/pt-br/pages/ps5", "assinatura": "https://store.playstation.com/pt-br/pages/subscriptions", "navegar": "https://store.playstation.com/pt-br/pages/browse" } } }`

Vamos rodar o `json-server` para simular nossa API REST, abra um novo terminal e na raiz do projeto execute o seguinte comando:

`json-server --watch src/assets/data/db.jsono`
