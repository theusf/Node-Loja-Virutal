// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnode19377$1.0.0/src/app/views/produtos/Produtos.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\"><style>\r\n  span {\r\n    display: inline-block;\r\n    width: 200px;\r\n    height: 320px;\r\n    margin: 9px;\r\n  }\r\n</style><html><body class=\"bg-secondary\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-dark bg-dark\"><div class=\"row\">");

  var $for$0 = 0;

  marko_forEach(data.usu, function(usuario) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<h1>" +
      marko_escapeXml(usuario.Nome_Completo) +
      "</h1>");
  });

  out.w("<form class=\"form-inline\"><input class=\"form-control col\" type=\"search\" placeholder=\"Buscar produtos\" aria-label=\"Search\"><button class=\"form-control btn btn-success col\" type=\"submit\">Buscar</button></form><form class=\"form-inline\" action=\"/carrinho\" method=\"get\"><button class=\"btn btn-warning my-2 my-sm-0\" type=\"submit\"><i class=\"fas fa-shopping-cart\"></i></button></form><form class=\"form-inline\" action=\"/login\"><button class=\"btn my-2 my-sm-0 btn-outline-success \" type=\"submit\">Login</button></form></div></nav><div class=\"container m-5 pb-5 bg-secondary\"><div class=\"row\">");

  var $for$1 = 0;

  marko_forEach(data.produtos, function(produto) {
    var $keyScope$1 = "[" + (($for$1++) + "]");

    out.w("<a" +
      marko_attr("href", "/produtoinfo/" + produto.idProduto) +
      "><span class=\"rounded bg-light\"><img class=\"m-5\"" +
      marko_attr("src", produto.Img) +
      " style=\"width:50%;\"><div class=\"m-1\">" +
      marko_escapeXml(produto.Descricao) +
      "</div><div class=\"m-1\">" +
      marko_escapeXml(produto.Preco) +
      "</div> <div class=\"m-1\">" +
      marko_escapeXml(produto.idProduto) +
      "</div> </span></a>");
  });

  out.w("</div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projnode19377$1.0.0/src/app/views/produtos/Produtos.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
