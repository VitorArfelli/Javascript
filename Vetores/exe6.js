function exe6() {
    var nome = [];
    var totalV = [];
    var percC = [];
    var comissao = [];
    for (var i = 0; i < 3; i++) {
        nome.push(prompt("Digite o nome do " + (i + 1) + "° vendedor: "));
        totalV.push(Number(prompt("Digite o total de vendas referente: ")));
        percC.push(Number(prompt("Digite o percentual da comissão a receber: ")));
        comissao.push(Number(totalV[i] * (percC[i] / 100)));
    }
    var maior = 0; var menor = comissao[0];
    var nomeM = ""; var nomeMe = "";
    for (var i = 0; i < nome.length; i++) {

        alert(nome[i] + " tem direito a R$" + comissao[i] + ", referente a sua comissão sobre o total de vendas");
    }
    for (var i = 0; i < nome.length; i++) {
        alert("---Total de vendas de cada vendedor---\n\n" + nome[i] + " ---> R$" + totalV[i]);
        if (comissao[i] > maior) {
            maior = comissao[i];
            nomeM = nome[i];
            if (comissao[i] == comissao[i + 1]) {
                nomeM = nomeM + nome[i] + nome[i + 1];
            }
        }
        if (comissao[i] < menor) {
            menor = comissao[i];
            nomeMe = nome[i];
            if (comissao[i] == comissao[i + 1]) {
                nomeMe = nomeMe + nome[i] + nome[i + 1];
            }
        }

    }
    alert("O vendedor com maior valor a receber é, respectivamente: " + nomeM + " ---- R$" + maior);
    alert("O vendedor com menor valor a receber é, respectivamente: " + nomeMe + " ---- R$" + menor);
}