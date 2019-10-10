function exe12(){
    var vet =[];
    var resul = 0;
    var soma = 0;
    for(var i=0;i<5;i++){
        vet.push(Number(prompt("Digite o "+(i+1)+"° número: ")));
    }
    for(var i =0;i<vet.length;i++){
       resul = resul + vet[i] + " + ";
       soma = soma + vet[i]; 
    }
    alert("Os números digitados foram: "+resul+" = "+soma);
}