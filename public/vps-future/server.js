const express = require('express');
const geoip = require('geoip-lite');
const path = require('path');

const app = express();

// Entspricht 1:1 dem, was middleware.js bei Vercel tut
app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
        || req.socket?.remoteAddress;
    const geo = geoip.lookup(ip);
    const country = geo?.country || 'US';

    res.cookie('visitor_country', country, {
        maxAge: 24 * 60 * 60 * 1000,
        path: '/'
    });
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Server läuft auf Port 3000'));
