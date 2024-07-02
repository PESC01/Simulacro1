const express = require('express');
const fs = require('fs').promises; // Importa fs con soporte para promesas
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dataPath = path.join(__dirname, 'data');
const codesFilePath = path.join(dataPath, 'codes.json');

app.post('/check-code', async (req, res) => {
    const code = req.body.code;
    try {
        let data = await fs.readFile(codesFilePath, 'utf8');
        let codes = JSON.parse(data);

        if (codes[code]) {
            delete codes[code];
            await fs.writeFile(codesFilePath, JSON.stringify(codes));
            res.json({ valid: true });
        } else {
            res.json({ valid: false });
        }
    } catch (error) {
        console.error('Error al leer o manipular codes.json:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta para servir archivos de manera dinámica
app.get('/data/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(dataPath, filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send('Archivo no encontrado');
        } else {
            res.sendFile(filePath);
        }
    });
});

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
