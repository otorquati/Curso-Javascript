function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var hora = 1
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora>=0 && hora < 12){
        // BOM DIA!
        img.src='fotomanha.png'
        document.body.style.background = '#E2E12D'
    } else if(hora>=12 && hora<18){
        // BOA TARDE!
        img.src='fototarde.png'
        document.body.style.background = '#F4B07F'
    } else {
        // BOA NOITE!
        img.src='fotonoite.png'
        document.body.style.background = '#3D1E38'
    }
}