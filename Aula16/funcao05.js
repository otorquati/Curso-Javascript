//Usando método recursivo
// Funão chama ela mesma para resolver a atividade
function fatorialrec(n){
    if( n==1){
        return 1
    } else {
        return n* fatorialrec(n-1)
    }
}
console.log(fatorialrec(5))