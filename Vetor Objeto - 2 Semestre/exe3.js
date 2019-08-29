function exe3(){
	var vet = [];
	var i;
	var somaI = 0;
	var maiorI = 0;
	var somaFI = 0; var somaOA = 0;
    //Entrada de dados
	for(i=0;i<50;i++){
		var objeto = {};
		objeto.sexo = prompt("Infore o sexo (m) masculino (f)feminino");
		objeto.altura = Number(prompt("Informe a altura: "));
		objeto.idade = Number(prompt("Informe a idade: "));
		objeto.corO = prompt("Informe a cor dos olhos (A) azuis;\n (V) verde; (C) castanho.");
		vet.push(objeto)
	}
	//Processamento de dados
	for(i=0;i<vet.length;i++){
		if((vet[i].corO == "C")&&(vet[i].altura>1.60)){
			somaI = somaI + vet[i].idade //soma da idade de pessoas com a cor dos olhos castanhos e altura acima de 1.60 para relizar uma média	
		}
		if(vet[i].idade>maiorI){
			maiorI = vet[i].idade; 
		}
		if(((vet[i].sexo == "f")&&(vet[i].idade >= 20)&&(vet[i].idade <= 45))||((vet[i].corO == "V")&&(vet[i].altura < 1.70))){
			somaFI++; //soma da qtde de indivíduos feminino com a idade entre 20 e 45 anos
			somaOA++; //soma da qtde de indivíduos com olhos castanhos e altura inferior a 1.70
		}
		if(vet[i].sexo == "m"){
			totalH++; //soma da qtde de homens para realizar o porcentual
		}
	}
	alert("A média de pessoas com olhos castanos e altura superior a 1.60m é: "+somaI/vet.length);
	alert("A maior idade entre os habitantes é: "+maiorI);
	alert("A quantidade de indivíduos so sexo feminino com idade entre 20 e 45 anos é: "+somaFI+",\nou que tenham olhos verdes e altura inferior a 1.70m é: "+somaOA);
	alert("O percentual de homens na pesquisa é de: "+totalH/vet.length*100);

}