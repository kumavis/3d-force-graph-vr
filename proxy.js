const fs = require('fs')
const httpProxy = require('http-proxy')

//
// Create the HTTPS proxy server in front of a HTTP server
//
httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 5000
  },
  ssl: {
    key: fs.readFileSync('privatekey.pem', 'utf8'),
    cert: fs.readFileSync('certificate.pem', 'utf8')
  }
}).listen(5001);