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


// incluir o valor informado para gastos na carteira
document.querySelector("#wallet").innerHTML = carteira;


// cada vez que o botão for clicado ele deve: 
onEvent("comida","click", () =>{
    carteira -= comida; // reduzir o valor que foi declarado na variável
    alert("Você gastou R$" + comida + " com comida!"); // informar ao usuário que ouve uma transação
    extrato += "R$" + comida + " gastos com comida \n"; // armazenar em extrato o que está sendo gasto
    document.querySelector("#wallet").innerHTML = carteira; // 
    if (carteira < economia){
        walletColorRed();
        alert("Ei, você gastou mais do que deveria!");
    }
});
onEvent("brinquedo","click", () => {
    carteira -= brinquedo;
    alert("Você gastou R$" + brinquedo + " com brinquedo!");    
    extrato += "R$" + brinquedo + " gastos com brinquedo \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if (carteira < economia){
        walletColorRed();
        alert("Ei, você gastou mais do que deveria!");
    }
});
onEvent("circo","click", () => {
    carteira -= circo; 
    alert("Você gastou R$" + circo + " com circo!");    
    extrato += "R$" + circo + " gastos com circo \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if (carteira < economia){
        walletColorRed();
        alert("Ei, você gastou mais do que deveria!");
    }
});


onEvent("go-extrato", "click", () => {
    if (carteira < economia){
        alert(extrato + "\nSeu saldo atual é de R$" + (carteira-economia) + "." + "\nVocê gastou além do que deveria!"); 
    }   
    // } else if (diferenca == 0){
    //     alert(extrato + "\nSeu saldo atual é de R$" + carteira + "." + "\nVocê já gastou o que definiu para gastar!");
    // } else {
    //     alert(extrato + "\nSeu saldo atual é de R$" + carteira + "." + "\nVocê ainda pode gastar mais um dinheirinho!");
    // }
})


const walletColorYellow = () => {
    document.querySelector("body").style.backgroundColor ="#FFFFE0";   
 }

const walletColorRed = () => {
   document.querySelector("body").style.backgroundColor ="#FF6347";   
}

// cada gasto deve diminuir o valor inicial da carteira 
// quando o valor da carteira chega menor ou igual ao valor dito pelo usuário a tela ficar vermelha
