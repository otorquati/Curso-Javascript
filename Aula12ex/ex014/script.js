function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    // var hora = 13
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora>=0 && hora < 12){
        // BOM DIA!
        img.src='fotomanha.png'
        document.body.style.background = 'cian'
    } else if(hora>=12 && hora<18){
        // BOA TARDE!
        img.src='fototarde.png'
        document.body.style.background = 'red'
    } else {
        // BOA NOITE!
        img.src='fotonoite.png'
        document.body.style.background = 'gray'
    }
}