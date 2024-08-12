
const fromCurrency = document.querySelector('#from-currency');
const toCurrency = document.querySelector('#to-currency');
const btn = document.querySelector('#btn');
const showResult = document.querySelector('#result');

const api = `4ca8ae49ce1a78dc06c963d1`;
const apiURL = `https://v6.exchangerate-api.com/v6/${api}/latest/USD`;

const currensies = [
    "USD",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
]

currensies.forEach((curr) => {
    const option = document.createElement("option");
    option.value = curr;
    option.text = curr;
    fromCurrency.add(option);
    option.style.backgroundColor = '#fff';
});

currensies.forEach((curr) => {
    const option = document.createElement("option");
    option.value = curr;
    option.text = curr;
    toCurrency.add(option);
    option.style.backgroundColor = '#fff';
});

fromCurrency.value = 'USD';
toCurrency.value = 'INR';

const convertCurrency = () => {

    const amount = document.querySelector('#amount').value;


    const FC = fromCurrency.value;
    const TC = toCurrency.value;

    if (amount.length != 0) {

        fetch(apiURL).then(response => response.json()).then((data) => {

            let fromExchangeRate = data.conversion_rates[FC];
            let toExchangeRate = data.conversion_rates[TC];

            let convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            showResult.innerHTML = `${amount} ${FC} : ${convertedAmount.toFixed(3)} ${TC}`;
        });


    } else {

        alert('Please fill the amount')

    }
}


btn.addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);