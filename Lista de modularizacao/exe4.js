function exe4(){
    var raio = Number(prompt("Informe o raio da esfera"));
    var resultado = Volume(raio);
    alert(resultado)
}        

function Volume(raio){
    return (4*Math.PI*Math.pow(raio,3))/3        
}
