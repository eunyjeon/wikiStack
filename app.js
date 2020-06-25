const express = require('express')
const morgan = require('morgan')
const models = require('./models')
const app = express()




app.use(morgan('dev'))

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
