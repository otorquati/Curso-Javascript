/* ************************************************
Condições com várias possibilidades de saída
Expressão switch - case
não esquecer de usar o break após cada condição
***************************************************
Dias trazidos pelo getDay -> valores numéricos
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta 
6 = sábado
***************************************************
*/
var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break 
    case 4:
        console.log('Quinta')
    break 
        case 5:
    console.log('Sexta')
        break 
    case 6:
        console.log('Sábado')
        break 
}