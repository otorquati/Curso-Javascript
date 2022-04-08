function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')    	
    /* Verifica se os valores digitados estão completo */
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
         /* Converte os valores para números */
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert(`Passo inválido!!! Considerado passo = 1`)
            p=1
            txtp.value=p
        } 
        if (i < f){
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F448}`
        }
    }
        res.innerHTML += ` \u{1F3C1}`
   }
}