// --- Sayaç nesnesi ---

const sayac = {
    deger: 0,

    artir() {
        this.deger++;
        console.log(`Sayaç: ${this.deger}`);
    },

    azalt() {
        this.deger--;
        console.log(`Sayaç: ${this.deger}`);
    },

    sifirla() {
        this.deger = 0;
        console.log("Sayaç sıfırlandı!");
    },

    goster() {
        console.log(`Mevcut değer: ${this.deger}`);
    }
};

// --- Test ---

sayac.artir();    // Sayaç: 1
sayac.artir();    // Sayaç: 2
sayac.azalt();    // Sayaç: 1
sayac.goster();   // Mevcut değer: 1
sayac.sifirla();  // Sayaç sıfırlandı!