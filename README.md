Product Showcase App
A simple React application that displays a list of tech products (think Amazon-style)  with descriptions and dynamic pricing. Built with React, Bootstrap, and custom components.

🚀 Features
Product cards with titles and descriptions

Old vs. new pricing display

Reusable components (Product, Price)

Styled with Bootstrap and custom CSS

📁 Project Structure
bash
Copy
Edit
src/
│
├── components/
│   ├── Product.js         # Displays individual product info
│   ├── ProductTab.js      # Renders list of products
│   ├── Price.js           # Displays old/new price
│
├── styles/
│   ├── Product.css
│   ├── Price.css
│   └── ProductTab.css
│
├── App.js
└── index.js
🛠️ Technologies Used
React

Bootstrap

JavaScript (ES6+)

CSS Modules
✨ Future Improvements
Add-to-cart functionality

Product images

Filtering/sorting

API integration



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
