var express = require('express')
var app = express()

app.get('/:id', function (req, res) {
  res.redirect('home.html')
})

app.get('/test',function(req,res){
res.render('index.html');

})



app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})