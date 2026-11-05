// ========== ОСНОВНЫЕ ЗАДАНИЯ ==========

// Задание 1: Проверка пароля
function runTask1() {
    let password = 'пароль';
    let userPassword = prompt('Введите пароль');

    if (userPassword === password) {
        alert('Пароль введен верно');
    } else {
        alert('Пароль введен неправильно');
    }
}

// Задание 2: Проверка, что c больше 0 и меньше 10
function runTask2() {
    let c = 2;
    // Проверка для значения c = 2
    if (c > 0 && c < 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }

    // Дополнительные проверки для значений 0, 10, -3
    checkC(0);
    checkC(10);
    checkC(-3);
}

// Вспомогательная функция для проверки разных значений c
function checkC(value) {
    if (value > 0 && value < 10) {
        console.log(`c = ${value}: Верно`);
    } else {
        console.log(`c = ${value}: Неверно`);
    }
}

// Задание 3: Если одна из переменных больше 100
function runTask3() {
    let d = 50;
    let e = 150;

    if (d > 100 || e > 100) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }

    // Дополнительные проверки
    checkDE(10, 20);   // ни одна не больше 100
    checkDE(200, 5);   // d больше 100
    checkDE(100, 100); // равно 100, не больше
}

// Вспомогательная функция для проверки разных значений d и e
function checkDE(valD, valE) {
    if (valD > 100 || valE > 100) {
        console.log(`d = ${valD}, e = ${valE}: Верно`);
    } else {
        console.log(`d = ${valD}, e = ${valE}: Неверно`);
    }
}

// Задание 4: Преобразование типов (Из '23' сделать 5)
function runTask4() {
    let a = '2';
    let b = '3';
    // Исправляем код ниже с помощью преобразования типов
    alert(Number(a) + Number(b));
}

// Задание 5: Сезон по номеру месяца (switch)
function runTask5() {
    let monthNumber = 12;

    if (monthNumber < 1 || monthNumber > 12) {
        alert('Некорректный номер месяца!');
    } else {
        switch (monthNumber) {
            case 12:
            case 1:
            case 2:
                alert('Зима');
                break;
            case 3:
            case 4:
            case 5:
                alert('Весна');
                break;
            case 6:
            case 7:
            case 8:
                alert('Лето');
                break;
            case 9:
            case 10:
            case 11:
                alert('Осень');
                break;
        }
    }
}

// ========== ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ ==========

// Дополнительное задание 1: Четность / нечетность числа
function runTaskExtra1() {
    let number = Number(prompt('Пожалуйста, введите любое число'));

    // Проверка: является ли введенное значение числом
    if (isNaN(number)) {
        alert('Это не число!');
    } else if (number % 2 === 0) {
        // Число четное (делится на 2 без остатка)
        alert('Число четное');
    } else {
        // Число нечетное
        alert('Число нечетное');
    }
}

// Дополнительное задание 2: Определение ОС клиента
function runTaskExtra2() {
    let clientOS = 0; // 0 — iOS, 1 — Android

    if (clientOS === 0) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    }
}

// Дополнительное задание 3: ОС клиента + год выпуска телефона
function runTaskExtra3() {
    let clientOS = 0;         // 0 — iOS, 1 — Android
    let clientDeviceYear = 2015;

    if (clientOS === 0) {
        // Пользователь iOS
        if (clientDeviceYear < 2015) {
            alert('Установите облегченную версию приложения для iOS по ссылке');
        } else {
            alert('Установите версию приложения для iOS по ссылке');
        }
    } else {
        // Пользователь Android
        if (clientDeviceYear < 2015) {
            alert('Установите облегченную версию приложения для Android по ссылке');
        } else {
            alert('Установите версию приложения для Android по ссылке');
        }
    }
}