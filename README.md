# Lista de Tarefas - CI/CD

Projeto desenvolvido para demonstrar a utilização de uma pipeline de Integração Contínua (CI) e Entrega/Implantação Contínua (CD) utilizando GitHub Actions.

## Objetivo

Desenvolver uma aplicação web simples de lista de tarefas e automatizar o processo de validação e publicação da aplicação.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- GitHub Actions
- GitHub Pages

## Funcionalidades

- Adicionar tarefas;
- Marcar tarefas como concluídas;
- Excluir tarefas.

## Pipeline CI/CD

A pipeline é executada automaticamente a cada alteração enviada para a branch `main`.

O processo realiza:

1. Download do código;
2. Configuração do Node.js;
3. Execução dos testes automatizados;
4. Publicação da aplicação no GitHub Pages.

O deploy somente é executado quando os testes são concluídos com sucesso.

## Testes

Foram realizados testes em dois cenários:

- Cenário de sucesso: os testes foram executados corretamente;
- Cenário de falha: foi introduzido propositalmente um erro para verificar se a pipeline identificaria a falha.

Após a correção, a pipeline voltou a executar com sucesso.

## Deploy

A aplicação é publicada automaticamente utilizando GitHub Pages.
