# Node with Handlebars and SCSS
Main MVC structure and required configuration of Webpack to have the base of an application with Node and Handlebars making use of the Sass preprocessor for .scss files.

How to use it
-------------
```console
$ mv .env.example .env
$ npm install
$ npm run dev
```
By default a development server on port 3000 will be started.

Main Routes
-----------
* SCSS: `./assets/scss`
* front-end JS: `./assets/js`
* Public minified files: `./public/assets`
* Views: `./views`
    * Handlebars' layouts: `./views/layouts`
    * Handlebars' partials: `./views/partials`
