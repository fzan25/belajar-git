const tambah = (a, b) => {
    return a + b;
}

const kurang = (a, b) => {
    return a - b;
}

const kali = (a, b) => {
    return a * b;
}

const bagi = (a, b) => {
    return a / b;
}

function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return tambah(a, b);
        case '-':
            return kurang(a, b);
        case '*':
            return kali(a, b);
        case '/':
            return bagi(a, b);
        default:
            throw new Error('Operator tidak dikenali');
    }
}

console.log(calculator(10, 5, '+'));
console.log(calculator(10, 5, '-'));
console.log(calculator(10, 5, '*'));
console.log(calculator(10, 5, '/'));

