# Todo List

A responsive Todo List app built with Next.js, React, Tailwind CSS, and shadcn-style UI components. The app lets you add, edit, complete, and delete todos, with data persisted in the browser using `localStorage`.

## Features

- Add todos with a title and description
- Edit existing todos
- Mark todos as complete or incomplete
- Delete todos
- Persist todos in `localStorage`
- Responsive layout for desktop, tablet, and mobile screens
- Animated visual effects using spotlight and sparkles components

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- shadcn UI-style components
- Radix UI
- Lucide React icons
- tsParticles
- Motion

## Project Structure

```text
todo_list/
|-- app/
|   |-- globals.css
|   |-- layout.jsx
|   `-- page.jsx
|-- components/
|   |-- header.jsx
|   |-- loading.jsx
|   |-- todoInput.jsx
|   |-- todoList.jsx
|   `-- ui/
|-- lib/
|   `-- utils.js
|-- public/
|-- package.json
`-- README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs ESLint to check code quality.

## Main Files

- `app/page.jsx`: Main todo app state and layout
- `components/header.jsx`: App header and visual header styling
- `components/todoInput.jsx`: Todo input form
- `components/todoList.jsx`: Todo list, edit, complete, and delete controls
- `components/ui/`: Reusable UI components

## Notes

- Todo data is stored locally in the browser, so todos are specific to the current device and browser.
- This project uses the Next.js App Router.
- Styling is handled mostly through Tailwind CSS utility classes.
