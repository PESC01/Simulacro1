const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dataPath = path.join(__dirname, 'public');
const codesFilePath = path.join(dataPath, 'codes.json');

app.post('/check-code', (req, res) => {
    const code = req.body.code;
    try {
        const codes = JSON.parse(fs.readFileSync(codesFilePath));
        if (codes[code]) {
            delete codes[code];
            fs.writeFileSync(codesFilePath, JSON.stringify(codes, null, 2));
            res.json({ valid: true });
        } else {
            res.json({ valid: false });
        }
    } catch (error) {
        console.error('Error al leer o manipular codes.json:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
