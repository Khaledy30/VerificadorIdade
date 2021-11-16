function verificar() {
    let data = new Date()

    // data com 4 digitos
    let ano = data.getFullYear()

    //fano = formulario ano
    let fano = document.getElementById('txtano')
    let resultado = document.getElementById('resultado')

    //verificar se o fano nao é maior que ano atual  
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')

        //valor do ano atual - o valor de fano
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //checagem do sexo masculino
        if(fsex [0].checked) {
            genero = 'homem'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','crianmas.jpg')
            } else if (idade < 21 ) {
                //Jovem 
                img.setAttribute('src', 'jovemmas.jpg')
            } else if (idade < 59){
                //Adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }

            //checagem do sexo feminino
        } else if (fsex[1].checked){
            genero = 'mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criançafem.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemfem.jpg')
            } else if (idade < 59){
                //Adulto
                img.setAttribute('src', 'mulheradulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        //resultado
        img.className = 'mx-auto d-block'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)

    }
}