# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.












# 🧱 Dev Stack — Build Your Ideal Development Stack

**Dev Stack** is a responsive React + TypeScript web app that helps developers explore
frontend, backend, database, and tooling technologies, compare them side by side, and
assemble a personal "stack" for their next project — all in a clean, gradient-themed UI
built from a Figma design.



## Technologies Used

1.React 18 + TypeScript — component-based UI with static typing
2.Vite — fast dev server & build tool
3.Tailwind CSS v4 — utility-first styling
4.react-toastify — toast notifications for stack actions
5.JSON — local data source for the technology catalog, loaded via fetch()



## Features

1. **Build-your-own stack** — browse 15 curated technologies as cards (icon, category, rating,
   difficulty, badge) and click **Add to Stack** to collect the ones you want. Duplicate
   additions are blocked with a warning toast, and an added card gets a pink border/button and
   its button flips to **✓ Added to Stack**.

2. **Live "Your Stack" sidebar** — a sticky panel that shows the running count of selected
   technologies, lets you remove any single item, or clear everything at once with
   **Remove All** — with an empty-state message when nothing is selected yet.

3. **Polished, theme-able UI** — a single shared gradient (orange → pink → violet), defined once
   as CSS variables in `src/index.css`, powers the logo, hero headline, and primary buttons, so
   the whole app can be re-themed by editing three color values. The layout is fully responsive
   (1 column on mobile, 2 on tablet, 3 on desktop) with a sticky, mobile-friendly navbar.


### React questions answer 

  1. What is JSX, and why is it used in React?

  # Ans :  (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code directly inside your JavaScript files. 

  2. What is the difference between props and state?

  # Ans : Props are passed into a component from the outside by a parent and state manage into the component.

  3. What does the useState hook do, and where did you use it in this project?

  # Ans : useState hook is a built-in React function that you to add state variables to functional components.

  4. What does the useEffect hook do, and why did you need it to load the JSON data?

  # Ans : The useEffect hook in React lets you synchronize a component with external systems or perform "side effects"—tasks like    fetching data, manually modifying the DOM, setting up timers, or subscribing to external services—after a component renders.

  5. Why does every item in a .map() list need a unique key prop?

  # Ans : React requires a unique key prop for each item in a mapped list so its reconciliation algorithm (the Virtual DOM) can track which items have changed, been added, or been removed between renders.

  6. What is conditional rendering? Show one place you used it (example: the empty stack message).

  # Ans : Conditional rendering in React is the practice of rendering different UI elements or components based on specific conditions or state, working just like if statements or ternary operators in standard JavaScript.

  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

  # Ans :  Pass data from a parent to a child using properties or parameters, and the child sends data back using callback functions or emitted events.