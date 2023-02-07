export function imprimeExtrato(extractList) {
    let lista = "";
    for (let i = 0; i < extractList.length; i++) {
        lista += `
        tipo: ${extractList[i].nome}<br>
        valor: ${extractList[i].valor}<br>
        data: ${extractList[i].data}<br>
        `;
    }
    return lista;
}


