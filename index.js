const express = require("express");
const parser = require('body-parser');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(parser.json());

// read file

app.use(express.static(__dirname));

app.listen(PORT, function() {
  console.log('server running at localhost:'+PORT);
});

app.get('/acces-data-file', async function(req,res){
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="./public/app.js" defer></script>
      <title>login</title>
  </head>
  <body>
      <form action="">
          <label for="">username</label>
          <input type="text" id="username">
          <label for="" >Password</label>
          <input type="password" id="pass">
          <button id="btn">Access</button>
      </form>
  </body>
  </html>`);
          });
          
app.post('/acces-file', async (req, res) => {
  const data = await req.body;
  console.log(data);
  // do what ever you wanna do with the data
  await fs.readFile('users.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    const jsonData = JSON.parse(data);
    console.log(data.username);
    console.log(jsonData[data.username]);
    console.log(jsonData[data.username]);
    if (jsonData[data.username] == data.password){
      fs.readFile('admin/data.txt', 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log(data)
      });
    }
      
  });
});
          

