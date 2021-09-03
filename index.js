const express = require('express');
const app = express();


app.use('/test', (req, res) => {
    console.log('received request');
    res.status(200).send("exitoso");
})
app.listen(3000, () => {
    console.log('Estoy escuchando el puerto 500');
})