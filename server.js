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
    console.log('Recibida solicitud para verificar código:', req.body);
    const code = req.body.code;
    try {
        const codes = JSON.parse(fs.readFileSync(codesFilePath));
        if (codes[code]) {
            res.json({ valid: true });
        } else {
            res.json({ valid: false });
        }
    } catch (error) {
        console.error('Error al leer codes.json:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});