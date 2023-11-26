/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

function exercise1() {
    for (let index = 0; index <= 10; index++) {
        if (index === 0) {
            console.log(`${index} - это ноль`);
        } else if (index % 2 === 0) {
            console.log(`${index} - четное число`);
        } else {
            console.log(`${index} - нечетное число`);
        }
    }
}

// exercise1();

/*
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/

function exercise2() {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    arr.splice(2, 3, 100)
    console.log(arr);
}

// exercise2();

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

function exercise3() {
    const arr = [];
    let sumElemArr = 0;
    const newArr = [];

    for (let i = 0; i < 5; i++) {
        const randomNum = getRandomInt(0, 9);
        arr.push(randomNum);
        sumElemArr += randomNum;
        if (randomNum === 3) {
            newArr.push(i);
        }
    }

    let minElem = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (minElem > arr[i]) {
            minElem = arr[i];
        }
    }

    console.log(`Массив: ${arr}`);
    console.log(`Сумма элементов массива: ${sumElemArr}`);
    console.log(`Минимальное значение в массиве: ${minElem}`);
    console.log(`Новый массив: ${newArr}`);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// exercise3();

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:
 
x
xx
xxx
xxxx
xxxxx
*/

function exercise4() {
    let str = "";
    for (let i = 0; i <= 20; i++) {
        console.log((str += "x"));
    }
}

exercise4();