onst express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/retroalimentacion.html');
});

app.post('/submit', (req, res) => {
    const feedback = req.body;
    console.log(feedback);
    res.send('La retroalimentación ha sido recibida. ¡Gracias!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
