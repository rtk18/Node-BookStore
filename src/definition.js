module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Book Store Application API Documentation',
        version: '1.0.0',
    },

    components: {
        securitySchemes: {
            // bearerAuth: {
            //     type: "http",
            //     scheme: "bearer",
            //     // in: "header",
            //     bearerFormat: "JWT",
            // },
        },
    },
    security: [
        {
            // bearerAuth: [],
        },
    ],
}
