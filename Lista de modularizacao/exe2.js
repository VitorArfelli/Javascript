function exe2(){
    let i;
    var vet = [];

    for(i=0; i<1; i++){
        var objeto = {};

        objeto.hora = Number(prompt("Informe a hora: "))
        objeto.min = Number(prompt("Informe o minuto: "))
        objeto.seg = Number(prompt("Informe o segundo: "))
        vet.push(objeto)
        var resultado = exe2_2(vet)
        alert(resultado)
    }

    conv_Hora(vet);
    conv_Minuto(vet);
    conv_Total(vet);

    function exe2_2(vet){
        var hr = 3600;
        for(i=0; i<vet.length; i++){
            somaHr = vet[i].hora*hr
        }
    }

    function conv_Minuto(vet){
        var min = 60;
        for(i=0; i<vet.length; i++){
            somaMin = vet[i].min*min
        }
    }

    function conv_Total(vet){
        var total = 0;
        for(i=0; i<vet.length; i++){
            total = somaHr + somaMin + vet[i].seg
        }
        alert("A conversão em segundos é: "+total)
    }
}