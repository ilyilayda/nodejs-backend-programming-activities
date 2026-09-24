const express = require('express');
const app = express(); //Expressin özelliklerini değişkenime atadım 2

const PORT = 3000;

app.use(express.json());

// Anasayfa
app.get('/', (req, res) => {
    res.json({
        mesaj: 'Merhaba Express Framework!',
        durum: 'Çalışıyor',
        versiyon: '1.0.0'
    });
});

// Hakkında sayfası
app.get('/hakkinda', (req, res) => {
    res.json({
        mesaj: 'Bu bir örnek Express uygulamasıdır.',
        yazar: 'TNC BACKEND EKİBİ',
        versiyon: '1.0.0'
    });
});

// İletişim sayfası
app.get('/iletisim', (req, res) => {
    res.json({
        mesaj: 'İletişim sayfasına hoş geldiniz!',
        email: 'musa@tnc.com',
        telefon: '+90 123 456 7890'
    });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});