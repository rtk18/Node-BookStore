const express = require('express')
const routes = require('../src/routes/testRoutes.js') // import the routes
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const https = require('https')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 4000
app.use(express.json())

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
                url: 'http://localhost:4000',
                description: 'Book Store Application API Documentation',
            },
        ],
    },
    apis: ['./testRoutes/*.js'],
}

const specs = swaggerJsDoc(swaggerOptions)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(specs))
app.use('/api', routes) //to use the routes
app.get('/', (req, res) => {
    res.send('Welcome To My Book Store App')
}) //to use the routes

// const listener = app.listen(process.env.PORT || 4000, () => {
//     console.log('Your app is listening on port ' + listener.address().port)
// })
var httpsServer = https.createServer(sslOptions, app)

httpsServer.listen(port, console.log(`Server listening on port: ${port}`))
