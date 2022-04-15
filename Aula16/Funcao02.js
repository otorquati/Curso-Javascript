// Exemplos de passagem de parâmetros
// Pode-se atribuir valores caso um dos parâmetros náo seja informado
function soma(n1=0, n2=0) {
    return n1+n2
}
// Caso seja passado apenas 1 parâmetro será retornado NaN (Not a Number)
console.log(soma(7))
/* 
Info: Start process (16:59:11)
NaN
10
Info: End process (16:59:11) */
// Passando os dois parâmetros retorna o valor correto
console.log(soma(7,3))
/* Resultado 
Info: Start process (16:57:00)
7
10
Info: End process (16:57:00)
*/