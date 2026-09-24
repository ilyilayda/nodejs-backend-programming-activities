// --- 1. Loglama Middleware ---
const logger = (req, res, next) => {
    const zaman = new Date().toLocaleTimeString('tr-TR');
    console.log(`[${zaman}] ${req.method} ${req.url}`);
    next();
};

app.use(logger);

// --- 2. Basit Auth Middleware ---
const authKontrol = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ hata: 'Token gerekli' });
    }

    if (token !== 'gizli-token-123') {
        return res.status(403).json({ hata: 'Geçersiz token' });
    }

    next(); // Token doğruysa devam et
};

// Sadece bu route korunsun:
app.get('/profil', authKontrol, (req, res) => {
    res.json({ kullanici: 'Ahmet', rol: 'admin' });
});