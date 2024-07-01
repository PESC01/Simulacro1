const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dataPath = path.join(__dirname, 'data');
const correctAnswers = { q1: "respuesta1", q2: "respuesta2" };

app.post('/check-code', (req, res) => {
    const code = req.body.code;
    const codes = JSON.parse(fs.readFileSync(path.join(dataPath, 'codes.json')));
    if (codes[code]) {
        delete codes[code];
        fs.writeFileSync(path.join(dataPath, 'codes.json'), JSON.stringify(codes));
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.post('/submit-quiz', (req, res) => {
    const userAnswers = req.body.answers;
    const responseRecord = JSON.parse(fs.readFileSync(path.join(dataPath, 'responses.json')));
    responseRecord.push(userAnswers);
    fs.writeFileSync(path.join(dataPath, 'responses.json'), JSON.stringify(responseRecord));
    res.json({ correctAnswers, userAnswers });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
