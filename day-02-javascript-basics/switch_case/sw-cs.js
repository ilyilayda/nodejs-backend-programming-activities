// hesapMakinesi.js - switch/case versiyonu

function hesapla(a, islem, b) {
    switch (islem) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) return "Hata: Sıfıra bölme!";
            return a / b;

        default:
            return "Bilinmeyen işlem!";
    }
}

// --- Test ---

const islemler = [
    [10, "+", 5],
    [20, "-", 8],
    [6, "*", 7],
    [15, "/", 3],
    [9, "/", 0]
];

islemler.forEach(([a, op, b]) => {
    console.log(`${a} ${op} ${b} = ${hesapla(a, op, b)}`);
});