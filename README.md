# Webcomponents Quick Start

The Webcomponents Quick Start project is designed to streamline the creation of web components within the UGent UI Design System. By using this template, developers can focus on building feature-rich and consistent UI components, ensuring that they integrate seamlessly with UGent's design language.

## Introduction

This project provides a development environment with minimal configuration and modern development tools. It leverages [Vite]("https://vitejs.dev/") for fast development and building, [LIT](https://lit.dev/) and TypeScript for creating web components, SCSS for styling, and PostCSS for processing and optimizing CSS.

## Features

- A LIT web component example with a property, slotted content, and a CustomEvent.
- [Bootstrap](https://getbootstrap.com/) for consistent styling
- UGent UI Design System Integration
- [PurgeCSS](https://purgecss.com/) integration to remove unused Bootstrap CSS resulting in a smaller component files sizes

## Installation

Follow these steps to set up your development environment:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.ugent.be/FrontendDevelopment/Webcomponents-Quick-Start.git
   ```

2. Change into the project directory:

   ```bash
   cd Webcomponents-Quick-Start
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The index.html will be served on http://localhost:5173, the entry point to this application.

## Development

Develop your components in the `src` directory. Any changes you make will automatically reload the browser.

Refer to `src/my-element.ts` as a starting point for your components logic and `src/style.scss` for styling and ensure you follow the UGent UI Design System guidelines.

Preview your component by adding it to the `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head
    <script type="module" src="/src/my-element.ts"></script>
  </head>
  <body>
    <my-element></my-element>
  </body>
</html>
```

**Recources**:

- [UGent UI Design System](https://universiteitgent.atlassian.net/wiki/spaces/TFRONTDEV/pages/27460052/UGent+UI+Design+System)
- [Lit Introduction](https://lit.dev/docs/)
- [Vite Getting Started](https://vitejs.dev)
- [Customize Bootstrap](https://getbootstrap.com/docs/5.3/customize/overview/)

## Building for production

When it is time to build your component for production, simply run the following command to bundle and optimize your code, making it available in the `dist` folder.

```bash
npm run build
```

Preview your bundled component by running `npm run preview`. This command will boot up a local static web server that serves the files from `dist` at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

```bash
npm run preview
```

## Publishing a Component to the UGent UI GitHub Organization and Npm

To make our components available to the wider UGent community, we have [a public code repository](https://github.com/UGentUI/) for the UGent UI Design System. For easy integration in other projects we publish our components to the npm Registry.

1. Prepare for Publishing:

   - Ensure your `vite.config.js` is configured correctly for production builds. This involves setting up the build property to specify the file name without the hash so it can be easily referenced.

     ```javascript
     // vite.config.js
     import { defineConfig } from "vite";

     export default defineConfig({
       build: {
         rollupOptions: {
           output: {
             entryFileNames: "assets/my-element.js",
           },
         },
       },
     });
     ```

   - Ensure your package.json includes necessary fields such as name, version, description, main, and files.

     ```json
     {
         "name": "@ugent-ui/my-element",
         "version": "1.0.0-beta.1",
         "description": "This is a web component ...",
         "main": "dist/assets/my-element.js",
         "files": [
             "dist/assets/my-element.js"
         ]
         ...
     }
     ```

2. Request an empty private repo in the Github.com UGent UI organisation from an organisation owner.

3. Add the new UGent UI repository as a remote to your local repository.

   ```bash
   git remote add origin https://github.com/UGentUI/new-repository-name.git
   ```

4. Commit and push your component

   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

5. Write documentation in the README and add a demo to Github pages by deploying the `dist` folder with the `Deploy static content to Pages` workflow

6. An UGent UI organization owner will review your component, make the repository public, and publish it to npm upon approval.

7. Your component can now be installed and used in other projects
   ```bash
   npm i @ugentui/my-element
   ```
