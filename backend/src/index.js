const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);






/**
 * Rota / Recurso
 * 
 * Metodos HTTP:
 * 
 * Get: buscar/listar uma informação do backend
 * Post: Criar uma informação no backend
 * Put: alterar uma informação no backend
 * Delete: deletando uma informação no backend
 */

/**
 * Tipos de parametros:
 * 
 * Query:
 * Parametros nomeados enviados  na rota apos '?' (filtros, paginação)
 * Route:
 * Parametros ultilizados para identificar recursos
 * Request Body:
 * Corpo da requisição, ultilizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  * Driver: SELECT * FROM users
  * Query Builder: table("users").select("*")
  */
 