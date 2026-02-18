// 1. Текстти өзгөртүү
function changeText() {
    document.getElementById('mainText').innerText = "Текст жаңыртылды!";
}

// 2. Издөө (Search) функциясы
function searchFruits() {
    let filter = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementById('fruitList').getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(filter)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// 2. Калькулятор (Calculate)
function calculate() {
    const val1 = parseFloat(document.getElementById('num1').value) || 0;
    const val2 = parseFloat(document.getElementById('num2').value) || 0;
    const sum = val1 + val2;
    document.getElementById('calcResult').innerText = "Жыйынтык: " + sum;
}

// 3. Текст редакторду сактоо
function saveText() {
    const content = document.getElementById('editableText').innerText;
    alert("Текст сакталды: " + content);
}

// 4. Сүрөттү алмаштыруу (Toggle)
function changeImage() {
    const img = document.getElementById('dynamicImg');
    if (img.src.includes()) {
        img.src = "1643a7bb1b2f1a1cc03529787e998f06-300x228.jpg"; // Туш келди сүрөт
    } else {
        img.src = "Без названия.jpg";
    }
}

function addNewElement() {
    // 1. Инпутту жана тизмени таап алабыз
    const input = document.getElementById('itemInput');
    const list = document.getElementById('listContainer');
    
    // 2. Инпуттагы жазылган текстти алабыз
    const text = input.value;

    // 3. Эгерде инпут бош эмес болсо, анда иштейт
    if (text.trim() !== "") {
        // Жаңы 'li' элементин түзөбүз
        const newLi = document.createElement('li');
        
        // Инпуттан алынган текстти жаңы 'li'ге беребиз
        newLi.innerText = text;
        
        // Сүрөттөгүдөй жаңы кошулган тексттин түсүн өзгөчө кылсаңыз болот
        newLi.style.color = "#5dade2";

        // 4. PREPEND - жаңы текстти тизменин эң башына кошот
        list.prepend(newLi);

        // 5. Кошулгандан кийин инпутту тазалап коёбуз
        input.value = "";
    } else {
        alert("Сураныч, бир нерсе жазыңыз!");
    }
}