const express = require('express')
const port = process.env.PORT || 3000

app = express()

app.get('/', (req, res) => {
  res.status(404)
  res.send('Hellllllllo')
})



app.listen(port)

module.exports.app = app
