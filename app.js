// importar funções da livraria  do code.org para serem usadas na aplicação
import {
    onEvent, 
    showElement, 
    setScreen} from './lib/code.org.js';

// definir aqui as variáveis que serão usadas


// perguntar ao usuário quanto ele possui na carteira
let carteira = prompt("QUANTO VOCÊ POSSUI NA CARTEIRA?"); 


// perguntar ao usuario quanto ele quer economizar 
let economia = prompt("QUANTO VOCÊ QUER ECONOMIZAR?");


// a variavel extrato irá emitir uma listagem do que  foi gasto
// ela deve iniciar vazia para elecar os gastos executaods
let extrato = " ";


// definir o valor que cada item custa
const comida = 18.00; 
const circo = 15.00; 
const brinquedo = 13.00; 


// cada vez que o botão for clicado ele deve reduzir o valor que foi declarado na variável
onEvent("comida","click", () =>{
    carteira -= comida; 
    alert("Você gastou R$" + comida + " com comida!");
    // extrato += "Saldo Atual: R$" + carteira + " reais. \n"; 
    extrato += "R$" + comida + " gastos com comida \n"; 
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
