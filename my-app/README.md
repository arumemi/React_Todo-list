# Aplicativo de Tarefas (To-do)

Uma aplicação moderna e interativa de lista de tarefas construída com React e Vite. Gerencie suas tarefas diárias de forma eficiente com uma interface intuitiva.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)

## 🚀 Funcionalidades

- ✅ **Adicionar Tarefas** - Adicione rapidamente novas tarefas à sua lista
- ✅ **Marcar como Concluída** - Marque tarefas concluídas com feedback visual
- ✅ **Remover Tarefas** - Remova tarefas que você não precisa mais
- ✅ **Filtrar Tarefas** - Visualize todas as tarefas, pendentes ou concluídas
- ✅ **Estatísticas de Tarefas** - Contadores em tempo real de tarefas totais, pendentes e concluídas
- ✅ **Design Responsivo** - Funciona perfeitamente em desktop e dispositivos móveis
- ✅ **Interface Moderna** - Interface limpa com animações e transições suaves

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** (v19.2.0) - Biblioteca JavaScript para construção de interfaces de usuário
- **[Vite](https://vitejs.dev/)** (v7.2.4) - Ferramenta de build rápida e servidor de desenvolvimento
- **CSS Modules** - Estilização com escopo para componentes
- **ESLint** - Qualidade e consistência de código
- **React Hooks** - Gerenciamento de estado com useState e useMemo

## 📋 Pré-requisitos

Antes de executar este projeto, certifique-se de ter o seguinte instalado:

- **Node.js** (v18 ou superior) - [Baixe aqui](https://nodejs.org/)
- **npm** (vem com Node.js) ou **yarn**

## 🔧 Instalação e Configuração

Siga estes passos para executar o projeto localmente:

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd React_Todo-list/my-app
```

### 2. Instale as dependências

```bash
npm install
```

ou se você usa yarn:

```bash
yarn
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
```

ou com yarn:

```bash
yarn dev
```

### 4. Abra no navegador

A aplicação será iniciada em:
```
http://localhost:5173
```

Abra esta URL no seu navegador para ver a aplicação rodando.

## 📦 Scripts Disponíveis

- **`npm run dev`** - Inicia o servidor de desenvolvimento
- **`npm run build`** - Compila o projeto para produção
- **`npm run preview`** - Visualiza a build de produção localmente
- **`npm run lint`** - Executa o ESLint para verificar a qualidade do código

## 📁 Estrutura do Projeto

```
my-app/
├── src/
│   ├── components/
│   │   ├── container/
│   │   │   ├── Container.jsx
│   │   │   ├── container.module.css
│   │   │   └── Typography/
│   │   │       └── Typography.jsx
│   │   ├── Title/
│   │   │   ├── Tittle.jsx
│   │   │   └── Tittle.module.css
│   │   ├── TodoInput/
│   │   │   ├── TodoInput.jsx
│   │   │   └── TodoInput.module.css
│   │   ├── TodoItem/
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoItem.module.css
│   │   ├── TodoList/
│   │   │   ├── TodoList.jsx
│   │   │   └── TodoList.module.css
│   │   └── TodoFilter/
│   │       ├── TodoFilter.jsx
│   │       └── TodoFilter.module.css
│   ├── App.jsx
│   ├── App.module.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🎨 Visão Geral dos Componentes

- **Container** - Wrapper principal do layout com largura máxima e centralização
- **Typography** - Componente de texto com tamanho de fonte e peso personalizáveis
- **Tittle** - Título/cabeçalho da aplicação
- **TodoInput** - Campo de entrada e botão para adicionar novas tarefas
- **TodoItem** - Tarefa individual com checkbox e botão de exclusão
- **TodoList** - Renderiza a lista de tarefas filtradas
- **TodoFilter** - Botões de filtro e exibição de estatísticas

## 💡 Como Usar

1. **Adicionar uma Tarefa**: Digite sua tarefa no campo de entrada e clique em "Add Task" ou pressione Enter
2. **Concluir uma Tarefa**: Clique na checkbox ao lado de uma tarefa para marcá-la como concluída
3. **Deletar uma Tarefa**: Clique no botão × para remover uma tarefa
4. **Filtrar Tarefas**: Use os botões All, Pending ou Completed para filtrar sua visualização
5. **Ver Estatísticas**: Confira a barra de estatísticas para ver a contagem de suas tarefas

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

---

Feito com ❤️ usando React e Vite
