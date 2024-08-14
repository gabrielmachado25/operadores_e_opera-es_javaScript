
/* Arquivo JS aula 03 Operadores e Operacoes */
let n1 = 10  // number inteiro
let n2 = 2   // number inteiro
let n3 = "2" // string texto - por mais que seja um número, como está entre aspas é do tipo texto

console.log(typeof n1); //aqui mostra o tipo de dados da variável 'n1', se é string, number...
console.log(typeof n2); //aqui mostra o tipo de dados da variável 'n2', se é string, number...
console.log(typeof n3); //aqui mostra o tipo de dados da variável 'n3', se é string, number...

document.write(`N1 ${n1} <br>`) //"document.write" é para escrever na página do Navegador
document.write(`N2 ${n2} <br>`) //"document.write" é para escrever na página do Navegador
document.write(`N3 ${n3} <br>`) //"document.write" é para escrever na página do Navegador

// Operadores:
console.log(n1 + n2) // adicao
console.log(n1 - n2) // subtracao
console.log(n1 * n2) // multiplicacao
console.log(n1 / n2) // divisao
console.log(n1 % n2) // resto da divisão ou modulo

// Operadores utilizados para atribuição:
console.log(n2 == n3)  // igual a
//obs: 2 é igual a 2, só que 2 vezes o sinal de =, ele só compara se o CONTEÚDO é igual, não compara se o tipo de dados é igual
console.log(n2 === n3) // identico a
//obs: 3 sinais de = é uma comparação de identidade, tanto o CONTEÚDO quanto o TIPO DE DADOS
console.log(n2 != n3)  // diferente de Nao
console.log(n2 !== n3) // Nao e identico
//2 sinais de = é para avaliar o conteúdo e o tipo de dados

console.log(n1 > n2) // maior que
console.log(n1 < n2) // menor que
console.log(n1 >= n2) // maior ou igual a
console.log(n1 <= n2) // menor ou igual a

let a = true
let b = false
console.log(a && b) // E   AND
console.log(a || b) // OU  OR
console.log(!a)     // NAO NOT negacao
console.log(!b)
