function exe2(){
    var matriz = [];
    var qtde = 0; var soma = 0;
    for(var i=0;i<2;i++){
        matriz[i] = []
        for(var j=0;j<4;j++){
            matriz[i][j] = Number(prompt("Digite um valor na "+(i+1)+"° linha - "+(j+1)+"° coluna: "));
            if((matriz[i][j]>12) && (matriz[i][j]<20)){
                qtde++;
            }
            if(matriz[i][j]%2==0){
                soma = soma + matriz[i][j];
            }
        }
    }
    var media = soma/(i*j)
    alert("A quantidade de números entre 12 e 20 é: "+qtde);
    alert("A média dos elementos pares é: "+media);
}