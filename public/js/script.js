const form = document.getElementById('form-cadastro');
const nome_completo = document.getElementById('nome_completo');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const conf_senha = document.getElementById('conf_senha');
const errorNome = document.getElementById('error-nome');
const errorEmail = document.getElementById('error-email');
const errorSenha = document.getElementById('error-senha');
const errorConfSenha = document.getElementById('error-conf-senha');
const errorGenero = document.getElementById('error-genero');
const button = document.getElementById('cadastrar');

    button.addEventListener('click', (event) => {
        let valido = true;

        if (nome_completo.value === "" || nome_completo.value.length < 3) {
            errorNome.textContent = 'Nome inválido';
            nome_completo.style.border = '3px solid #ff0000';
            valido = false;
        } else {
            errorNome.textContent = '';
            nome_completo.style.border = '1px solid black';
        }

        if(email.value === "") {
            errorEmail.textContent = "Email inválido";
            email.style.border = '3px solid #ff0000';
            valido = false;
        } else {
            errorEmail.textContent = '';
            email.style.border = '1px solid black';
        }

        if(senha.value === "") {
            errorSenha.textContent = "Senha inválida";
            senha.style.border = "3px solid #ff0000";
            valido = false;
        } else {
            errorSenha.textContent = '';
            senha.style.border = '1px solid black';
        }

        if(conf_senha.value === "") {
            errorConfSenha.textContent = "Confirmação de senha inválida";
            conf_senha.style.border = "3px solid #ff0000"; 
            valido = false;
        } else if(conf_senha.value !== senha.value) {
            errorConfSenha.textContent = "Senhas não são iguais";
            conf_senha.style.border = "3px solid #ff0000";
            valido = false;
        } else {
            errorConfSenha.textContent = '';
            conf_senha.style.border = '1px solid black';
        }


        const generoSelecionado = document.querySelector('input[name="genero"]:checked');
        if (!generoSelecionado) {
            errorGenero.textContent = 'Selecione um gênero';
            valido = false;
        } else {
            errorGenero.textContent = '';
        }

    console.log(valido);

    if (valido) {
        form.submit(); 
        form.reset(); 
    } else {
        event.preventDefault();
    } 

    });

    

    nome_completo.addEventListener('input', () => {
        if (nome_completo.value.length >= 3) {
            errorNome.textContent = '';
            nome_completo.style.border = '1px solid black';
        } else {
            errorNome.textContent = 'Nome inválido';
            nome_completo.style.border = '3px solid #ff0000';
        }
    });

    email.addEventListener('input', () => {
        if (email.value.length >= 3) {
            errorEmail.textContent = '';
            email.style.border = '1px solid black';
        } else {
            errorEmail.textContent = "Email inválido";
            email.style.border = '3px solid #ff0000';
        }
    });

    senha.addEventListener('input', () => {
        if (senha.value.length >= 3) {
            errorSenha.textContent = '';
            senha.style.border = '1px solid black';
        } else {
            errorSenha.textContent = "Senha inválida";
            senha.style.border = "3px solid #ff0000";
        }
    });

    conf_senha.addEventListener('input', () => {
        if (conf_senha.value.length >= 3) {
            errorConfSenha.textContent = '';
            conf_senha.style.border = '1px solid black';
        } else {
            errorConfSenha.textContent = "Confirmação de senha inválida";
            conf_senha.style.border = "3px solid #ff0000";
        }
    });

    document.querySelectorAll('input[name="genero"]').forEach((radio) => {
        radio.addEventListener('change', () => {
            errorGenero.textContent = ''; 
        });
    });