function exe2(){ 
    var vet = [];
    var i;
    var salarioM = 0; var filhosM = 0; var salarioMaior = 0;
    var totalM=0; var perc = 0;
    for(i=0;i<3;i++){
        var objeto = {}
        objeto.sexo = (prompt("Sexo (m)masculino (f)feminino"))
        objeto.salario = (Number(prompt("Salário")));
        objeto.idade = (Number(prompt("Idade")));
        objeto.numF = (Number(prompt("Numero de filhos")));

        vet.push(objeto)
    }
    for(i=0;i<3;i++){
        salarioM = salarioM + vet[i].salario;
        filhosM = filhosM + vet[i].numF;
        if(salarioMaior > vet[i].salario){
            salarioMaior = vet[i].salario;
        }
        if((vet[i].sexo == "f")&&(vet[i].salario>1.000)){
            totalM++
        }
    }
    alert("Média salarial: "+salarioM/vet.length);
    alert("Média de filhos: "+filhosM/vet.length);
    alert("Salário maior: "+salarioMaior);
    alert("Porcentagem de mulheres com salário acima de R$1.000: "+totalM/vet.length*100);
   

}