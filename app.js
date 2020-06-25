const express = require('express')
const app = express()
const tester = require('./test')

// app.get('/', (req, res) => {
//     res.send(tester.addMessage())
// })

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});