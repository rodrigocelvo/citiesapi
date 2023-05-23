const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const cities = require("./module/cities");

const app = express();

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  app.use(cors());

  next();
});

app.get("/ufs", cors(), async function (request, response) {
  const ufs = cities.getAllCities();

  response.json(ufs);
  response.status(200);
});

app.get("/uf/:sigla", cors(), async function (request, response) {
  let sigla = request.params.sigla;

  let uf = cities.getUf(sigla);

  response.status(200);
  response.json(uf);
});

app.get("/ch/uf/:sigla", cors(), async function (request, response) {
  let sigla = request.params.sigla;

  let uf = cities.getCharacteristicsUf(sigla);

  response.status(200);
  response.json(uf);
});

app.get("/regiao/:nome", cors(), async function (request, response) {
  let nome = request.params.nome;

  let region = cities.getUfByRegion(nome);

  response.status(200);
  response.json(region);
});

app.get("/cidade/:sigla", cors(), async function (request, response) {
  let sigla = request.params.sigla;

  let uf = cities.getListCityByUf(sigla);

  response.status(200);
  response.json(uf);
});

app.listen(3333, function () {
  console.log("Server run on port 3333.");
});
