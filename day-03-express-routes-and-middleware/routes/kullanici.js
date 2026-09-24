const express = require('express');
const router = express.Router();

// get kullanıcılar
router.get('/kullanici', (req, res) => {
    res.json({
        mesaj: 'Kullanıcılar listesi',
        data: [
            { id: 1, ad: 'Ahmet', soyad: 'Yılmaz' },
            { id: 2, ad: 'Mehmet', soyad: 'Demir' },
            { id: 3, ad: 'Ayşe', soyad: 'Kara' }
        ]
    });
});

// post kullanıcı ekleme
router.post('/kullanici', (req, res) => {
    const yeniKullanici = req.body;

    res.json({
        mesaj: 'Yeni kullanıcı eklendi',
        data: yeniKullanici
    });
});

module.exports = router;