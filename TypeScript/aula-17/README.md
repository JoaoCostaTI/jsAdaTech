# Configuração do TypeScript

1. Inicializar um projeto node.js
- npm init
2. Instalar o TS
- 2.1 Instalação GLOBAL
    `npm install -g typescript`
- 2.2 Instalação Local (Dentro de um projeto X)
    `npm install typescript -D`
3. Rodar o TypeScript instalado para transpilar o código(Conversão do código TS para JS).
    `npx tsc index.ts`
    `npx tsc index.ts --watch` (Para converter automaticamente)
4. Criar arquivo de configuração do TS
    `npx tsc --init`

5. Compilar
    `npx tsc`
