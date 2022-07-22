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
//GET '/tea'
const getAllPersons = async (req, res, next) => {
    const sql = 'select * from Persons'
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
    // client.end()
}
//export controller functions
module.exports = {
    getAllPersons,
}
