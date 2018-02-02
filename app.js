const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.type('text')
  res.send('Hello World')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
