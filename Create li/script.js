const list = document.querySelector('.numberList');
for (let i = 1; i <= 10; i++) {
    const item = document.createElement('li');
    item.textContent = `Число: ${i}`;
    list.appendChild(item);
}