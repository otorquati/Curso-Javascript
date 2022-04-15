// Dimensionando uma variável composta array
let num = [5,2,6,8]
console.log(`Nosso vetor é o ${num}`)
// Adcionando um elemento
num[4] = 20
console.log(`Nosso novo vetor é o ${num}`)
console.log('****************************************')
// Adicionando um elemento ao final do array
num.push(1)
console.log(`Nosso vetor é o ${num}`)
console.log('****************************************')
// Exibindo o tamanho da array (qts de elementos)
console.log('****************************************')
console.log(`Nosso vetor possui ${num.length} elementos`)
// Exibindo o primeiro elemento da array
console.log('****************************************')
console.log(`o primeiro valor do vetor é ${num[0]}`)
// Classificando a array
num.sort()
console.log(`Nosso vetor classificado fica assim: ${num}`)
// Exibindo cada elemento do vetor com repetições
for(var pos = 0; pos<num.length; pos++){
    console.log(`O valor da posição ${pos} é ${num[pos]}`)
}
console.log('****************************************')
// Usando uma maeira mais simples com comando do ECMA
for(var pos = 0 in num){
    console.log(`O valor da posição ${pos} é ${num[pos]}`)
}
console.log('****************************************')
// Buscando valores em um vetor usando indexOf
let src = 10
pos = num.indexOf(src)
if (pos ==-1){
    console.log(`O valor ${src} não existe`)
} else {
    console.log(`O valor ${src} está na posição ${pos}`)
}
