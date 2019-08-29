function exe4(){
	var vet = [];
	var i;
	var somaS = 0;
	var maiorI = 0; var menorI = 0; var numFFR = 0;
	//Entrada de dados
	for(i=0;i<20;i++){
		var objeto = {};
		objeto.idade = Number(prompt("Digite a idade: "));
		objeto.sexo = prompt("Digite o sexo(m)masculino (f)feminino: ");
		objeto.renda = Number(prompt("Digite a renda familiar: "));
		objeto.numF = Number(prompt("Digite o número de filhos: "));
		vet.push(objeto)
	}
	//Processamento de dados
	menorI = vet[0].idade
	for(i=0;i<vet.length;i++){
		somaS = somaS + vet[i].renda; //Soma dos salário para a realização da média 
		if(vet[i].idade>maiorI){ //Condição para saber a idade maior    
			maiorI = vet[i].idade;   			
		}
		if(vet[i].idade<menorI){  //Condição para saber a idade menor
			menorI = vet[i].idade
		}
		if((vet[i].sexo=="f")&&(vet[i].numF>2)&&(vet[i].renda<600)){ //Condição para saber das mulheres com mais de dois filhos e  
			numFFR++;												 //renda a baixo de 600 reias					
		}
	}
	//Saída de dados
	alert("A média de salário dos habitantes é de: "+somaS/vet.length+" reais");
	alert("A maior idade do grupo é: "+maiorI+" anos \ne a menor idade é: "+menorI+" anos.");
	alert("A quantidade de mulheres com mais de dois filhos e com renda a baixo de 600 rais é: "+numFFR); 
} 
