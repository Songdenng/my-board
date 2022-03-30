const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/host', (req, res) => {
    res.send({ host : 'SongD' });
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

