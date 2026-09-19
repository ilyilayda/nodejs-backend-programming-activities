const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/') {
        res.writeHead(200);
        res.end(JSON.stringify({ page: 'Ana Sayfa' }));

    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end(JSON.stringify({ page: 'Hakkımızda' }));

    } else if (req.url === '/users') {
        res.writeHead(200);
        res.end(JSON.stringify([
            { id: 17, name: 'İlayda' },
            { id: 24, name: 'Solfej' }
        ]));

    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Sayfa bulunamadı' }));
    }
});

server.listen(5000, () => {
    console.log('Sunucu 5000 portunda çalışıyor');
});