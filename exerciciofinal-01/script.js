function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'foto.manha.jpg'
        document.body.style.background = '#edd1b4'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'foto.tarde.jpg'
        document.body.style.background = '#da8951'
    } else {
        //BOA NOITE!
        img.src = 'foto.noite.jpg'
        document.body.style.background = '#65789b'
    }
}
