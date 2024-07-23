const express = require('express');
const router = express.Router();
const connection = require('../models/db');

router.get('/', (req, res) => {
    const error = '';

    res.render('index', {errors: {nome: '', email: '', senha: '', conf_senha: '', genero: '', server: ''} });
});

router.post('/', (req, res) => {
    const {nome_completo, email, senha, conf_senha, genero} = req.body;
    
    console.log(' <----------- INFORMAÇÕES PESSOAIS ------------> ');
    console.log(`Nome completo: ${nome_completo}`);
    console.log(`Email: ${email}`);
    console.log(`Senha: ${senha}`);
    console.log(`Confirmação de senha: ${conf_senha}`);
    console.log(`Gênero: ${genero}`);

    const errors = {
        nome: '',
        email: '',
        senha: '',
        conf_senha: '',
        genero: '',
        server: ''
    };

    // validações dos campos

    if(nome_completo === "" || nome_completo.length < 3) {
        console.log("Nome inválido");
        errors.nome = "Nome inválido";
    }

    if(email === "") {
        console.log("Email inválido");
        errors.email = "Email inválido";
    }

    if(senha === "") {
        console.log("Senha inválida");
        errors.senha = "Senha inválida";
    }

    if(conf_senha === "") {
        console.log("Confirmação de senha inválida");
        errors.conf_senha = "Confirmação de senha inválida";
    } else if(conf_senha !== senha) {
        console.log("Senhas não são iguais");
        errors.conf_senha = "Senhas não são iguais";
    }

    if (!genero) {
        console.log("Gênero não selecionado");
        errors.genero = "Selecione um gênero";
    }


    if (errors.nome || errors.email || errors.senha || errors.conf_senha || errors.genero) {
        res.render('index', {
            errors,
            nome_completo,
            email,
            senha,
            conf_senha,
            genero
        });
        return;
    }


    const sql = 'INSERT INTO usuarios(NOME, EMAIL, SENHA, GENERO) VALUES (?, ?, ?, ?)';
    connection.query(sql, [nome_completo, email, senha, genero], (err, result) => {
        if (err) {
            console.error('Erro ao registrar usuário:', err);
            errors.server = 'Erro ao registrar usuário';
            return;
        }
        console.log('Usuário registrado com sucesso');
    });
});


module.exports = router;