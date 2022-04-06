const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./config/db');

app.get('/api/host', (req, res) => {
    res.send({ host : 'SongD' });
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

