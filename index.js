function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascimento = document.getElementById('ano')
    var resultado = document.getElementById('res')
    if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNascimento.value)
        var gênero = ''
        var foto = document.getElementById('imagem')
        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 2) {
                //BÊBÊ
                foto.src = 'MeninoBêbê.png'
            } else if (idade > 2 && idade < 12) {
                //CRIANÇA
                foto.src = 'MeninoCriança.png'
            } else if (idade >= 12 && idade < 18) {
                //JOVEM
                foto.src = 'MeninoJovem.png'
            } else if (idade >= 18 && idade < 60) {
                //ADULTO
                foto.src = 'HomemAdulto.png'
            } else if (idade >= 60) {
                //IDOSO
                foto.src = 'HomemIdoso.png'
            }
        } else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 2) {
                //BÊBÊ
                foto.src = 'MeninaBêbê.png'
            } else if (idade > 2 && idade < 12) {
                //CRIANÇA
                foto.src = 'MeninaCriança.png'
            } else if (idade >= 12 && idade < 18) {
                //JOVEM
                foto.src = 'MeninaJovem.png'
            } else if (idade >= 18 && idade < 60) {
                //ADULTA
                foto.src = 'MulherAdulta.png'
            } else if (idade >= 60) {
                //IDOSA
                foto.src = 'MulherIdosa.png'
            }
        }
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}