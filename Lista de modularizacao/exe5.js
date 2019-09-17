function exe5(){
    var n = Number(prompt("Digite um número: "))
    var resul = verificacao(n)
    alert(resul)
}

function verificacao(n){
    return (n >= 0) ? "Positivo" : "Negativo"
}