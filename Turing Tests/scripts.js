/* Funções do Analisador de Placar */
var analise = document.getElementById('analise')
var sdados=''
function Analisar(){
  let dados = document.getElementById('ops')
  let placar=[]
  let soma = 0
  let sdados = (dados.value)
  let n=sdados.length
  let analise = document.getElementById('analise')
  // alert(`sdados length = ${n}`)
  // preenche placar
  if (n>0) {
    for (let pos=0;pos<=sdados.length-1;pos++){
      alert(`pos = ${pos}`)
      if (s=sdados[pos]!=",") {
      s=Number.parseInt(sdados[pos])!=='NaN'?Number.parseInt(sdados[pos]):sdados[pos]
      alert(`s = ${s}`)
       if (typeof s=='number'){
          alert(`somando`)
          soma+=s
          placar.push(s)
          c = placar.length
        }
        if (typeof s=='string'){
          alert(`Atualizando`)
          if (s=='D'){
            placar[c]=placar[c-1]*2
          } else if (s=='C')
          {
            placar[c-1]=null
          } else {
            placar.push(s)
            soma+=s
          }
        }
      }
    
      alert(`O placar atual é ${placar} e a soma atual é ${soma}`)
    }
    analise.innerHTML = `<p>Análise do Placar</p>`
    analise.innerHTML += `<p> Placar anotado ${placar}</p>`
    analise.innerHTML += `<p> a soma do placar é = ${soma}</p>`
  } else {
    alert(`Adicione valores`)
    analise.innerHTML='<p> O resultado da análise aparecerá aqui!'
  }
}