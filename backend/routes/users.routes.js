const { Router } = require("express");
const router = Router();

//importaciones de los controladores
const { usuariosGet } = require("../controllers/usuarios.controller");

router.get("/", usuariosGet);

module.exports = router;
