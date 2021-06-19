function verificar() {
    var data = new Date() //newDate pega a data atual
    var ano = data.getFullYear() // getFullYear pega ano atual 4 digitos
    var fano = document.getElementById('txtano')//formulario de ano que vem do ano de nascimento
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex [0].checked){
            gênero = 'homem'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src' , 'bebem.png')
            } else if (idade <21){
                //Jovem
                img.setAttribute('src' , 'jovemm.png')

            }else if (idade <50) {
                //Adulto
                img.setAttribute('src' , 'homem.png')

            }else if (idade < 80) {
                //Idoso
                img.setAttribute('src' , 'idosom.png')

            }else if (idade >80){
                //Caveira
                img.setAttribute('src' , 'caveira.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src' , 'bebef.png')

            } else if (idade <21){
                //Jovem
                img.setAttribute('src' , 'jovemf.png')

            }else if (idade <50) {
                //Adulto
                img.setAttribute('src' , 'mulher.png')

            }else if (idade <80){
                //Idoso
                img.setAttribute('src' , 'idosof.png')

            }else if (idade >80){
                //Caveira
                img.setAttribute('src' , 'caveira.png')
            }
        }
        } 
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img) // serve para colocar conteudo nesse caso img=imagem
    }
    


