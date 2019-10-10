function exe3(){
    var matriz = [];
    for(var i=0;i<6;i++){
        matriz[i] = []
        for(var j=0;j<3;j++){
            matriz[i][j] = Number(prompt("Digite um valor na "+(i+1)+"° linha - "+(j+1)+"° coluna: "));
        }
    }
               
    var maior = 0;
    var menor = matriz[0][0];
    var posi = ""; var posi2 = "";
    for(var i=0;i<6;i++){
        for(var j=0;j<3;j++){
            if(matriz[i][j]>maior){
                maior = matriz[i][j];
                posi = "Linha: "+i+" -- Coluna: "+j;
            }
            if(matriz[i][j]<menor){
                menor = matriz[i][j]
                posi2 = "Linha: "+i+" -- Coluna: "+j;
            }
        }
    } 
    var linha = "";
    for(var i=0;i<6;i++){
        linha =linha + "\n"
        for(var j=0;j<3;j++){
            linha = linha +"  "+ matriz[i][j];
        }
    }    
    
    alert(linha+"\n\nO maior elemento é "+maior+", na posição <---> "+posi);
    alert(linha+"\n\nO menor elemento é "+menor+", na posição <---> "+posi2);
}                        