function isSimple(value){
    if(value <= 1000)
    {
        value = value < 0 ? -1*value: value;
        for(let i = 2; i < value; i++)
            if(Number.isInteger(value/i))
                return ("Число не простое");
        value != 0 ? console.log("Число простое") : console.log("Число не простое");
    }
    else console.log("Данные неверны");
};

isSimple(prompt());

// В задании есть несколько ошибок:
// 1. Если число не простое, в консоль не выводится ничего, т.к. функция делает return и возвращает значение, но не выводит его в консоль. Весь код, что идёт после return, не выполняется
// 2. Не учтены числа 0 и 1, как было нужно по заданию. Эти числа не являются ни простыми, ни составными, для них нужно отдельное условие.
// 3. Не учтён вариант, когда пользователь нажал Отмена и value = null

// Ниже прикладываю верный вариант решения, чтобы вы могли разобрать ошибки:
function definePrime (num) {
	let isPrime = true, result = '';

	if (num > 1 && num <= 1000) {
		for (let i = 2; i < num; i++) {
			if(num % i === 0) {
				isPrime = false;
			}
		}
		result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
	} else {
		result = 'Данные неверны';
	}
	return result;
}

console.log(definePrime(16))