function exe5() {
    var mes = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    var mat = []
    for (var i = 0; i < 12; i++) {
        mat[i] = []
        for (var j = 0; j < 4; j++) {
            mat[i][j] = Number(prompt("Informe o valor: "))
        }
    }
    
    for (var i = 0; i < 12; i++) {
        mat[i] = []
        var totalMes = 0
        for (var j = 0; j < 4; j++) {
            totalMes += mat[i][j];
        }
        alert(`Total vendido no mes ${mes[i]} é ${totalMes}`)
    }
    for (var j = 0; j < 4; j++) {
        mat[i] = []
        var totalSemana = 0
        for (var i = 0; i < 12; i++) {
            totalSemana += mat[i][j];
            totalAno+=mat[i][j]
        }
       
    }
    alert(`Total vendido no ano ${totalAno}`)
}