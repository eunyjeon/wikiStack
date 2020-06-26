const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const models = require('./models')
const app = express() // creates an express app

app.use(morgan('dev')) // logging middleware
app.use(express.static(path.join(__dirname, "./public")))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

const init = async() => {
  await models.db.sync({force: true})
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listqening in port ${PORT}`);
  });

}

init()
