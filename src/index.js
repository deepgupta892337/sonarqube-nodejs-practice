
function greetUser(name) {
    return `Welcome, ${name}!`;
}
function calculateTotal(price, quantity) {
    if (price < 0 || quantity < 0) {
        throw new Error("Price and quantity cannot be negative");
    }

    return price * quantity;
}

function greetUser(name) {
    return `Welcome, ${name}!`;
}

const total = calculateTotal(100, 3);

console.log(greetUser("Developer"));
console.log("Total amount:", total);

function calculateDiscount(price) {
    return price - (price * 0.10);
}
