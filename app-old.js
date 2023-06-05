const http = require('http');

http.createServer( (req, res) => {

    console.log(req);

    // res.writeHead(200, { 'Content-Type': 'application/json'  })
//    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv'  })

    res.write('hola mundo' );
    res.end();
})
.listen( 8080 );

console.log('escuchando el puerto', 8080)