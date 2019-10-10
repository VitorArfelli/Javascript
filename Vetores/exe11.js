function exe11(){
    var vet = [];
    var par = [];
    var impar = [];
    for(var i=0;i<10;i++){
        vet.push(Number(prompt("Digite o "+(i+1)+"° número: ")));
    }

    for(var i=0;i<vet.length;i++){
        if(vet[i]%2==0){
            par.push(Number(vet[i]));
        }
        else{
            impar.push(Number(vet[i]));
        }
    }
    alert("Vetor com os números pares: "+par);
    alert("Vetor com os número impares: "+impar);
}