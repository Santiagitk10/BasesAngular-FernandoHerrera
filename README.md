# 02BasesAngular

- Para hacer el build 

npm run build ó ng build

Cada que hay un cambio en los archivos del build angular les genera un hash para reconocerlos en en cache

- Http Server

https://www.npmjs.com/package/http-server

Instalarlo de manera global (Para windows abrir la consola como administrador)

npm install --global http-server

http-server -o para lanzar la aplicación (Hay unas url que sirven y otras que no, intentar varias)

- Netlify

Crear una cuenta

Site / Add new site

Se dejan caer los archivos que hay dentro de la carpeta de dist

Publica la aplicación y da un url. Este nombre se puede cambiar en settings

Todo esto sirve para hacer demostraciones o para que alguien lo pruebe (No es un super servidor)

- Github Pages

En VS Code tomar la carpeta del proyecto que está dentro de dist y sacarla al root de la aplicación y renombrarla a "docs"

Hacer commit de lo cambios y hacer push

En el repositorio Settings/ Pages / Deploy from branch main y "docs"

En Actions se puede ver el progreso. (Cada vez que se haga un cambio en la carpeta docs se va a redisparar el proceso de doployment)

Cuando me de la url va a haber un error porque los archivos no se encuentran, se debe poner un punto ./ en el href base del index y hacer commit y push, esto genera una nueva action 


- Package.json Scripts (Automatización del despliegue en Github pages)

Se trata de hacer los pasos anteriores que son manuales con ayuda de algunos paquetes para comandos

Paquetes a instalar para que sean compatibles con todos los sistemas operativos:

https://www.npmjs.com/package/del-cli

Paquete para borrar carpetas : npm install del-cli --save-dev  (No hay necesidad de instalarlo de manera global)

https://www.udemy.com/course/angular-fernando-herrera/learn/lecture/23653388#overview

Paquete para copiar y pegar files: npm i copyfiles --save-dev

Finalmente hacer todos los scripts por separado  y luego crear un script que los una a todos para solo correr uno. 

Correr ese comando y hacer el commit y push normalmente







This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
