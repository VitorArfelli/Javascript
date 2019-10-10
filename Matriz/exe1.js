function exe1(){
    var matriz = []
    var qtde = 0;
    for(var i=0;i<3;i++){
        matriz[i] = []
        for(var j=0;j<5;j++){
            matriz[i][j] = Number(prompt("Digite um valor na "+(i+1)+"° linha - "+(j+1)+"° coluna: "));
            if((matriz[i][j]>15) && (matriz[i][j]<20)){
                qtde++;
            }
        }
    }
    alert("A qtde de números entre 15 e 20 é: "+qtde)
    var linha = "";
    for(var i=0;i<3;i++){
        linha = linha + "\n"
        for(var j=0;j<5;j++){
            linha = linha +"  "+ matriz[i][j];
        }
    }    
    alert(linha);    
}