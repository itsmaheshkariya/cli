const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json())
app.use(express.static('.'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('*', (req,res)=>{
    res.sendFile(__dirname +'/index.html');
});

app.listen(8080 || process.env.PORT)
