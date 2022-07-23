const { Client } = require('pg')
const client = new Client({
    connectionString:
        process.env.DATABASE_URL ||
        'postgres://rkykudmnzolvex:df6fdf2cfc06fcabc66cd99af9d0985bf17846733826d5b87c98f9022698ba3b@ec2-18-214-35-70.compute-1.amazonaws.com:5432/df1nvsvjsu6o78',
    ssl: {
        rejectUnauthorized: false,
    },
})
client.connect()
// client.end()

const Config = require('getconfig');

const getAllUsers = async (req, res, next) => {
    try {
        const sql = 'select * from Users'
        var result = client.query(sql, (err, dbRes) => {
            if (err) throw err
            result = dbRes.rows
            if (result) {
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
