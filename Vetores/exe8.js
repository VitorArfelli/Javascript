function exe8(){
    var alunos = [];
    var medias = [];
    for(var i=0;i<7;i++){
        alunos.push(prompt("Digite o nome do "+(i+1)+"° aluno: "));
        medias.push(Number(prompt("Digite a média do "+(i+1)+"° aluno: ")));
    }
    var maior = 0;
    for(var i=0;i<alunos.length;i++){
        if(medias[i]>maior){
            maior = medias[i];
            nomeM  = alunos[i];
        }
        if(medias[i]<7){
            alert(alunos[i]+", você não foi aprovado --- Fazer prova de exame com ponto mínimo 5");
        }
        else{
            alert(alunos[i]+", VOCÊÊÊ FOI APROVADOOOO!!!");
        }
    }
    
}