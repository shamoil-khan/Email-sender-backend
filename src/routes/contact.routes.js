const express = require("express");
const { contact } = require("../controllers/contact.controllers");

const route = express.Router();

route.post("/contact", contact);

module.exports = { route };
