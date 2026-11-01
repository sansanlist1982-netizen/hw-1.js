// Задание 1:
function runTask1() {
    let a = 10; 
    alert(a);   

    a = 20;   
    alert(a);   
}


// Задание 2: 
function runTask2() {
    const iphoneReleaseYear = 2007;
    alert(`Год выпуска первого iPhone: ${iphoneReleaseYear}`);
}

// Задание 3: 
function runTask3() {
    const jsCreator = "Брендан Эйх";
    alert(`Создатель языка JavaScript: ${jsCreator}`);
}

// Задание 4: 
function runTask4() {
    const x = 10;
    const y = 2;
    const sum = x + y;
    const difference = x - y;
    const product = x * y;
    const quotient = x / y;
    alert(`Даны числа: ${x} и ${y}\n\nСумма: ${sum}\nРазность: ${difference}\nПроизведение: ${product}\nЧастное: ${quotient}`);
}

// Задание 5: 
function runTask5() {
    let result = 2 ** 5;
    alert(`Результат возведения 2 в 5-ю степень: ${result}`);
}

// Задание 6: 
function runTask6() {
    const a = 9;
    const b = 2;
    let remainder = a % b;
    alert(`Остаток от деления ${a} на ${b}: ${remainder}`);
}

// Задание 7: 
function runTask7() {
    let num = 1;
    num += 5;
    num -= 3;
    num *= 7;
    num /= 3;
    num++;
    num--;
    alert(num);
}

// Задание 8: 
function runTask8() {
    let age = prompt("Сколько вам лет?");
    if (age !== null && age !== "") {
        alert(`Ваш указанный возраст: ${age}`);
    } else {
        alert("Вы ничего не ввели!");
    }
}

// Задание 9: 
function runTask9() {
    const user = {
        name: "Александр",  
        age: 44,          
        isAdmin: true     
    };
      
    // alert(user); // При прямом выводе объекта через alert() браузер всегда возвращает строку [object Object]. 
    // Выводим сам объект на экран 
     alert(`Имя: ${user.name}, Возраст: ${user.age}, Админ: ${user.isAdmin}`);
   console.log(user);
}

// Задание 10: 
function runTask10() {
    let userName = prompt("Как вас зовут?");
    if (userName !== null && userName !== "") {
        alert(`Привет, ${userName}!`);
    } else {
        alert("Привет, человек без имени!");
    }
}
