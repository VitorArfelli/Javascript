function exe2(){
	var num = [];
	var i; var mult2 = [];
	var mult3 = []; var mult23 = [];

	for(i=0;i<7;i++){
		num.push(Number(prompt("Digite o "+i+"° número: ")));
		
		if(num[i]%2==0){
			mult2.push(num[i]);
		}
		if(num[i]%3==0){
				mult3.push(num[i]);
		}
		if((num[i]%2==0)&&(num[i]%3==0)){
					mult23.push(num[i]);
		}
	}
	alert(mult2+" - "+mult2.length);
	alert(mult3+" - "+mult3.length);
	alert(mult23+" - "+mult23.length);
}