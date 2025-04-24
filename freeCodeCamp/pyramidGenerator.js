// gera uma pirâmide com base num caractere e na quantidade de fileiras

function createRow(rowNumber, rowCount) { // cria uma fileira com base no número da fileira atual (rowNumber) e no número total de fileiras (rowCount)
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

let character = "!"; // caractere a ser usado na pirâmide
let count = 8; // número de fileiras que a pirâmide deve ter
const rows = []; // array para armazenar cada fileira da pirâmide
let inverted = true; // 
let result = ""; // string que irá conter a pirâmide

for(let i = 1; i <= count; i++) { // insere as fileiras no array rows[] utilizando métodos diferentes se ela for inversa ou não
    inverted ? rows.unshift(createRow(i,count)) : rows.push(createRow(i,count));
}

for(const row of rows) { // concatena os valores do array rows[] a string result para imprimir a pirâmide no console
    result = result + row + "\n"; 
}

console.log(result);