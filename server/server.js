const express = require('express');
const app = express();

const PORT = process.eventNames.PORT || 3001;

app.get('/', (req,res) => {
    res.send(`Hello SongD`);
});

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})