
//FUNÇOES CRIADAS PARA SEREM EXPOSTADAS E EXECUTADAS NO APP.JS

//----- SET CONTENT -----//
//Função que define o conteudo que será incluido e listado no footer do HTML.
export const setContent = (extractFunction, id) => { //Possui os parametros: "extractFunction" (que será a função do GUI para gerar o extrato ) e "id" (que é o identificador do local onde o extrato será impresso no HTML).
    document.getElementById(id).innerHTML = extractFunction; //Este comando altera o HTML na tela, identificado pelo id do elemento, incluindo nele o extrato gerado pela função "imprimeExtrato".
}

//----- ON EVENT -----//
export const onEvent = (id, event, fn) => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener(event, fn, false);
    }
}; 



export const showElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('hidden');
    }
}; 

export const hideElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('hidden');
    }
}; 


let beforeScreen = 'screenMaker';
export const setScreen = (id) => {
    hideElement(beforeScreen);
    showElement(id)
    beforeScreen = id;
}; 

export const getProperty = (id, prop) => {
    const el = document.getElementById(id);
    if (el) {
        return el[prop]
    }
};

export const setProperty = (id, prop, value) => {
    const el = document.getElementById(id);
    if (el) {
        el[prop] = value;
    }
};

export const setImageURL = (id, src) => {
    const el = document.getElementById(id);
    const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/${src}?t=1670932317000`
    
    if (el) {
        el.setAttribute('src', url);
    }
};
