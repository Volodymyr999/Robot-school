// Асинхронна функція, яка імітує отримання даних з сервера
async function fetchData(): Promise<string> {
    // Імітуємо затримку мережевого запиту за допомогою setTimeout
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Дані отримано!");
        }, 2000); // Затримка 2 секунди
    });
}

// Виклик асинхронної функції
async function main():Promise<void> {
    console.log("Отримання даних...");
    const result = await fetchData(); // Чекаємо на завершення асинхронної функції
    console.log(result); // Виведе: "Дані отримано!"
}

// Запуск головної функції
main();
