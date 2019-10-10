function exe4(){
    var matriz = []; var soma = 0; var somaT = 0; 
    var nome = []; var media = []; var mediaT = 0;
    for(var i=0;i<5;i++){
        matriz[i] = [] 
        soma = 0;
        for(var j=0;j<2;j++){
            nome[i] = prompt("Digite o nome do "+(i+1)+"° aluno"); 
            matriz[i][j] = Number(prompt("Digite um valor na "+(i+1)+"° linha - "+(j+1)+"° coluna: "));
            soma = soma + matriz[i][j];
            somaT = somaT + matriz[i][j] 
        }
        media[i] = soma/j
    }
    mediaT = somaT/(i*j)
    for(var i=0;i<15;i++){
        alert(nome[i]+" teve média: "+media[i])
        if(media[i]>= mediaT){
            alert(nome[i]+", você foi APROVADOOO!! :)");
        }
        else{
            alert(nome[i]+", você está reprovado ou de exame - CONSULTAR SECRETARÍA :c");
        }
        
    }
    alert("A média da sala é de: "+mediaT);
}