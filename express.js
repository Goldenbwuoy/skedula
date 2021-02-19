const express = require("express");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

module.exports = app;
