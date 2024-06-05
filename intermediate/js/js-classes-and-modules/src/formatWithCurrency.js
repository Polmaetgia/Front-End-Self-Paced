// src/formatWithCurrency.js
export function formatWithCurrency(price, currencySymbol) {
    return `${price.toFixed(2)}${currencySymbol}`;
}
