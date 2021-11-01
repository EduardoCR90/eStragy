Instalar dependencias:

npm install


Iniciar servidor:

npm start


Crear base de datos:

CREATE DATABASE countriesDatabase;

USE countriesDatabase;

CREATE TABLE countries  
   (id int PRIMARY KEY NOT NULL,  
   name varchar(200) NOT NULL,  
   capital varchar(200) NULL)
