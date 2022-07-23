const express = require('express')

const users = require('./routes/usersRoutes.js')
const books = require('./routes/booksRoutes.js')

const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

const http = require('http')
const fs = require('fs')

const app = express()

const port = process.env.PORT || 4000

app.use(express.json())
const sslOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: 'abcd',
}

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/api/user', users)
app.use('/api/book', books)

app.get('/', (req, res) => {
    res.send('Welcome To My Book Store App')
})

var httpsServer = http.createServer(app)
httpsServer.timeout = 1000

httpsServer.listen(port, console.log(`Server listening on port: ${port}`))
