// Define the pricing rules for each item
const pricingRules = {
    A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
    B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
    C: { unitPrice: 20 },
    D: { unitPrice: 15 }
};

// Define the basket object to keep track of added items and their quantity
const basket = {};

// Add an item to the basket
const addItemToBasket = (item) => {
    if (basket[item]) {
        basket[item]++;
    } else {
        basket[item] = 1;
    }
}

// Calculate the total price of the items in the basket
const calculateTotal = () => {
    let total = 0;
    for (const item in basket) {
        if (pricingRules[item].specialPrice) {
            const specialPrice = pricingRules[item].specialPrice;
            const numSpecials = Math.floor(basket[item] / specialPrice.quantity);
            const numRemaining = basket[item] % specialPrice.quantity;
            total += numSpecials * specialPrice.price + numRemaining * pricingRules[item].unitPrice;
        } else {
            total += basket[item] * pricingRules[item].unitPrice;
        }
    }
    return total;
}

// Test the checkout system with some example items
addItemToBasket('A');
addItemToBasket('B');
addItemToBasket('C');
addItemToBasket('A');
console.log(`Total price: ${calculateTotal()} pence`); // Expected output: "Total price: 150 pence"
