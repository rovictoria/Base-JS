/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/
function exercise1() {
    const numbers = {
        key1: 12,
        key2: 2,
        key3: 4,
        key4: 1,
        key5: -244,
        key6: 0,
        key7: 7,
    };

    for (let key in numbers) {
        if (numbers[key] >= 3) {
            console.log(numbers[key]);
        }
    }
}

// exercise1();

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

function exercise2() {
    const post = {
        author: "Mike", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Lili",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },
            {
                userId: 5, // вывести это число
                userName: "Jack",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}

// exercise2();

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

function exercise3() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    products.forEach((element) => {
        element.price *= 0.85;
    });
    console.log(products);
}

// exercise3();

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

function exercise4() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: ["1.jpg", "2.jpg"],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: ["3.jpg"],
        },
        {
            id: 8,
            price: 78,
        },
    ];

    console.log(products.filter(product => 'photos' in product && product.photos.length !== 0));    /*как вариант, можно обозначить > 0 и чуть иначе тогда оформить через return*/
    console.log(products.sort((product1, product2) => product1.price - product2.price));

}

// exercise4();

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

function exercise5() {
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
    ];

    const obj = {};

    en.forEach((element, i) => {
        obj[element] = ru[i];
    });

    console.log(obj);
}

exercise5();