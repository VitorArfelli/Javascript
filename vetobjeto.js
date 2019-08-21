function funcao(){
    //criar o vetor
    var vet = [];
    //criar objeto
    var objeto = {}
    //criar os produtos
    for(var i=0;i<5;i++){
        objeto.codigo = Number(prompt("Informe o código"));
        objeto.nome = prompt("Informe o nome");
        objeto.qtde = Number(prompt("Informe a qtde"));
        objeto.preco = Number(prompt("Informe preço"));
        vet.push(objeto)
        alert("Produto criado com sucesso")
    }
    var estoque = 0;
    for(var i=0;i<5;i++){

    estoque = vet[i].codigo + estoque; 
    }   
    alert(estoque);
}