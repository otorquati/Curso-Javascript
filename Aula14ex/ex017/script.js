function tabuada() {

    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab') 
    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    } else {
        let n=Number(num.value)
        let c=1
        tab.innerHTML = ''
        for (c=1;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item) 
    }
}
}