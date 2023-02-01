// importar funções da livraria  do code.org para serem usadas na aplicação
import {
    onEvent 
   } from './lib/code.org.js';

// definir abaixo quais as variáveis que serão usadas


// perguntar ao usuário quanto ele possui na carteira
let carteira = prompt("QUANTO VOCÊ POSSUI NA CARTEIRA?"); 


// perguntar ao usuario quanto ele quer economizar 
const ECONOMIA = prompt("QUANTO VOCÊ QUER ECONOMIZAR?");


// a variavel extrato irá emitir uma listagem do que  foi gasto
// ela deve iniciar vazia para elecar os gastos executaods
let extrato = " ";


// definir o valor que cada item custa
const COMIDA = 18.00; 
const CIRCO = 15.00; 
const BRINQUEDO = 13.00; 


// incluir o valor informado para gastos na carteira
document.querySelector("#wallet").innerHTML = carteira;


// cada vez que o botão for clicado ele deve: 
onEvent("comida","click", () =>{ // Arrow function - mesmo que usar "function() {"
    carteira -= COMIDA; // reduzir o valor que foi declarado na variável
    alert("Você gastou R$" + COMIDA + " com comida!"); // informar ao usuário que ouve uma transação
    extrato += "R$" + COMIDA + " gastos com comida \n"; // armazenar em extrato o que está sendo gasto
    atualizaCarteiraEalertaUsuario();
});
onEvent("brinquedo","click", () => {
    carteira -= BRINQUEDO;
    alert("Você gastou R$" + BRINQUEDO + " com brinquedo!");    
    extrato += "R$" + BRINQUEDO + " gastos com brinquedo \n"; 
    atualizaCarteiraEalertaUsuario();
    
});
onEvent("circo","click", () => {
    carteira -= CIRCO; 
    alert("Você gastou R$" + CIRCO + " com circo!");    
    extrato += "R$" + CIRCO + " gastos com circo \n";
    atualizaCarteiraEalertaUsuario();
});


// quando clicar no botão EXTRATO ele vai abrir uma caixa de alerta listando os gastos e informando quando tem de saldo e qual o valor definido como economia.
onEvent("go-extrato", "click", () => {    
        alert(extrato + "\n" + "Seu saldo atual é de R$" + carteira + ".\n" + "Sua meta de gastos era de R$" + ECONOMIA); 
})


// criar a variavel que altera o background do BODY para vermelho
const walletColorRed = () => {
   document.querySelector("body").style.background= "linear-gradient(to left, #660000, #990000, #ff0000)";   
}


// função criada automaticamente pelo atalho da lampada e escolhendo a opção "extract function in mode escope" (Ele pega as linhas de código repetidas e cria uma nova função)
function atualizaCarteiraEalertaUsuario() {
    document.querySelector("#wallet").innerHTML = carteira; // apresentar o valor restante em cateria deduzido do gasto
    if (carteira <= ECONOMIA) { // se o valor em carteira for inferior que a economia pretendida ele vai avisar com a msg e mudar o fundo da tela para vermelho
        walletColorRed(); // altera a cor do fundo para vermelho, quando o valor atinge o limite de gastos
        alert("ATENÇAO! Você atingiu seu limite de gastos"); // mostra alerta de que o gasto foi atingido
    }
}
