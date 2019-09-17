function exe9() {
    alert("Soma dos divisores de um número");
    var num = Number(prompt("Digite um número: "));
    resul = somaD(num);
    alert(resul);
}

function somaD(num) {
    var i = num;
    var soma = 0;
    if (num > 0) {
        for (i = num; i > 0; i--) {
            if (num % i == 0) {
                soma = soma + i;
            }
        }
    }
    return soma;

}