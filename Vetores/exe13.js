function exe13(){
    var nome = [];
    var nota = [];
    for(var i=0;i<2;i++){
        nome[i] = prompt("Digite o nome do "+(i+1)+"° aluno(a): ");
        nota[i] = prompt("Digite a nota do(a) "+nome[i]+": ");
    }
    var resul = "";
    for(var i=0;i<2;i++){
        resul = resul + nome[i] + " " + nota[i];
        resul = resul + "\n";
    }
    alert("Relatório de notas\n\n"+resul);
}