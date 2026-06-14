// =============================================
// Blog F Birgeier - script.js
// Disciplina: Desenvolvimento para Web
// UPF - ADS 1º Semestre 2026
// =============================================

// === TAMANHO DA FONTE ===
var tamanhoAtual = 16;
var tamanhoMin = 12;
var tamanhoMax = 22;

function aumentarFonte() {
    if (tamanhoAtual < tamanhoMax) {
        tamanhoAtual += 2;
        document.body.style.fontSize = tamanhoAtual + "px";
    }
}

function diminuirFonte() {
    if (tamanhoAtual > tamanhoMin) {
        tamanhoAtual -= 2;
        document.body.style.fontSize = tamanhoAtual + "px";
    }
}

// === MODO NOTURNO ===
function alternarModoNoturno() {
    var corpo = document.body;
    var botao = document.getElementById("btn-noturno");

    if (corpo.classList.contains("modo-noturno")) {
        corpo.classList.remove("modo-noturno");
        localStorage.setItem("modoNoturno", "nao");
        if (botao) {
            botao.textContent = "Modo Noturno";
        }
    } else {
        corpo.classList.add("modo-noturno");
        localStorage.setItem("modoNoturno", "sim");
        if (botao) {
            botao.textContent = "Modo Claro";
        }
    }
}

function carregarPreferencias() {
    var modoSalvo = localStorage.getItem("modoNoturno");
    var botao = document.getElementById("btn-noturno");

    if (modoSalvo === "sim") {
        document.body.classList.add("modo-noturno");
        if (botao) {
            botao.textContent = "Modo Claro";
        }
    }
}

// === VALIDAÇÃO DO FORMULÁRIO ===
function validarFormulario() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var assunto = document.getElementById("assunto");
    var mensagem = document.getElementById("mensagem");
    var aviso = document.getElementById("aviso-form");

    var erroNome = document.getElementById("erro-nome");
    var erroEmail = document.getElementById("erro-email");
    var erroAssunto = document.getElementById("erro-assunto");
    var erroMensagem = document.getElementById("erro-mensagem");

    var valido = true;

    // Limpar erros anteriores
    erroNome.classList.remove("visivel");
    erroEmail.classList.remove("visivel");
    erroAssunto.classList.remove("visivel");
    erroMensagem.classList.remove("visivel");
    aviso.className = "aviso-form";
    aviso.textContent = "";

    // Validar nome
    if (nome.value.trim() === "") {
        erroNome.classList.add("visivel");
        erroNome.textContent = "Por favor, informe seu nome.";
        valido = false;
    } else if (nome.value.trim().length < 3) {
        erroNome.classList.add("visivel");
        erroNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
        valido = false;
    }

    // Validar email
    if (email.value.trim() === "") {
        erroEmail.classList.add("visivel");
        erroEmail.textContent = "Por favor, informe seu e-mail.";
        valido = false;
    } else if (!validarEmail(email.value.trim())) {
        erroEmail.classList.add("visivel");
        erroEmail.textContent = "Informe um e-mail válido.";
        valido = false;
    }

    // Validar assunto
    if (assunto.value.trim() === "") {
        erroAssunto.classList.add("visivel");
        erroAssunto.textContent = "Por favor, informe o assunto.";
        valido = false;
    }

    // Validar mensagem
    if (mensagem.value.trim() === "") {
        erroMensagem.classList.add("visivel");
        erroMensagem.textContent = "Por favor, escreva sua mensagem.";
        valido = false;
    } else if (mensagem.value.trim().length < 10) {
        erroMensagem.classList.add("visivel");
        erroMensagem.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
        valido = false;
    }

    if (!valido) {
        aviso.className = "aviso-form erro";
        aviso.textContent = "Por favor, corrija os campos indicados abaixo.";
        return false;
    }

    // Formulário válido
    aviso.className = "aviso-form sucesso";
    aviso.textContent = "Mensagem enviada com sucesso! Em breve entrarei em contato.";

    // Limpar campos
    nome.value = "";
    email.value = "";
    assunto.value = "";
    mensagem.value = "";

    return false; // Evita envio real
}

function validarEmail(email) {
    var formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formato.test(email);
}

// === INICIALIZAÇÃO ===
window.onload = function () {
    carregarPreferencias();


    // Botão de modo noturno
    var btnNoturno = document.getElementById("btn-noturno");
    if (btnNoturno) {
        btnNoturno.onclick = alternarModoNoturno;
    }

    // Botão A+
    var btnAumentarFonte = document.getElementById("btn-aumentar-fonte");
    if (btnAumentarFonte) {
        btnAumentarFonte.onclick = aumentarFonte;
    }

    // Botão A-
    var btnDiminuirFonte = document.getElementById("btn-diminuir-fonte");
    if (btnDiminuirFonte) {
        btnDiminuirFonte.onclick = diminuirFonte;
    }
};
