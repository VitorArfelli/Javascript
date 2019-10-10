function exe9(){
    var nome = [];
    var codigo = [];
    var preco = [];
    var precoATT = [];
    var resul = 0;
    for(var i=0;i<3;i++){
        nome.push(prompt("Digite o nome do "+(i+1)+"° produto: "));
        codigo.push(Number(prompt("Digite o código do "+(i+1)+"° produto: ")));
        preco.push(Number(prompt("Digite o preco do "+(i+1)+"° produto: ")));
    }
    for(var i=0;i<nome.length;i++){
        if((codigo[i]%2==0)&&(preco[i]>1.000)){
            resul = preco[i]+(preco[i]*0.20);
            precoATT.push(resul);
        }
        else if(codigo[i]%2==0){
            resul = preco[i]+(preco[i]*0.15);
            precoATT.push(resul);
        }
        else if(preco[i]>1.000){
            resul = preco[i]+(preco[i]*0.10);
            precoATT.push(resul);
        }
    } 
    alert("----ATUALIZAÇÃO DE DADOS----")
    for(var i =0;i<nome.length;i++){
        alert("Nome: "+nome[i]+" == Código: "+codigo[i]+"\nPreço: R$"+preco[i]+" ==> Preço atualizado: R$"+precoATT[i]);
    }
}