function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#f0ba7a'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tade!
        img.src = 'fototarde.png'
        document.body.style.background = '#dc5903'
    } else {
        //Boa nooite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#a57262'
    }
}