
//DB CONNECTION TEST
const conn_test = (db_conn) => {
    db_conn.connect(err => {
        if (!err) {
            console.log("Connected to DB!");
        } else {
            console.log(err);
        }
    });
}

module.exports = conn_test;