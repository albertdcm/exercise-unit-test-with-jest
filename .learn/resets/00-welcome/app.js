// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Objeto con los valores de conversión desde 1 Euro
let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

// Función para convertir de Euro a Dólar
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

// Función para convertir de Dólar a Yen
function fromDollarToYen(dollars) {
    // Primero convertimos de dólar a euro
    let euros = dollars / oneEuroIs["USD"];
    // Luego de euro a yen
    return euros * oneEuroIs["JPY"];
}

// Función para convertir de Yen a Libra
function fromYenToPound(yen) {
    // Primero convertimos de yen a euro
    let euros = yen / oneEuroIs["JPY"];
    // Luego de euro a libra
    return euros * oneEuroIs["GBP"];
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }