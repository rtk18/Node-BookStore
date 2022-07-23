const config = require('dotenv').config()

const { Client } = require('pg')
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
})
client.connect()

const getAllBooks = async (req, res, next) => {
    try {
        const sql = 'select * from Books'
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
const addBook = async (req, res, next) => {
    try {
        const BookName = req.body.BookName
        const EditionYear = req.body.EditionYear
        const Genre = req.body.Genre
        const sql =
            'insert into Books' +
            ' values(' +
            " nextval('books_sequence'), '" +
            BookName +
            "', '" +
            EditionYear +
            "', '" +
            Genre +
            "')"
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
module.exports = {
    getAllBooks,
    addBook,
}
