// Dimensionando uma variável composta array
let num = [5,2,6,8]
// Exibindo cada elemento do vetor com repetições
for(var pos = 0; pos<num.length; pos++){
    console.log(`O valor da posição ${pos} é ${num[pos]}`)
}
console.log('****************************************')
// Usando uma maeira mais simples com comando do ECMA
for(var pos = 0 in num){
    console.log(`O valor da posição ${pos} é ${num[pos]}`)
}