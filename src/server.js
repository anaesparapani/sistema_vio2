//Importa a instância do Express configurada em index.js
const app = require("./index");
const cors = require("cors");

//Configuração do CORS com origens permitidas
const corsOptions = {
  origin: "*", //Substitua pela origem permitida
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE", //Métodos HTTP permitidos
  credentials: true, //Permite o uso de cookies e credenciais
  optionSuccessStatus: 204, //Define o status de resposta para o método OPTIONS
};
//Inicia o servidor na porta 5000, tornando a API acessível em http://10.89.240.64:5000
//Aplicando o middlewares CORS no app
app.use(cors(corsOptions));
app.listen(5000);
