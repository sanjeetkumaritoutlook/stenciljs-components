[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# To start using components from this Library
# for example in Angular/React: 
```bash
npm i stenciljs-components
```
then in main.ts (Angular)/ in React component file (React):
```tsx
import { defineCustomElements } from 'stenciljs-components/loader';
// Initialize the custom elements
defineCustomElements(window);
```
Make sure you have in app.module.ts in Angular (not needed in React)
```tsx
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
```

then in app.component.html (Angular)/ App.tsx(React) ,
they can be added as simple tag with any attribute as property in dash-case
such as:
```html
<my-card user-name="CodingLocker"></my-card>
<my-pie-chart  data='[{"tag":"height","value":180},{"tag":"weight","value":75},{"tag":"age","value":30},{"tag":"score","value":95},{"tag":"yearsExperience","value":5}]'></my-pie-chart>
<my-rich-text-editor initial-value="this is initial value" placeholder="angular placeholder"></my-rich-text-editor>
<my-progress-bar value="2" max="10"></my-progress-bar>
<my-progress-ring percentage="30"></my-progress-ring>
<test-button button-id="test-button">Click me!</test-button>
 <test-counter>Number: </test-counter>
 <search-world search-text="bmw"> </search-world> 
 <my-payment-gateway></my-payment-gateway>
 <my-component first="Sanjeet" last="Kumar"></my-component>
 <my-button text="Hello"></my-button>
 <parent-component></parent-component>"
 <simple-form first-name="Sanjeet" last-name="Kumar"></simple-form>
 <complex-ionic-form></complex-ionic-form>
 <custom-form></custom-form>
 <combo-box allow-input="true"></combo-box>
 <new-card><new-card>
```

# for usage in an another Application created using StencilJS: 
first way is include in ur StencilJS component (so that Lazy loading can work):
```tsx
import { defineCustomElements } from 'stenciljs-components/loader';
// Initialize the custom elements
defineCustomElements(window);
IF above way doesnt work due to some js not loading or resouurce not found for this build time library,
then include below code in src/index.html as run-time library
```html
<script type="module" src="https://sanjeetkumaritoutlook.github.io/stenciljs-components/build/stenciljs-components.esm.js"></script>
  <script nomodule src="https://sanjeetkumaritoutlook.github.io/stenciljs-components/build/stenciljs-components.js"></script>
 
```

# This component Library has currently 20 components:
1. json-schema-form (creates dynamic form with field type like 'select','array', 'text', 'combo-box', 'radio','textarea','my-rich-text-editor','checkbox'. It take properties like type,name,label ,required.  Fields can be conditionally rendered also with ConditionalOn)
2. my-progress-bar (Props:value,max)
3. my-rich-text-editor (Props:initial-value,placeholder,disabled,disableQuickbars,fontFamily,fontSize)  - this is using tinymce under the hood
4. my-progress-ring (Props: percentage, round-linecap, disable-digits,event-id) - this is using easing-animation-frames as dependency
5. my-card (Props:user-name)
6. search-world (Props:search-text)
7. test-button (Props:button-id)
8. test-counter
9. my-pie-chart  (Props: data[JSON format where each entry contains only tag and value (in numbers) as keys])  - this is using d3.js under the hood
10. my-payment-gateway - this is using StripeJS payment gateway under the hood
11. my-component (Props:first,middle,last)- default StencilJS Component
12. my-button (Props:label,variant)
13. parent-component (uses embed-component inside it)
14. embed-component
15. simple-form (Props: first-name, last-name; form built using ionic components)
16. complex-ionic-form  (form built using ionic components)
17. custom-form (uses combo-box and custom-text-input)
178. combo-box (Props:allow-input, label) -> takes time in React to show arbitrary input in dropdown, foucus out of the field after typing 
19. custom-text-input (uses AttachInternals from StencilJS)
20. new-card

# to find to see the origin of ur local Repo which is in github.
git remote -v
Determine the origin of a cloned Git repository
git ls-remote --get-url origin
git remote show origin


https://sentry.io/answers/determine-the-origin-of-a-cloned-git-repository/
Update the remote URL with git remote set-url 
https://support.atlassian.com/bitbucket-cloud/docs/change-the-remote-url-to-your-repository/

# to debug npm installation
npm install --verbose
https://stackoverflow.com/questions/16873973/npm-install-hangs

# Component Library or Design system
Ionic (https://ionicframework.com/) .
@ionic/core (https://www.npmjs.com/package/@ionic/core ) comes with over 100 components
https://stenciljs.com/docs/publishing

# Create new React App in Typescript
npx create-react-app my-app --template typescript

https://builtin.com/software-engineering-perspectives/create-react-app-typescript

# create React component in typescript
https://react.dev/learn/typescript

# Lazy Loading
If you prefer to have your components automatically loaded when used in your application, we recommend enabling the dist output target. The bundle gives you a small entry file that registers all your components and defers loading the full component logic until it is rendered in your application. It doesn't matter if the actual application is written in HTML or created with vanilla JavaScript, jQuery, React, etc.


# Stencil Component Starter

This is a starter project for building a standalone Web Component using Stencil.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than runtime tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```
To generate new component, run:

```bash
npm run generate
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic-generated web components use the prefix `ion`.

## Using this component

There are two strategies we recommend for using web components built with Stencil.

The first step for all two of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

You can read more about these different approaches in the [Stencil docs](https://stenciljs.com/docs/publishing).

### Lazy Loading

If your Stencil project is built with the [`dist`](https://stenciljs.com/docs/distribution) output target, you can import a small bootstrap script that registers all components and allows you to load individual component scripts lazily.

For example, given your Stencil project namespace is called `my-design-system`, to use `my-component` on any website, inject this into your HTML:

```html
<script type="module" src="https://unpkg.com/my-design-system"></script>
<!--
To avoid unpkg.com redirects to the actual file, you can also directly import:
https://unpkg.com/foobar-design-system@0.0.1/dist/foobar-design-system/foobar-design-system.esm.js
-->
<my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>
```

This will only load the necessary scripts needed to render `<my-component />`. Once more components of this package are used, they will automatically be loaded lazily.

You can also import the script as part of your `node_modules` in your applications entry file:

```tsx
import 'foobar-design-system/dist/foobar-design-system/foobar-design-system.esm.js';
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-y6v26a?file=src%2Fmain.tsx).

### Standalone

If you are using a Stencil component library with `dist-custom-elements`, we recommend importing Stencil components individually in those files where they are needed.

To export Stencil components as standalone components make sure you have the [`dist-custom-elements`](https://stenciljs.com/docs/custom-elements) output target defined in your `stencil.config.ts`.

For example, given you'd like to use `<my-component />` as part of a React component, you can import the component directly via:

```tsx
import 'foobar-design-system/my-component';

function App() {
  return (
    <>
      <div>
        <my-component
          first="Stencil"
          middle="'Don't call me a framework'"
          last="JS"
        ></my-component>
      </div>
    </>
  );
}

export default App;
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-b6zuds?file=src%2FApp.tsx).