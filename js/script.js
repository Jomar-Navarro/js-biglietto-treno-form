console.log("js-biglietto-treno-form");

const utente = document.querySelector('.utente');
const nomeCognome = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const priceElement = document.querySelector('.price');
const offer = document.querySelector('.offer');
const age = document.querySelector('.input3');
const carrozza = document.querySelector('.carrozza');
const code = document.querySelector('.code');
const hidden = document.querySelector('.hidden');

const priceXKm= 0.21;
const discountYoung = 20;
const discountOver65 = 40;
console.log(priceXKm, discountYoung, discountOver65);



btn1.addEventListener('click', function(){
  event.preventDefault();
  
  let isValidData = true;
  if (isNaN(input2.value) || age.value === 'Fascia di etá') {
    isValidData = false;
    alert('Attenzione! I dati inseriti non sono corretti.');
    return;
  }

  hidden.classList.toggle('d-none')
  
  utente.textContent = nomeCognome.value;
  
  const km = parseFloat(input2.value);
  const fasciaEta = age.value;

  let price;
  let finalPrice

  price = (km * priceXKm).toFixed(2);
  finalPrice = price;

  if( fasciaEta === 'adult' ){
    finalPrice = price;
    priceElement.textContent += price;
    offer.textContent = `Biglietto standard`;
  }else if (fasciaEta === 'under18'){
    finalPrice *= 1 - (discountYoung / 100);
    priceElement.textContent += finalPrice.toFixed(2);
    offer.textContent = `Biglietto con sconto Under 18`
    console.log(price);
  }else if( fasciaEta === 'over65'){
    finalPrice *= 1 - (discountOver65 / 100);
    priceElement.textContent += finalPrice.toFixed(2);
    offer.textContent = `Biglietto con sconto Over 65`
    console.log(price);
  }

  const randomNumber = Math.floor(Math.random() * 12 + 1);
  carrozza.innerHTML = randomNumber;
  console.log(randomNumber);

  const randomNumberTwo = Math.floor(Math.random() * 9998 + 1);
  code.textContent = randomNumberTwo;
  console.log(randomNumberTwo);
})

btn2.addEventListener('click', function(){
  nomeCognome.value = '';
  input2.value = '';
  age.value = 'Fascia di etá';
  hidden.classList.add('d-none');
})

