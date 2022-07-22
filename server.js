const express = require('express')
const routes = require('./routes/testRoutes') // import the routes
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const app = express()

app.use(express.json())

const options = {
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
    apis: ['./Routes/*.js'],
}

const specs = swaggerJsDoc(options)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/api', routes) //to use the routes

const listener = app.listen(process.env.PORT || 4000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
