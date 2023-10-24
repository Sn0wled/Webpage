let asd = document.querySelectorAll(".genre");
for (let i = 0; i < asd.length; i++) {
    // Обработка каждого элемента здесь
    asd[i].onclick = function() {
        asd[i].classList.toggle('hidden');
    }
}