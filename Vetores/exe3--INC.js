function exe3() {
    var codigoP = [];
    var estoqueP = [];
    var totalE = 0;

    alert(" --- CADASTRO DE PRODUTOS --- ")
    for (var i = 0; i < 2; i++) {
        codigoP.push(Number(prompt("Digite o código do produto: ")));
        estoqueP.push(Number(prompt("Digite a qtde em estoque: ")));
        totalE = totalE + estoqueP[i];
    }


    registro_Compras(codigoP, estoqueP)

}

function registro_Compras(codigoP, estoqueP, totalE) {
    var cola = ("Os códigos dos produtos junto à quantidade em estoque são respectivamente\nPro: " +
        codigoP + "\nQtde: " + estoqueP);
    var codigoCli = []; var codigoCom = []; var qtdeCom = [];
    var contCom = 0;
    alert(" --- REGISTRO DE COMPRAS --- ");
    while (contCom <= totalE) {
        codigoCli.push(Number(prompt("Digite o código do cliente\nOu (0)zero para sair: ")));
        codigoCom.push(Number(prompt(cola + "\n\nDigite o código do produto que deseja comprar: ")));
        for (var i = 0; i < codigoP; i++) {
            for (var x = 0; x < codigoCom; x++) {
                if (codigoP[i] == codigoCom[x]) {
                    qtdeCom.push(Number(prompt(cola + "\n\nDigite a quantidade de produtos que deseja comprar: ")));
                    contCom = contCom + qtdeCom;
                }
                else {
                    alert("Código inexistente !!!");
                }
            }
        }
        if(contCom == totalE){
            alert("Quantidade de produtos em estoque atingido !!!")
        }
    }



}














/*for (var i = 0; i < codigo.length; i++) {
    cliente.push(Number(prompt("Digite o código do cliente\nOu (0) para sair: ")));
    if (cliente == 0) {
        break;
    }
    else if(cliente > 0){
        comprar.push(Number(prompt(cola + "\n\nDigite o código do produto que deseja comprar: ")));
        for (var x = 0; x < codigo.length; x++) {
            if (codigo[i] == comprar[x]) {
                comprarQ.push(Number(prompt(cola + "\n\nDigite a quantidade que deseja comprar: ")));
                if (comprarQ[i] <= estoque[i]) {
                    alert("Pedido Atendido. Obrigado volte sempre.")
                    estoque[i] = estoque[i] - comprarQ[i];
                }
                else {
                    alert("Não temos estoque suficientes dessa mercadoria")
                }
            }
            else {
                alert("ERROR - Código Inexistente");
                continue;
            }
        }
    }

}

alert("--- Atualizção de estoque ---");
alert(cola);
} */

