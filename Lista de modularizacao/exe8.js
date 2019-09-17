function exe8() {
    alert("FATORIAL DE UM NÚMERO");
    var num = Number(prompt("Digite um número:"));
    var resultado = fatorial(num);
    alert(resultado);
}

function fatorial(num) {
    var fat = 1;
    var i = 2;
    if (num > 0) {
        for (i = 2; i <= num; i++) {
            fat = fat * i
        }
    }
    else{
        alert("O número tem que ser INTEIRO E POSITIVO")
    }
    return fat
}