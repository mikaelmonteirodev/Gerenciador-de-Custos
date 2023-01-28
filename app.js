import {
    onEvent, 
    showElement, 
    setScreen} from './lib/code.org.js';

let carteira = 200; 
let extrato = " "; 
const comida = 20; 
const circo = 15; 
const brinquedo = 13; 

// valor da carteira deve ser 200 reais 
// perguntar ao usuario quanto ele quer economizar 
let economia = prompt ("Quanto você gostaria de economizar?");



// gerenciar os gastos atraves dos cliques dos tres botoes 

onEvent("comida","click", () =>{
    extrato += "Saldo Atual: " + carteira + " reais. \n"; 
    carteira -= comida; 
    extrato += comida + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if(carteira < 0){
        walletColor();
    }
});
onEvent("brinquedo","click", () => {
    extrato += "Saldo Atual: " + carteira + " reais. \n"; 
    carteira -= brinquedo;
    extrato += brinquedo + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if(carteira < 0){
        walletColor();
    }

})
onEvent("circo","click", () => {
    extrato += "Saldo Atual: " + carteira + " reais. \n";
    carteira -= circo; 
    extrato += brinquedo + " reais debitados na sua conta \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if(carteira < 0){
        walletColor();
    }
})

onEvent("go-extrato", "click", () => {
    alert(extrato);
})

onEvent("reset", "click", () => {
    carteira = 200;
    extrato = ""; 
    document.querySelector("#wallet").innerHTML = carteira;
})

const walletColor = () => {
   document.querySelector("#wallet-button").style.backgroundCollor = "#FA3E4C";
}



// cada gasto deve diminuir o valor inicia da carteira 
// quando o valor da carteira chega menor ou igual ao valor dito pelo usuário a tela ficar vermelha
