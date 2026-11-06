
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

function testUnusedVariable() {
    const unusedValue = 100;
    console.log("Testing SonarQube");
}

function calculateEmployeeSalary(basicSalary, bonus, tax) {
    if (basicSalary < 0 || bonus < 0 || tax < 0) {
        throw new Error("Invalid salary details");
    }

    const grossSalary = basicSalary + bonus;
    const taxAmount = grossSalary * tax / 100;
    const netSalary = grossSalary - taxAmount;

    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Gross Salary:", grossSalary);
    console.log("Tax Amount:", taxAmount);
    console.log("Net Salary:", netSalary);

    return netSalary;
}

function calculateContractorSalary(basicSalary, bonus, tax) {
    if (basicSalary < 0 || bonus < 0 || tax < 0) {
        throw new Error("Invalid salary details");
    }

    const grossSalary = basicSalary + bonus;
    const taxAmount = grossSalary * tax / 100;
    const netSalary = grossSalary - taxAmount;

    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Gross Salary:", grossSalary);
    console.log("Tax Amount:", taxAmount);
    console.log("Net Salary:", netSalary);

    return netSalary;
}
