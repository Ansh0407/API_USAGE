
// const exchangeButton = document.getElementById('exchangeButton');
// exchangeButton.addEventListener('click', () =>  {
//   var myHeaders = new Headers();
//   myHeaders.append("apikey", "4WKhBNe9WVGIFu3s93NpKRFIawFY7H3l");
  
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
//   };
  
//   fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//   })

const exchangeButton = document.getElementById('exchangeButton');
exchangeButton.addEventListener('click', () => {
    const toCurrency = document.getElementById('toCurrency').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const amount = document.getElementById('amount').value;
    
    var myHeaders = new Headers();
    myHeaders.append("apikey", "4WKhBNe9WVGIFu3s93NpKRFIawFY7H3l");
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions)
.then(response => response.json()) 
.then(result => {
    const conversionResult = result.result;
    document.getElementById('result').textContent = `Conversion Result: ${conversionResult}`;
})
.catch(error => console.log('error', error));
})

const dogImage = document.getElementById('dogImage');
const fetchDogButton = document.getElementById('fetchDogButton');

fetchDogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
    })
    .catch(error => console.error(error));
});

const jokeContainer = document.getElementById('jokeContainer');
const fetchJokeButton = document.getElementById('fetchJokeButton');

fetchJokeButton.addEventListener('click', () => {
  console.log("jokeButton")
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      jokeContainer.innerHTML = `<p>${data.joke || data.setup} ${data.delivery || ''}</p>`;
    })
    .catch(error => console.error(error));
});
