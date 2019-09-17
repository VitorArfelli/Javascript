function exe8() {

	var vet = [];

	for (var i = 0; i < 15; i++) {
		var objeto = {}
		objeto.nomeE = prompt("Digite o nome do estado");
		objeto.qtdeV = prompt("Digite a quantidade de veículo que circularam em 2012: ");
		objeto.qtdeA = prompt("Digite o número de acidentes correspondente a 2012: ");
		vet.push(objeto);
	}
	acidente_MaMe(qtdeA, nomeE);
	percentual(qtdeV, nomeE);
	meida(qtdeA, nomeE);
}

function acidente_MaMe(vet) {
	maior = 0;
	menor = vet[15];
	var nomeMa; var nomeMe;
	for (var i = 0; i < vet.length; i++) {
		if (vet[i].qtdeA > maior) {
			maior = vet[i].qtdeA
			nomeMa = vet[i].nomeE;
		}
		if (vet[i].qtdeA < menor) {
			menor = vet[i].qtdeA;
			nomeMe = vet[i].nomeE;
		}
	}
	alert("O maior índice de acidentes foi " + maior + ", no estado -> " + nomeMa);
	alert("O menor índice de acidentes foi " + menor + ", no estado -> " + nomeMe);
}

function percentual(vet) {
	var total = 0;
	var per = 0;
	for (var i = 0; i < vet.length; i++) {
		total = total + vet[i].qtdeV;
		per = (vet[i].qtdeV * 100) / total;
	}
	for (var i = 0; i < vet.length; i++) {
		alert("O percentual de veículos em " + vet[i].nomeE + ", é de: " + per);
	}
}

function media(vet) {
	var media = 0;
	var total = 0;
	for (var i = 0; i < vet.length; i++) {
		total = total + vet[i].qtdeV;
		media = total / vet.qtdeA;
	}
	for (var i = 0; vet.length; i++) {
		alert("A média de acidentes é: " + media + ". No estado de: " + vet[i].nomeE);
	}
}