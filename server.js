const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dataPath = path.join(__dirname, 'data');
const correctAnswers = { q1: "respuesta1", q2: "respuesta2" };
const codesFilePath = path.join(dataPath, 'codes.json');

app.post('/check-code', (req, res) => {
    const code = req.body.code;
    try {
        const codes = JSON.parse(fs.readFileSync(codesFilePath));
        if (codes[code]) {
            delete codes[code];
            fs.writeFileSync(codesFilePath, JSON.stringify(codes));
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

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
