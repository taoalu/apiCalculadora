const express = require("express");

//Configuração Express
const app = express();

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode\n",
    this.address().port,
    app.settings.env
  );
});

app.get("/soma", async function (req, res) {
  var soma =
    Number(req.query.valor1.replace(",", ".")) +
    Number(req.query.valor2.replace(",", "."));
  res.send(
    "Você solicitou a soma dos valores " +
      req.query.valor1 +
      " e " +
      req.query.valor2 +
      " e o resultado é = " +
      soma
  );
  //
});

app.get("/subtracao", async function (req, res) {
  var subtracao =
    Number(req.query.valor1.replace(",", ".")) -
    Number(req.query.valor2.replace(",", "."));
  res.send(
    "Você solicitou a subtração dos valores " +
      req.query.valor1 +
      " e " +
      req.query.valor2 +
      " e o resultado é = " +
      subtracao
  );
});

app.get("/divisao", async function (req, res) {
  var divisao =
    Number(req.query.valor1.replace(",", ".")) /
    Number(req.query.valor2.replace(",", "."));
  res.send(
    "Você solicitou a divisão dos valores " +
      req.query.valor1 +
      " e " +
      req.query.valor2 +
      " e o resultado é = " +
      divisao
  );
});

app.get("/multiplicacao", async function (req, res) {
  var multiplicacao =
    Number(req.query.valor1.replace(",", ".")) *
    Number(req.query.valor2.replace(",", "."));
  res.send(
    "Você solicitou a multiplicação dos valores " +
      req.query.valor1 +
      " e " +
      req.query.valor2 +
      " e o resultado é = " +
      multiplicacao
  );
});

app.get("/pp", function (req, res) {
  res.render("privacy");
});
