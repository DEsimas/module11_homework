// let ctr = 0, ID = setInterval(function(begin, end){
//     begin += begin < end ? ctr++ : ctr--;
//     console.log(begin);
//     if(begin == end) clearInterval(ID);
// }, 1000, 5, 5);

function printNumbers(from, to) {
	let ctr = 0, ID = setInterval(function(begin, end){
	    begin += begin < end ? ctr++ : ctr--;
	    console.log(begin);
	    if(begin == end) clearInterval(ID);
	}, 1000, from, to);
}

printNumbers(10, 15);
printNumbers(1, 8);

// Логика решения верна, но задание соблюдено не полностью. Данный код нужно было обернуть в функцию, которая принимает 2 числа в качестве аргумента. Сейчас это просто блок кода, который нельзя переиспользовать. Выше переписала на верный вариант.