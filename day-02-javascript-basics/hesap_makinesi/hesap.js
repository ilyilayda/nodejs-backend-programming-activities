// hesap.js

function topla(a, b) {
    return a + b;
}

function cikar(a, b) {
    return a - b;
}

function carp(a, b) {
    return a * b;
}

function bol(a, b) {
    if (b === 0) {
        return "Hata: Sıfıra bölme!";
    }

    return a / b;
}

function ussu(taban, us) {
    return Math.pow(taban, us);
    //return a**b;
}

function karekok(sayi) {
    if (sayi < 0) return "Hata: Negatif sayının kökü yok!";

    return Math.sqrt(sayi);
}

// --- Test ---

console.log("5 + 3 =", topla(5, 3));       // 8
console.log("10 - 4 =", cikar(10, 4));     // 6
console.log("6 x 7 =", carp(6, 7));        // 42
console.log("15 ÷ 3 =", bol(15, 3));       // 5
console.log("10 ÷ 0 =", bol(10, 0));       // Hata!
console.log("2³ =", ussu(2, 3));            // 8
console.log("√16 =", karekok(16));          // 4