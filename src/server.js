const express = require('express')

const user = require('../src/routes/userRoutes.js') // import the routes

const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const http = require('http')
const fs = require('fs')
// const cors = require('cors')

const app = express()

const port = process.env.PORT || 4000

app.use(express.json())
// app.use(cors)
const sslOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: 'abcd',
}

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book Store Application API Documentation',
            version: '1.0.0',
            contact: {
                name: 'Ritik Mehra',
                email: 'mehra.ritik18@gmail.com',
            },
        },

        servers: [
            {
                url: 'http://127.0.0.1:4000',
                description: 'Book Store Application API Documentation',
            },
        ],
    },
    apis: ['./src/Routes/*.js'],
}

const specs = swaggerJsDoc(swaggerOptions)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(specs))
app.use('/api/user', user) //to use the routes

app.get('/', (req, res) => {
    res.send('Welcome To My Book Store App')
}) //to use the routes

// const listener = app.listen(process.env.PORT || 4000, () => {
//     console.log('Your app is listening on port ' + listener.address().port)
// })
var httpsServer = http.createServer(app)
httpsServer.timeout = 1000
httpsServer.listen(port, console.log(`Server listening on port: ${port}`))
