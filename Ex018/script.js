/* Funções do Analizador de Numeros
*/
var list=[]
var analise=document.getElementById('analise')
function Adicionar(){
  let snum = document.getElementById('numtxt');
  let tab = document.getElementById('Selnum')
  analise.innerHTML =''
  // Verifica se o numero está na faixa de 1 a 100
  let n = Number(snum.value);
  if (n >=1 && n<=100){
     if (list.indexOf(n)==-1){
        list.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
     } else {
       alert(`O número ${n} já existe na posição ${list.indexOf(n)}`)
     }
  } else {
    alert(`O número ${n} não é válido, por favor digite um número entre 1 e 100!`)
    return
  }
}
function Analise(){
  // Cria a div onde serão apresentadas as análises
  let analise = document.getElementById('analise')
  // Classifica os números digitados
  list.sort()
  // A quantidade de Números digitados
  let n = list.length
  if (n>0){
    // Achar o menor, o maior e somar os valor
    // zera as variáveis
    let min = 0
    let max = 0
    let soma = 0
    let media = 0
    // Usa repetições para achar o menor, o maior e a soma
    for(let pos in list){
      if (pos == 0) {
        min = list[pos]
        max = list[pos]
      } else {
        if (list[pos]<min){
          min = list[pos]  
        }
        if (list[pos]>max){
          max = list[pos]
        }
      }
      soma += list[pos] 
      }
    // Calcula a média
    media = soma / list.length
    analise.innerHTML =  `<p> Ao todo, temos ${n} números cadastrados</p>`
    analise.innerHTML += `<p> O maior valor informado é ${max} </p>`
    analise.innerHTML += `<p> O menor valor informado é ${min} </p>`
    analise.innerHTML += `<p> A soma de todos os valores é ${soma} </p>`
    analise.innerHTML += `<p> A média dos valores informados é ${media} </p>`
    } else {
      alert('Adicione valores antes de finalizar')
    }
}