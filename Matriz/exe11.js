function exe11() {
    var alunos = []
    var disciplinas = []
    var qntAlu = Number(prompt("Qnts alunos: "));
    var qntDis = Number(prompt("Qnts disciplinas: "));
    //entrada dos alunos
    for (var i = 0; i < qntAlu; i++) {
        var obj = {}
        obj.codigo = Number(prompt("Informe o código do aluno: "))
        obj.idade = Number(prompt("Informe a idade do aluno: "))
        alunos.push(obj)
    }
    // entrada das disciplinas
    for (var i = 0; i < qntDis; i++) {
        disc.push(Number(prompt("informe o código das disciplinas: ")))
    }
    //entrada da qnt de provas
    var provas = []
    for (var i = 0; i < qntAlu; i++) {
        provas[i] = []
        for (var j = 0; j < qntDis; j++) {
            provas[i][j] = Number(prompt(`Quant provas: ${alunos[i].codigo} - ${disc[j]}`))
        }
    }
}