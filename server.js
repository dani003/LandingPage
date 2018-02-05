
var express = require('express')
var bodyparser = express()
var path = require('path')
var app=express()

app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('fonts'));
app.use(express.static('inc'));
app.use(express.static('node_modules'));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})


app.listen(5000, function(){
  console.log('Example app listening on port 5000!');
});
