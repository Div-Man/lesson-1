/*var sum = require('./index.js')

var res = sum([1,2,3]);
var res2 = sum([3,4,5]);
var res3 = sum([6,7,8]);

if(res != 6){
	console.error("Функция работате не верно!")
}

if(res2 != 12){
	console.error("Функция работате не верно!")
}

if(res3 != 21){
	console.error("Функция работате не верно!")
}

*/



var calc = require('./index.js')

var res = calc.sum([1,2,3]);
var res2 = calc.sum([3,4,5]);
var res3 = calc.sum([6,7,8]);

if(res != 6){
	console.error("Функция работате не верно!")
}

if(res2 != 12){
	console.error("Функция работате не верно!")
}

if(res3 != 21){
	console.error("Функция работате не верно!")
}




var resDif = calc.dif([1,2,3]);
if(resDif != -6){
	console.error("Функция работате не верно!")
}

// -6 потому что изначально 0
// и поэтому при первой итерации
// из нуля отнимаем 1 и так далее