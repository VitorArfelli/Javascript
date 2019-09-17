function exe6(){

    var alt = Number(prompt("Digite sua altura: "));
    var sexo = prompt("Digite seu gênero (m) masculino (f) feminino: ");
    resultado = peso_Ideal(alt, sexo);
    alert(resultado);
}

function peso_Ideal(alt, sexo) {
    var resul = 0
    if (sexo == "m") {
        resul = (72.7 * alt) - 58
    }
    else if (sexo == "f") {
        resul = (62.1 * alt) - 44.7
    }
    else {
        alert("Gênero nao corresponde no sistema")
    }
    return resul
}

