# Projeto de Calendário de Vendas

Este projeto é uma aplicação de calendário desenvolvida em React que exibe os valores de vendas de uma API em um calendário, usando várias bibliotecas para funcionalidades específicas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **styled-components**: Biblioteca para estilização de componentes em React.
- **axios**: Cliente HTTP para realizar requisições à API.
- **FullCalendar**: Biblioteca JavaScript para criar e gerenciar calendários.
- **json-server**: Ferramenta para simular uma API REST.
- **react-router-dom**: Biblioteca para roteamento em aplicações React.
- **ts-jest**: Biblioteca para realizar testes unitários com TypeScript.
- **zod**: Biblioteca usada para validação de form.

## Estrutura do Projeto

- `src/components`: Contém os componentes reutilizáveis, `Calendar`, `Header`.
- `src/services`: Contém a configuração do axios para fazer requisições à API.
- `src/pages`: Contém as páginas da aplicação, como `CalendarPage`.
- `src/styles`: Contém os estilos globais e específicos de cada componente.

## Instalação

1. Clone o repositório:

   ```bash
   git clone <https://github.com/gabriellazaroni/fullcalendar-js.git>

   ```

2. Instale as dependencias:

   ```bash
   npm install

   ```

3. Para rodar a apiREST json-server

   ```bash
   npx json-server --watch server.json --port 3001
   ```
