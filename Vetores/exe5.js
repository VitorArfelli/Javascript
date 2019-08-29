function exe5(){
    let lo = [];
    let li = [];
    for(let i=0;i<10;i++){
        lo.push(Number(prompt("Informe código do aluno: ")));
    }
    for(let i=0;i<5;i++){
        li.push(Number(prompt("Informe código do aluno: ")));
    }
    var interseccao = [];
    for(let i=0;i<10;i++){
        if(li.indexOf(lo[i] != -1)){
            interseccao.push(logica[i])
        }
    }
    alert(interseccao)
}