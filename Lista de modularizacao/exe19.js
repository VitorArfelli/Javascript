function exe19(){
    var vet = [];
    var vet2 = [];
    for(var i=0;i<10;i++){
        vet.push(Number(prompt("Digite o "+(i+1)+"° número para o primeiro vetor: ")));
    }
    for(var i=0;i<10;i++){
        vet2.push(Number(prompt("Digite o "+(i+1)+"° número para o segundo vetor: ")));
    }
    var resul = inter(vet,vet2);
    alert("O vetor intersecção é: "+resul); 
}

function inter(vet,vet2){
    vet3 = [];
    for(var i=0;i<vet.length;i++){
        for(var x=0;x<vet.length;x++){
            if(vet[i] == vet2[x]){
                vet3.push(vet[i])
            }
        }
    }
    return vet3
}