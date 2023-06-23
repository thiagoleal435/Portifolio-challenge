function validaNome() {
    let erroNome = document.getElementById("erroNome");
    if (inputNome.value.length < 3) {
        erroNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
    } else {
        erroNome.textContent = "";
    }
}

function validaEmail() {
    let erroEmail = document.getElementById("erroEmail");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value)) {
        erroEmail.textContent = "Este email é inválido!";
    } else {
        erroEmail.textContent = "";
    }
}

function validaAssunto() {
    let erroAssunto = document.getElementById("erroAssunto");
    if (inputAssunto.value.length < 3) {
        erroAssunto.textContent = "Descreva com mais clareza o assunto a ser tratado!";
    } else {
        erroAssunto.textContent = "";
    }
}

function validaMensagem() {
    let erroMensagem = document.getElementById("erroMensagem");
    if (inputMensagem.value.length < 5) {
        erroMensagem.textContent = "Adicione mais informações à mensagem passada!";
    } else {
        erroMensagem.textContent = "";
    }
}

let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputAssunto = document.getElementById("assunto");
let inputMensagem = document.getElementById("textarea");
let inputSubmit = document.getElementById("submit");

inputNome.addEventListener("blur", function () {
    validaNome();
});

inputEmail.addEventListener("blur", function () {
    validaEmail();
});

inputAssunto.addEventListener("blur", function () {
    validaAssunto();
})

inputMensagem.addEventListener("blur", function () {
    validaMensagem();
})


document.getElementById("formulario").addEventListener("submit", function (e) {
    validaNome();
    validaEmail();
    validaAssunto();
    validaMensagem();

    alert("Formulário enviado com sucesso!");
});