function exe5(){
    var lo = [];
    var li = [];
    for(let i=0;i<5;i++){
        lo.push(Number(prompt("Lógica de programação\nInforme o código do aluno: ")));
    }
    for(let i=0;i<4;i++){
        li.push(Number(prompt("Linguagem de programação\nInforme o código do aluno: ")));
    }
    var interseccao = [];
    for(var i=0;i<lo.length;i++){
        for(var x=0;x<li.length;x++){
            if(lo[i] == li[x]){
                interseccao.push(lo[i]);
            }
        }
    }
    alert("Os códigos que aparecem nas duas disciplina é: "+interseccao)
}