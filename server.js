const path = require('path')
const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

// Get a cloud computer object. If no object exists, create it.
let computer
app.get('/computer', async (req, res) => {
  if (computer) {
    res.send(computer)
    return
  }
  const resp = await axios.post('https://engine.hyperbeam.com/v0/vm', {}, {
    headers: { 'Authorization': `Bearer ${process.env.HB_API_KEY}` }
  })
  computer = resp.data
  res.send(computer)
})

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/style.css'))
})

app.get('/reset.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/reset.css'))
})

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/script.js'))
})

app.listen(8080, () => {
  console.log('Server start at http://localhost:8080')
})
