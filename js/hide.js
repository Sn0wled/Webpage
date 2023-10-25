let asd = document.querySelectorAll(".genre-name");
for (let i = 0; i < asd.length; i++) {
    // Обработка каждого элемента здесь
    asd[i].onclick = function() {
        asd[i].parentNode.classList.toggle('hidden');
    }
}