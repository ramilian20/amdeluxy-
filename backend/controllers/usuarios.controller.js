const { response } = require("express");

const usuariosGet = (req, res = response) => {
  res.json({
    msg: "hello world controlador",
  });
};

const usuariosPost = (req, res = response) => {
  const usurio = req.body;
  res.json({
    usuario,
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
};
