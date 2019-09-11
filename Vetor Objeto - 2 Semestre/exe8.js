function exe8p2(){
    var estados = [];
    cadastroEstados(estados);
    calculaIndice(estados);
    calculaPercentual(estados);
    calculaMedia(estados);
}
function cadastroEstados(estados){
    for(var i = 0; i <3;i++){
        var objeto = {};
        objeto.nome = prompt("Informe um estados: ");
        objeto.veiculos = Number(prompt("Informe o número de veículos: "));
        objeto.acidentes = Number(prompt("Informe o número de acidentes: "));
        objeto.indice = (objeto.acidentes/objeto.veiculos)*100
        estados.push(objeto);
    }
}
function cadastroIndice(estados){
    var maiorIndece = 0;
    var maiorEstado = "";
    var menorIndice = 0;
    var menorEstado = "";
    for(var i=0;i<3;i++){
        if(estados[i].indece>maiorIndice){
            maiorIndice = estados[i].calculaIndice;
            maiorEstado = estados[i].nome;
        }
        if(estados[i].indice<menorIndice){
            menorIndice = estados[i].indice;
            menorEstado = estados[i].nome;
        }
    }
    alert(`Maior indice ${maiorIndice} com nome ${maiorEstado}`);
    alert(`Menor indice ${menorIndice} com nome ${menorEstado}`);
}
function calculaPercentual(estados){
    var total = 0;
    for(var i=0;i<3;i++){
        total = total + estados[i].veiculos
    }
    for(var i=0;i<3;i++){
        alert((estados[i].veiculos/total)*100);
    }
}
function calculaMedia(estados){
    for(var i=0;i<3;i++){
        total = total + estados[i].veiculos
    }
    alert(total/3)
}