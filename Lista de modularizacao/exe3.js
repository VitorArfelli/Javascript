function exe3(){
    let i;
    var p1 = [];
    var p2 = [];
    p1 = prompt("Digite uma palavra: ");
    p2 = prompt("Digite uma palavra: ");
    var resultado = comparação(p1,p2);
    alert(resultado);

comparação(p1, p2)
}
function comparação(p1, p2){
        if(p1 == p2){
            return 0;
        }
        else{
            for(i=0; i<p2.length; i++){
                if(p1[i] != p2[i]){
                    return i+1;
                }        
            }
    }
}
