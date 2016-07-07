//функция, которая суммирует все числа

/*function sum(sourse){
	var res = 0;
	for(var i =0; i < sourse.length; i++){ // перебираем все элементы массива
		res += sourse[i];
	}
	return res;
}

module.exports = sum

*/


function sum(sourse){
	var res = 0;
	for(var i =0; i < sourse.length; i++){ // перебираем все элементы массива
		res += sourse[i];
	}
	return res;
}

function dif(sourse){
	var res = 0;
	for(var i = 0; i < sourse.length; i++){ // перебираем все элементы массива
		res -= sourse[i];
	}
	return res;
}


module.exports = {
	sum: sum,
	dif: dif
}

