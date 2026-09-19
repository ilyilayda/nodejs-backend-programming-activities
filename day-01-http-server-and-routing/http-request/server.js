// server.js

const http = require('http');

const server = http.createServer((req, res) => {
    // İstek geldiğinde bu çalışır
    console.log('İstek geldi:', req.method, req.url);

    // JSON yanıt gönder
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        message: 'Merhaba Dünya!',
        success: true
    }));
});

server.listen(5000, () => {
    console.log('Sunucu 5000 portunda çalışıyor');
});