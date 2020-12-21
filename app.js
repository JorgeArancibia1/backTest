var createError = require("http-errors");
var express = require("express");
var path = require("path");
// const { corsOptions } = require('./config');

require("dotenv").config();
const cors = require("cors");

var indexRouter = require("./routes/index");

var app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});

//CORS
app.use(
	cors({ origin: true, credentials: true  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "public")));

//Rutas
app.use("/api/products", require("./routes/productsRoutes"));
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

//Escuchar peticiones
app.listen(process.env.PORT || 4000, () => {
	console.log(`Servidor corriendo en: ${process.env.REACT_APP_ENVIRONMENT}/`);
});

module.exports = app;
