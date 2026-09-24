const express = require('express');
const app = express();

const PORT = 5000;

app.use(express.json());

let urunler = [
    { id: 1, ad: 'Laptop', fiyat: 100 },
    { id: 2, ad: 'Tablet', fiyat: 200 },
    { id: 3, ad: 'Telefon', fiyat: 300 }
];

// Ürünleri listeleme
app.get('/urunler', (req, res) => {
    res.json({ mesaj: 'Ürünler listesi', data: urunler });
});

app.post('/urunler', (req, res) => {
    // İçerik iste ad,fiyat
    const { ad, fiyat } = req.body;

    const yeniUrun = {
        id: urunler.length + 1,
        ad,
        fiyat
    };

    urunler.push(yeniUrun);

    res.json({
        mesaj: 'Yeni ürün eklendi',
        data: yeniUrun
    });
});


//app.put('/urunler/:id', (req, res) => {
//    const { id } = req.params;
//    res.json({ mesaj: `Ürün ${id} güncellendi`, data: req.body });
//});

app.put('/urunler/:id', (req, res) => {
    const { id } = req.params;
    const { ad, fiyat } = req.body;

    const urun = urunler.find(u => u.id === parseInt(id));

    if (urun) {
        urun.ad = ad;
        urun.fiyat = fiyat;

        res.json({
            mesaj: `Ürün ${id} güncellendi`,
            data: urun
        });
    } else {
        res.status(404).json({
            mesaj: `Ürün ${id} bulunamadı`
        });
    }
});


app.delete('/urunler/:id', (req, res) => {
    const { id } = req.params;
    res.json({ mesaj: `Ürün ${id} silindi` });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
