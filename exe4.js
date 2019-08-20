function exe4(){
	var num = [];
	var i; var posi = [];

	for(i=0;i<15;i++){
		num.push(prompt("Digite o "+i+"° número: "));
		if(num[i]==30){
			posi.push(i);
		}
	}
	i=0
	while(i<posi.length){
		alert("As posições de vetores para valores iguais a 30 são: "+posi[i]);
		i++;
	}
}