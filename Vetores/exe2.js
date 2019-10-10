function exe2() {
	var num = [];
	var i; var mult2 = [];
	var mult3 = []; var mult23 = [];

	for (i = 0; i < 7; i++) {
		num.push(Number(prompt("Digite o " + (i + 1) + "° número: ")));

		if (num[i] % 2 == 0) {
			mult2.push(num[i]);
		}
		if (num[i] % 3 == 0) {
			mult3.push(num[i]);
		}
		if ((num[i] % 2 == 0) && (num[i] % 3 == 0)) {
			mult23.push(num[i]);
		}
	}
	alert(mult2 + " = São múltiplos de 2 sendo: " + mult2.length+" elementos.");
	alert(mult3 + " = São múltiplos de 3 sendo: " + mult3.length+" elementos.");
	alert(mult23 + " = São múltiplos de 2 e 3 sendo: " + mult23.length+" elementos.");
}