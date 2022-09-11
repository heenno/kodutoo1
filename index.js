const express = require('express');
const app = express();
const port = process.env.PORT || 80;

/*app.get('/', (req, res) => {
    res.send('Hello World, from express');
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
*/

app.get('/index', (req, res) => {
    console.log("Nimi:",req.query.nimi);
    res.send('Tervituse saamiseks palun kirjuta URL-i lõppu peale = märki oma nimi.\r\n Tere ' + req.query.nimi);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))