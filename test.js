const {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js');

test('Convierte 1 euro a dólares → 1.07', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test('Convierte 1 dólar a yenes → ≈146.26', () => {
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});

test('Convierte 200 yenes a libras → ≈1.112', () => {
    const expected = (200 / 156.5) * 0.87;
    expect(fromYenToPound(200)).toBeCloseTo(expected);
});