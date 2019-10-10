function exe20(){

    var vet = [];
    var resp = "s"
    while(resp == "s"){
        for(var i=0;i<vet.length;i++){
            var objeto = {};
            objeto.salario = Number(prompt("Digite o salário: "));
            objeto.qtdeF = Number(prompt("Digite a quantidade de filho: "));
            vet.push(objeto);
            resp = prompt("Deseja continuar (s)sim (n)não: ");
        }
    }
    var resul = media_Salario(vet);
    var resul2 = media_Filhos(vet);
    alert("A média salarial é: "+resul);
    alert("A média de filhos é: "+resul2);
}

function media_Salario(vet){
    var soma = 0;
    var mediaS = 0;
    for(var i = 0; i<vet.length;i++){
        soma = soma + vet[i].salario;
    }
    mediaS = soma/vet.length
    return mediaS
}

function media_Filhos(vet){
    var soma = 0;
    var mediaF = 0;
    for(var i = 0; i<vet.length;i++){
        soma = soma + vet[i].qtdeF
    }
    mediaF = soma/vet.length
    return mediaF
}