const app = require('http')

server = app.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome bichess')
  }
  if (req.url === '/about') {
    res.end('biches im on the abbout')
    return
  }
  res.end(`
  <h1>Bich you are road</h1>
  <p>can't find the page you are looking for</p>
  <a href="/">Homepage</a>`)
})

server.listen(8080)
