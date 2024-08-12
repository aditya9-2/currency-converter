

const currencies = [
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

const fromCurrency = document.querySelector('#from-currency');
const toCurrency = document.querySelector('#to-currency');
const btn = document.querySelector('#btn');
const showResult = document.querySelector('#result');

const api = '4ca8ae49ce1a78dc06c963d1';
const apiURL = `https://v6.exchangerate-api.com/v6/${api}/latest/USD`;


currencies.forEach(curr => {
    const option = document.createElement("option");
    option.value = curr;
    option.text = curr;
    fromCurrency.add(option);
    option.style.backgroundColor = '#fff';
});

currencies.forEach(curr => {
    const option = document.createElement("option");
    option.value = curr;
    option.text = curr;
    toCurrency.add(option);
    option.style.backgroundColor = '#fff';
});

fromCurrency.value = 'USD';
toCurrency.value = 'INR';


const fetchExchangeRates = () => {
    return new Promise((resolve, reject) => {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch exchange rates');
                }
                return response.json();
            })
            .then(data => resolve(data.conversion_rates))
            .catch(error => reject(error));
    });
};


const convertCurrency = () => {
    const amount = document.querySelector('#amount').value;
    const fromCurrencyCode = fromCurrency.value;
    const toCurrencyCode = toCurrency.value;

    if (amount.trim() === '') {
        alert('Please fill in the amount');
        return;
    }

    fetchExchangeRates()
        .then(rates => {
            const fromRate = rates[fromCurrencyCode];
            const toRate = rates[toCurrencyCode];

            if (fromRate && toRate) {
                const convertedAmount = (amount / fromRate) * toRate;
                showResult.innerHTML = `${amount} ${fromCurrencyCode} : ${convertedAmount.toFixed(3)} ${toCurrencyCode}`;
            } else {
                showResult.innerHTML = 'Currency codes are not valid.';
            }
        })
        .catch(error => {
            showResult.innerHTML = `Error: ${error.message}`;
        });
};


btn.addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);
