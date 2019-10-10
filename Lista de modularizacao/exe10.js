function exe10() {
    alert("SOMA DAS DIVISOES (1+ 1/2 + 1/3...1/N) ")
    var num = Number(prompt("Digite o divisor final: "));
    var resul = somaD(num);
    alert(resul);
}

function somaD(num) {
    var i = 1;
    var soma = 0;
    if (num > 0) {
        for (i = 1; i <= num; i++) {
            soma = soma + (1 / i);
        }
    }
    return soma
}