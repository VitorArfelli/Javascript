function exe5(){
    let i;
    var vet = []
    var j;

    for(i=0; i<5; i++){
        var objeto = {}

        objeto.codigo = Number(prompt("Informe o código do produto: "));
        objeto.descricao = prompt("Informe a descrição do produto: ");
        objeto.valor = Number(prompt("Informe o valor do produto:"));
        objeto.quantidade = Number(prompt("Informe a quantidade em estoque: "));

        for(j=0; j<vet.length; j++){
            if(objeto.codigo < vet[j].codigo){
               vet.splice(j, 0, objeto);
               alert("Adicionado com sucesso")
               break;
            }
        }
        if(j == vet.length){
            vet.push(objeto);
            alert("Adicionado com sucesso");
        }
    }

    var cod = Number(prompt("Informe o código que quer alterar"));
    for(i=0; i<5;i++){
        if(cod == vet[i].codigo){}
        vet[i].descricao = prompt("Informe a nova descrição do produto: ");
        vet[i].valor = Number(prompt("Informe o novo valor do produto:"));
        vet[i].quantidade = Number(prompt("Informe a nova quantidade em estoque: "));
        break;
    }
    if(i == 5){
        alert("Produto não existe")
    }
    for(i=0; i<vet.length; i++){
        alert("Código do produto: " + vet[i].codigo + " " + "Descrição do produto" + vet[i].descricao + " " + "Valor do Produto" + vet[i].valor + " " + "Quantidade do produto" + vet[i].quantidade);
    }

    
}