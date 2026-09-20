function topla(a, b) {
    return a + b;
}

console.log(topla(5, 10));

const carp = (a, b) => a * b;
console.log(carp(5, 10));

function selamla(isim = "İLAYDA") {
    return `merhaba ${isim}`;
}

console.log(selamla("ahmet"));
console.log(selamla());