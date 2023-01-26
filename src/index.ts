/* Exercício 1
    O que foi feito
     - Criada pastas src e build
     - Na pasta src, rodei o comando "npm i typescript -D", na qual faz a instalação da lib
     - Também na pasta, rodei o comando "npm i @types/node -D", na qual faz a instalação das tipagens do node
      - Criei na pasta principal o arquivo "tsconfig.json" e copiei as configurações do exercício em aula
      - Refatorei o package.json, retirando a linha /"type": "module"/ 
      - Limpei a pasta principal, retirando o index.js que continha o jogo teste de par ou ímpar
      - Criei este arquivo (index.ts) dentro da pasta src e fiz os testes para averiguar se estava ocorrendo tudo certo:
         - escrevi no arquivo: */
              //console.log("Hello World!")

/* Continuação do Exercício 3 
    - Fiz a importação das variáveis já tipadas da "database.ts"
    - Fiz o console.log de cada uma
    - Rodei no terminal o script "npm start" (que eu criei no package.json)
    - Retornou os dados conforme solicitado */

import { user, product, purchase } from "./database";

console.log(user)
console.log(product)
console.log(purchase)