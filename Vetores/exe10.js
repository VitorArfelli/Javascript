function exe10() {
    var vet = [];
    var vet2 = [];
    var resulVet = []; var resulVet2 = 0;
    for (var i = 0; i < 10; i++) {
        vet.push(Number(prompt("Digite o " + (i + 1) + "° número: ")));
    }
    for (var i = 0; i < 5; i++) {
        vet2.push(Number(prompt("Digite o " + (i + 1) + "° número do segundo vetor: ")));
    }

    for (var i = 0; i < vet.length; i++) {
        if (vet[i] % 2 == 0) {
            for (var x = 0; x < vet2.length; x++) {
                resulVet.push(Number(vet[i] + vet2[i]));
            }
        }
    }

    for (var i = 0; i < vet2.length; i++) {
        if (vet2[i] % 2 == 1) {
            for (var x = 0; x < vet.length; x++) {
                if (vet2[i] % vet[x] == 0) {
                    resulVet2 = resulVet2 + 1;
                }
            }
        }
    }

    alert("A soma de cada número par do primeiro vetor somando a todos do segundo vetor é: " + resulVet);

    alert("A quantidade de divisores que cada número ímpar do primeiro vetor tem no segundo é: " + resulVet2);
}