// const { Client } = require('pg')
// async function execute(sql) {
//     const client = new Client({
//         connectionString:
//             'postgres://rkykudmnzolvex:df6fdf2cfc06fcabc66cd99af9d0985bf17846733826d5b87c98f9022698ba3b@ec2-18-214-35-70.compute-1.amazonaws.com:5432/df1nvsvjsu6o78',
//         ssl: {
//             rejectUnauthorized: false,
//         },
//     })

//     client.connect()

//     var result
//     client.query(sql, (err, res) => {
//         if (err) throw err
//         result = res.rows
//         client.end()
//     })
//     return result
// }
