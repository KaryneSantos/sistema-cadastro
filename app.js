const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rotas
const index = require('./routes/pagina-cadastro');
app.use('/', index);

// port do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`O servidor está rodando na porta ${PORT}`);
});