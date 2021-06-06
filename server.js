const app = require('express')();

const { PORT = 3000 } = process.env

app.get('/', (req, res) => {
  res.send('Hello world, from EB!');
})

app.listen(PORT, () => {
  console.log(`Listenting to port ${PORT}!`);
})