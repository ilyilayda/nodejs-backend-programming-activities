const express = require('express');
const app = express();

const PORT = 5000;

app.use(express.json());
app.use('/kullanici', require('./kullanici'));
app.use('/urun', require('./urun'));

//const kullanici = require('./routes/kullanici');
//const urun = require('./routes/urun');
//app.use(express.json());
//app.use('kullanicilar', kullanici);
//app.use('urunler', urun);

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});   