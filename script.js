const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) + parseFloat(num2);
    res.send(`The result of ${num1} + ${num2} is ${result}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});