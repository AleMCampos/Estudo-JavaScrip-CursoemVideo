function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12 // desta forma força o sistema a pegar a hora que colocar
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#a6ada5'
    }else if (hora >=12 && hora <18) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#e07d32'
    }else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#30536c'
    }

}