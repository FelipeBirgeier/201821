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
        document.documentElement.style.fontSize = tamanhoAtual + "px";
    }
}

function diminuirFonte() {
    if (tamanhoAtual > tamanhoMin) {
        tamanhoAtual -= 2;
        document.documentElement.style.fontSize = tamanhoAtual + "px";
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

// === ENVIO DO FORMULÁRIO ===
function enviarFormulario() {
    var form = document.getElementById("form-contato");
    var aviso = document.getElementById("aviso-form");

    aviso.className = "aviso-form sucesso";
    aviso.textContent = "Mensagem enviada com sucesso! Em breve entrarei em contato.";

    form.reset();

    return false; // Evita envio real
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

    // Formulário de contato
    var formContato = document.getElementById("form-contato");
    if (formContato) {
        formContato.onsubmit = enviarFormulario;
    }
};
