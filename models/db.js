const sql = require('mysql2');

const connection = sql.createConnection({
    host: 'localhost',
    user: 'cadastro_1',
    password: 'cadastro123',
    database: 'cadastro-usarios'
});

connection.connect(err => {
    if(err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }

    console.log('Conexão bem-sucedida ao banco de dados');
});

module.exports = connection;