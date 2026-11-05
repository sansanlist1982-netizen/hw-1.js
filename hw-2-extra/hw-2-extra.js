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