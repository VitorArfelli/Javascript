function exe1(){

	var num = [];
	var nump = [];
	var numi = [];
	var i; var par; var imp;

	for(i=0;i<7;i++){
		num.push(Number(prompt("Informe o primeiro "+i+"° : ")));

		if(num[i] % 2 == 0){
			num.push(nump[i]);
			par++;
		}
			else{
				num.push(numi[i]);
				imp++;
			}
	}
	while(i<=num.length){
		alert("Os números pares são: "+nump[i]);
		alert("Os números impares são: "+numi[i]);
		i++;
	}
	alert("A quantidade de números pares são: "+par+"\n E a quantidade de números impares são: "+imp);
		

	
}