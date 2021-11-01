Instalar dependencias:

npm install


Iniciar servidor (desde PruebaAngularBackend):

npm start

Iniciar app de Angular (desde PruebaAngularFrontend)

ng serve



Crear base de datos:
Opción 1: Abrir XAMPP y poner las siguientes sentencias en SQL.
Opción 2: Importar la BD adjuntada en el correo electrónico.

CREATE DATABASE countriesDatabase;

USE countriesDatabase;

CREATE TABLE countries  
   (id int PRIMARY KEY NOT NULL,  
   name varchar(200) NOT NULL,  
   capital varchar(200) NULL)


