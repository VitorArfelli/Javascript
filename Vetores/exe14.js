function exe14() {
    var alunos = [];
    var notas = [];
    var soma = []; var media = [];
    var mediaT = 0; var soma2 = 0;
    for (var i = 0; i < 6; i++) {
        alunos.push(prompt((`Digite o nome do(a) ${i + 1}° aluno(a): `)));
        soma[i] = 0
        for (var j = 0; j < 2; j++) {
            notas.push(Number(prompt(`Digite a ${j}° nota do(a) aluno(a) ${alunos[i]}: `)));
            soma[i] = soma[i] + notas[j];
            soma2 = soma2 + notas[j];
        }
        media[i] = soma[i] / j;
        mediaT = soma2 / (i * j);
    }
    var qtdeA = 0;
    var qtdeR = 0; var qtdeE = 0;
    for (var i = 0; i < 6; i++) {
        if (media[i] >= 8.5) {
            alert("O aluno "+alunos[i]+", teve média --> "+media[i]+"\n\nO aluno está aprovado!");
            qtdeA = qtdeA + 1;
        }
        else if (media[i] >= 4.5) {
            alert("O aluno "+alunos[i]+", teve média --> "+media[i]+"\n\nO aluno está reprovado");
            qtdeR = qtdeR + 1;
        }
        else {
            alert("O aluno "+alunos[i]+", teve média --> "+media[i]+"\n\nO aluno está de exame!");
            qtdeE = qtdeE + 1;
        }

    }
    
    alert("A porcentagem de alunos aprovados é de: " + qtdeA * 100 / alunos.length + "%\n" +
        "A porcentagem de alunos reprovado é de: " + qtdeR * 100 / alunos.length + "%\n" +
        "A porcentagem de alunos de exame é de: " + qtdeE * 100 / alunos.length + "%");
}    