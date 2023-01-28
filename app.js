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


// definir o valor da diferença entre o que tem na carteira e o limite de gastos
let diferenca = carteira - economia;


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
    extrato += "R$" + comida + " gastos com comida \n"; // armazenar em extrato
    document.querySelector("#wallet").innerHTML = carteira;
    if (diferenca == 0){
        walletColorYellow();
        alert("Ei, vai devagar!\nVocê chegou no seu limite!");
    } else if (diferenca < 0){
        walletColorRed();
        alert("Ei, você gastou mais do que deveria!");
    } else{
        walletColorGreen();
        alert("Você ainda tem um dinheirinho para gastar!");
    }
});
onEvent("brinquedo","click", () => {
    carteira -= brinquedo;
    alert("Você gastou R$" + brinquedo + " com brinquedo!");    
    extrato += "R$" + brinquedo + " gastos com brinquedo \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if (diferenca == 0){
        walletColorYellow();
        alert("Ei, vai devagar!\nVocê chegou no seu limite!");
    } else if (diferenca < 0){
        walletColorRed();
        alert("Ei, você gastou mais do que deveria!");
    } else{
        walletColorGreen();
        alert("Você ainda tem um dinheirinho para gastar!");
    }
});
onEvent("circo","click", () => {
    carteira -= circo; 
    alert("Você gastou R$" + circo + " com circo!");    
    extrato += "R$" + brinquedo + " gastos com circo \n"; 
    document.querySelector("#wallet").innerHTML = carteira;
    if (diferenca == 0){
        walletColorYellow();
        alert("Ei, vai devagar!\nVocê chegou no seu limite!");
    } else if (diferenca < 0){
        walletColorRed();
        alert("Ei, você gastou mais do que deveria!");
    } else{
        walletColorGreen();
        alert("Você ainda tem um dinheirinho para gastar!");
    }
});


onEvent("go-extrato", "click", () => {
    if(diferenca < 0){
        alert(extrato + "\nSeu saldo atual é de R$" + carteira + "." + "\nVocê gastou R$" + diferenca + " além do que deveria!");    
    } else if(diferenca = 0){
        alert(extrato + "\nSeu saldo atual é de R$" + carteira + "." + "\nVocê já gastou o que definiu para gastar!");
    } else{
        alert(extrato + "\nSeu saldo atual é de R$" + carteira + "." + "\nVocê ainda pode gastar mais um dinheirinho!");
    }
})


const walletColorYellow = () => {
    document.querySelector("body").style.backgroundColor ="#FFFFE0";   
 }

const walletColorRed = () => {
   document.querySelector("body").style.backgroundColor ="#FF6347";   
}

const walletColorGreen = () => {
    document.querySelector("body").style.backgroundColor ="#98FB98";   
 }



// cada gasto deve diminuir o valor inicia da carteira 
// quando o valor da carteira chega menor ou igual ao valor dito pelo usuário a tela ficar vermelha
