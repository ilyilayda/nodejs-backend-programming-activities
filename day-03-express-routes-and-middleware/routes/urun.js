const express = require('express');
const router = express.Router();

router.get('/urun', (req, res) => {
    res.json({
        mesaj: 'Ürünler listesi',
        data: [
            { id: 1, ad: 'Laptop', fiyat: 100 },
            { id: 2, ad: 'Tablet', fiyat: 200 },
            { id: 3, ad: 'Telefon', fiyat: 300 }
        ]
    });
});

router.post('/urun', (req, res) => {
    const yeniUrun = req.body;

    res.json({
        mesaj: 'Yeni ürün eklendi',
        data: yeniUrun
    });
});

module.exports = router;