function exe7(){
    var vet = []; var soma = 0; var neg = 0;
    for(var i=0;i<10;i++){
        vet.push(Number(prompt("Digite o "+(i+1)+"° número:")));
        if(vet[i]%2==0){
            soma = soma + vet[i];
        }
        if(vet[i]<0){
            neg = neg + 1
        }
    }
    alert("A quantidade de números negativo é de: "+neg);
    alert("A soma dos números pares é de: "+soma)
}