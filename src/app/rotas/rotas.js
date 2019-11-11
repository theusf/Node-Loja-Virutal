
const Produtos = require('../controllers/produtos_controller');
const Autenticacao = require('../controllers/autenticacao_controller');
const Carrinho = require('../controllers/carrinho_controller');


module.exports = (app) => {

 // Evitar problema com o CORS
 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    //console.log(req.session)
});



app.get('/', Produtos.listarProdutos); 


app.get('/login', function(req,res){
    console.log("Variavel de Sessao LOGIN = " + req.session.usuario );

    res.marko(
        require('../views/usuarios/login.marko')
    )
}); 


app.post('/validaracesso', Autenticacao.validarAcesso); 

app.get('/produtoinfo/:idprod', Produtos.listaDadosProdutos); 

app.post('/addcarrinho', Carrinho.criarPedido); 

app.get('/carrinho', Carrinho.montaCarrinho); 


}








