window.addEventListener('load', getEurCurrency);
function getEurCurrency() {
    fetch('https://free.currencyconverterapi.com/api/v6/convert?q=USD_UAH&compact=ultra&apiKey=89efcbb8a5912cf4ad21').then(response=>response.json()).then(currency=>document.querySelector('.USD-currency-container').innerText = `USD ${currency['USD_UAH'].toFixed(2)}`);
}

const slideRoteArray = ['img/slider/cr-first.jpg', 'img/slider/lr-second.jpg', 'img/slider/or-first.jpg', 'img/slider/br-fourth.jpg'];
document.querySelector('.slider img').addEventListener('click', sliderRotate);
let sliderCounter = 0
function sliderRotate() {
    sliderCounter++;
    if (sliderCounter >= 4) {
        sliderCounter = 0;
        document.querySelector('.slider img').src = slideRoteArray[0];
    } else {
        switch (sliderCounter) {
        case 1:
            document.querySelector('.slider img').src = slideRoteArray[1];
            break;
        case 2:
            document.querySelector('.slider img').src = slideRoteArray[2];
            break;
        case 3:
            document.querySelector('.slider img').src = slideRoteArray[3];
            break;
        }
    }

}
let setsArray = ' ';
let totalMoney = 0;
let basketBay = 0;

document.querySelector('.basket').addEventListener('click', basketClick);
function basketClick() {
    document.querySelector('#user-count').value = totalMoney;
    document.querySelector('#user-choose').value = setsArray;  
    alert('Contact US !');
}

document.querySelector('#br-first button').addEventListener('click', addToBasketbrfirst);
function addToBasketbrfirst() {
    totalMoney += parseFloat(document.querySelector('#br-first button').value);
    setsArray += (document.querySelector('#br-first h3').innerText) + ', ';
    basketBay += 1;
    document.querySelector('.basketBayN').innerText = basketBay;
}

document.querySelector('#br-second button').addEventListener('click', addToBasketbrsecond);
function addToBasketbrsecond() {
    totalMoney += parseFloat(document.querySelector('#br-second button').value);
    setsArray += (document.querySelector('#br-second h3').innerText) + ', ';
    basketBay += 1;
    document.querySelector('.basketBayN').innerText = basketBay;
}

document.querySelector('#br-third button').addEventListener('click', addToBasketbrthird);
function addToBasketbrthird() {
    totalMoney += parseFloat(document.querySelector('#br-third button').value);
    setsArray += (document.querySelector('#br-third h3').innerText) + ', ';
    basketBay += 1;
    document.querySelector('.basketBayN').innerText = basketBay;
}

document.querySelector('#br-fourth button').addEventListener('click', addToBasketbrfourth);
function addToBasketbrfourth() {
    totalMoney += parseFloat(document.querySelector('#br-fourth button').value);
    setsArray += (document.querySelector('#br-fourth h3').innerText) + ', ';
    basketBay += 1;
    document.querySelector('.basketBayN').innerText = basketBay;
}

document.querySelector('#cr-first button').addEventListener('click', addToBasketcrfirst);
function addToBasketcrfirst() {
    totalMoney += parseFloat(document.querySelector('#cr-first button').value);
    setsArray += (document.querySelector('#cr-first h3').innerText) + ', ';
    basketBay += 1;
    document.querySelector('.basketBayN').innerText = basketBay;
}

document.querySelector('#cr-second button').addEventListener('click', addToBasketcrsecond);
function addToBasketcrsecond() {
    totalMoney += parseFloat(document.querySelector('#cr-second button').value);
    setsArray += (document.querySelector('#cr-second h3').innerText) + ', ';
    basketBay += 1;
    document.querySelector('.basketBayN').innerText = basketBay;
}

document.querySelector('#cr-third button').addEventListener('click', addToBasketcrthird);
function addToBasketcrthird() {
    totalMoney += parseFloat(document.querySelector('#cr-third button').value);
    setsArray += (document.querySelector('#cr-third h3').innerText) + ', ';
    basketBay += 1;
    document.querySelector('.basketBayN').innerText = basketBay;
}

document.querySelector('#cr-fourth button').addEventListener('click', addToBasketcrfourth);
function addToBasketcrfourth() {
    totalMoney += parseFloat(document.querySelector('#cr-fourth button').value);
    setsArray += (document.querySelector('#cr-fourth h3').innerText) + ', ';
    basketBay += 1;
    document.querySelector('.basketBayN').innerText = basketBay;
}

document.querySelector('.submit-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.submit-form'))
    }).then(response=>response.text()).then(html=>document.querySelector('.server-response').innerHTML = html);
}
