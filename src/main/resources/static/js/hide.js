let asd = document.querySelectorAll(".genre-name");
for (let i = 0; i < asd.length; i++) {
    // Обработка каждого элемента здесь
    asd[i].onclick = function() {
        asd[i].parentNode.classList.toggle('hidden');
    }
}

let buttons = document.querySelectorAll('.to-cart');
for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = async function(){
        let response = await fetch("/to_cart?id="+this.value, {method: 'POST'});

        if (response.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            let json = await response.json();
            console.log(json);
            if (json.result){
                let child = this.parentElement;
                let parent = child.parentElement;
                parent.removeChild(child);
            }
          } else {
            alert("Ошибка HTTP: " + response.status);
          }
    }
}