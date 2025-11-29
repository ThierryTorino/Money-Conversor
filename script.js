const button = document.getElementById('convert-button')
const dolar = 5.2
const euro = 5.9

const select = document.getElementById('currency-select')

const convertValues = () =>{
    const real = document.getElementById('input-real').value
    const textoReal = document.getElementById('real-value-text')
    const textoCurrency = document.getElementById('currency-value-text')

    textoReal.innerHTML = new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: 'brl'}
    ).format(real)

    if(select.value === 'US$ Dolar Americano'){
        textoCurrency.innerHTML = new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD'}
        ).format(real / dolar)
    }

    if(select.value === '€ Euro'){
        textoCurrency.innerHTML = new Intl.NumberFormat('de-DE',
        {style: 'currency', currency: 'EUR'}
        ).format(real / euro)
    }
}

const changeCurrency = () =>{
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === 'US$ Dolar Americano'){
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = 'assets/bandeiraEUA.png'
    }

    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src = 'assets/euro.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
