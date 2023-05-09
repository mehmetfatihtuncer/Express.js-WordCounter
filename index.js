const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
  

app.post('/count-words', (req, res) => {
  const inputText = req.body.text;
  const wordCount = inputText.split(' ').length;
  res.send(`Text contains ${wordCount} words.`);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
