// app.js

// Tasas de conversión
const oneEuroIs = {
    JPY: 156.5, // yen japonés
    USD: 1.07,  // dólar estadounidense
    GBP: 0.87   // libra esterlina
};

// Convertir euros a dólares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

// Convertir dólares a yenes (vía euros)
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yens = euros * oneEuroIs.JPY;
    return yens;
};

// Convertir yenes a libras (vía euros)
const fromYenToPound = (yens) => {
    const euros = yens / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
};

// Exportar funciones
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};