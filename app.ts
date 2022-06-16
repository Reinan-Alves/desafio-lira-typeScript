let botaoAtualizar = document.getElementById(
  "atualizar-saldo"
) as HTMLButtonElement;
let botaoLimpar = document.getElementById("limpar-saldo") as HTMLButtonElement;
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo") as HTMLElement;
let soma_parcial: number = 0;
campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: number) {
  soma_parcial += soma;
  if (campoSaldo) campoSaldo.innerHTML = String(soma_parcial);
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
