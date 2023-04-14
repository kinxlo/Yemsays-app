/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')))

// Route all requests to the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Start the server
// St
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
