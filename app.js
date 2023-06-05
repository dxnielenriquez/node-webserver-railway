const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//servir contenidp estatico
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'daniel',
        titulo: 'curso de node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'daniel',
        titulo: 'curso de node'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'daniel',
        titulo: 'curso de node'
    });
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})


app.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${port}`)
})