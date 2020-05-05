<p align="center"><img src="https://2.bp.blogspot.com/-MH_LCXgczh0/XLVFq8MySbI/AAAAAAAABiA/qo0UeEym1xQPdOoxUqH9t5rMcxNgXscXgCEwYBhgL/s1600/zemoga-logo-grey.png" width="400px" alt="logo"></p>

# Voters Manager Web

## Acerca del proyecto

Sitio web creado en un marco de presentación Resposive Designer; Funciona para dispositivos mobiles en resolución superior a 320x568, Tablets (Ipad-768x1024, IpadPro-1024x1366) y web (Desktop-1200x900 y superior).
Cada tarjeta de votación permite al usuario votar por su figura publica e inmediatamente ver el resultado del porcentaje de favorabilidad del personaje votado 

En la carpeta src/app se encuentra el archivo data.service.ts que contiene la información de los registros que se van a renderizar en cada tarjeta de votación del front-end.

## Características de implementación

Proyecto desarrollado con Angular 9 y maquetación con Bootstrap 4.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Demo del proyecto

El demo se encuentra alojado en el siguiente hosting de Heroku:

[https://voters-manager-web.herokuapp.com](https://voters-manager-web.herokuapp.com)

## Instalacion del proyecto

Clonar repositorio:
```shell script
git clone https://github.com/paangaflo/voters-manager-web.git voters-manager-web
```
Ingresamos a la carpeta:
```shell script
cd voters-manager-web
```
Instalamos las dependencias de npm:
```shell script
npm install
```

## Ejecutar en ambiente local

Para ejecutar en ambiente local se debe modificar el archivo package.json
```shell script
"scripts": {
    "start": "ng serve",
```
Desplegar en local el proyecto:
```shell script
ng serve
```
Ingresar en el navegador web a la siguiente ruta:
```shell script
http://localhost:4200
```

## Ejecutar en ambiente prod

Construir la carpeta dist
```shell script
ng build --prod
```
Para ejecutar en ambiente prod se debe modificar el archivo package.json
```shell script
"scripts": {
    "start": "node server.js",
```
Desplegar en local el proyecto:
```shell script
node server.js
```
Ingresar en el navegador web a la siguiente ruta:
```shell script
http://localhost:8080
```

## Executando pruebas unitarias

Run `ng test` para ejecutar pruebas unitarias via [Karma](https://karma-runner.github.io).

## Executando todas las pruebas unitarias

Run `ng e2e` para ejecutar todos los test via [Protractor](http://www.protractortest.org/).