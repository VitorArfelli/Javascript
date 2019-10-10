function exe1() {

	var num = [];
	var nump = [];
	var numi = [];
	var i; var par = 0; var imp = 0;

	for (i = 0; i < 6; i++) {
		num.push(Number(prompt("Informe o " + (i + 1) + "° número: ")));

		if (num[i] % 2 == 0) {
			nump.push(num[i]);
			par++;
		}
		else {
			numi.push(num[i]);
			imp++;
		}
	}

	alert("Os números pares são: " + nump);
	alert("Os números impares são: " + numi);
	aslert("A quantidade de números pares são: " + par + "\n E a quantidade de números impares são: " + imp);
}