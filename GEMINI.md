# Project Overview

This is a React project built with Vite and TypeScript. It uses `shadcn-ui` for components and Tailwind CSS for styling. The project is a website for a digital arts agency called "Galaxy Digital Arts". It has pages for Home, Services, Portfolio, About, Blog, and Contact.

## Main Technologies

*   **Vite:** A fast build tool for modern web projects.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **shadcn-ui:** A collection of re-usable components for React.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **React Router:** A routing library for React applications.
*   **ESLint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Project Structure

```
/Users/joai/Downloads/galaxy-digital-arts-main/
├───.gitignore
├───bun.lockb
├───Colorbend.md
├───components.json
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───postcss.config.js
├───README.md
├───tailwind.config.ts
├───tsconfig.app.json
├───tsconfig.json
├───tsconfig.node.json
├───vite.config.ts
├───node_modules/...
├───public/
│   ├───favicon.ico
│   ├───placeholder.svg
│   └───robots.txt
└───src/
    ├───App.tsx
    ├───index.css
    ├───main.tsx
    ├───vite-env.d.ts
    ├───assets/
    │   ├───hero-bg.jpg
    │   ├───project-ai-chatbot.jpg
    │   ├───project-corporate.jpg
    │   └───project-ecommerce.jpg
    ├───components/
    │   ├───ColorBends.css
    │   ├───ColorBends.tsx
    │   ├───Footer.tsx
    │   ├───Header.tsx
    │   ├───ProcessStep.tsx
    │   ├───ProjectCard.tsx
    │   ├───ServiceCard.tsx
    │   ├───TestimonialCard.tsx
    │   └───ui/
    │       ├───accordion.tsx
    │       ├───alert-dialog.tsx
    │       ├───alert.tsx
    │       ├───aspect-ratio.tsx
    │       ├───avatar.tsx
    │       ├───badge.tsx
    │       ├───breadcrumb.tsx
    │       ├───button.tsx
    │       ├───calendar.tsx
    │       ├───card.tsx
    │       ├───carousel.tsx
    │       ├───chart.tsx
    │       ├───checkbox.tsx
    │       ├───collapsible.tsx
    │       ├───command.tsx
    │       ├───context-menu.tsx
    │       ├───dialog.tsx
    │       ├───drawer.tsx
    │       ├───dropdown-menu.tsx
    │       ├───form.tsx
    │       ├───hover-card.tsx
    │       ├───input-otp.tsx
    │       ├───input.tsx
    │       ├───label.tsx
    │       ├───menubar.tsx
    │       ├───navigation-menu.tsx
    │       ├───pagination.tsx
    │       ├───popover.tsx
    │       ├───progress.tsx
    │       ├───radio-group.tsx
    │       ├───resizable.tsx
    │       ├───scroll-area.tsx
    │       ├───select.tsx
    │       ├───separator.tsx
    │       ├───sheet.tsx
    │       ├───sidebar.tsx
    │       ├───skeleton.tsx
    │       ├───slider.tsx
    │       ├───sonner.tsx
    │       ├───switch.tsx
    │       ├───table.tsx
    │       ├───tabs.tsx
    │       ├───textarea.tsx
    │       ├───toast.tsx
    │       ├───toaster.tsx
    │       ├───toggle-group.tsx
    │       ├───toggle.tsx
    │       ├───tooltip.tsx
    │       └───use-toast.ts
    ├───hooks/
    │   ├───use-mobile.tsx
    │   └───use-toast.ts
    ├───lib/
    │   └───utils.ts
    └───pages/
        ├───About.tsx
        ├───Blog.tsx
        ├───Contact.tsx
        ├───Home.tsx
        ├───NotFound.tsx
        ├───Portfolio.tsx
        └───Services.tsx
```

## Building and Running

To build and run this project, you will need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm i
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server at `http://localhost:8080`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the production-ready files.

## Development Conventions

*   **Components:** Components are located in the `src/components` directory. `shadcn-ui` components are in `src/components/ui`.
*   **Pages:** Pages are located in the `src/pages` directory.
*   **Styling:** The project uses Tailwind CSS for styling. The configuration is in `tailwind.config.ts`.
*   **Routing:** The project uses React Router for routing. The routes are defined in `src/App.tsx`.
*   **Linting:** The project uses ESLint for linting. The configuration is in `eslint.config.js`. To run the linter, use the following command:
    ```bash
    npm run lint
    ```
