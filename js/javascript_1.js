// Блокировка F12 и ПКМ
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault(); // Предотвращение открытия DevTools
        alert('Открытие DevTools отключено!');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Запрещаем правый клик мыши
    alert('Контекстное меню отключено!');
});
