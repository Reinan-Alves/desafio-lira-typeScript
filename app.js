"use strict";
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
let soma_parcial = 0;
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    soma_parcial += soma;
    if (campoSaldo)
        campoSaldo.innerHTML = String(soma_parcial);
}
function limparSaldo() {
    campoSaldo.innerHTML = "";
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener("click", function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
