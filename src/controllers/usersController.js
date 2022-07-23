const config = require('dotenv').config()

const { Client } = require('pg')
const client = new Client({
    connectionString:
        process.env.DATABASE_URL, 
            ssl: {
        rejectUnauthorized: false,
    },
})
client.connect()
// client.end()

const getAllUsers = async (req, res, next) => {
    try {
        const sql = 'select * from Users'
        var result = client.query(sql, (err, dbRes) => {
            if (err) throw err
            result = dbRes.rows
            if (result.length) {
                res.json({
                    statusCode: 200,
                    message: 'Success',
                    data: result,
                })
            } else {
                res.json({
                    statusCode: 404,
                    message: 'No Records Found',
                    data: [],
                })
            }
        })
    } catch (error) {
        res.send({
            statusCode: 500,
            message: error.message,
        })
    }
}
const getUser = async (req, res, next) => {
    try {
        const UserId = req.query.UserId
        const sql = 'select * from Users where UserId = ' + UserId
        var result
        client.query(sql, (err, dbRes) => {
            if (err) {
                res.send({ statusCode: 500, message: err.message })
                return
            } else result = dbRes.rows

            if (result.length) {
                res.json({
                    statusCode: 200,
                    message: 'Success',
                    data: result,
                })
            } else {
                res.json({
                    statusCode: 404,
                    message: 'No Records Found',
                    data: [],
                })
            }
        })
    } catch (error) {
        res.send({
            statusCode: 500,
            message: error.message,
        })
    }
}
//export controller functions
module.exports = {
    getAllUsers,
    getUser,
}
