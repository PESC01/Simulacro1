const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dataPath = path.join(__dirname, 'data');
const codesFilePath = path.join(dataPath, 'codes.json');
const correctAnswers = { q1: "respuesta1", q2: "respuesta2" };

// Endpoint to check if a code is valid
app.post('/check-code', (req, res) => {
    const code = req.body.code;

    try {
        // Read codes.json file
        const codes = JSON.parse(fs.readFileSync(codesFilePath, 'utf8'));

        // Check if code exists in codes.json
        if (codes[code]) {
            // If code exists, delete it from codes.json
            delete codes[code];
            fs.writeFileSync(codesFilePath, JSON.stringify(codes));

            // Respond with valid:true
            res.json({ valid: true });
        } else {
            // Respond with valid:false if code does not exist
            res.json({ valid: false });
        }
    } catch (error) {
        // Handle errors
        console.error('Error al leer o manipular codes.json:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
