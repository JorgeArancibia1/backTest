const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const indexRouter = require("./routes/index");

require("dotenv").config();

const app = express();

app.use(cors());
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
	console.log(`Servidor corriendo en: ${process.env.REACT_APP_ENVIRONMENT}`);
});

module.exports = app;
