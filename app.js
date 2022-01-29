const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

//BODY PARSER
app.use(express.json());

//COOKIE PARSER
app.use(cookieParser());

//PUBLIC DIRECTORY
app.use(express.static('public'));

//CORS
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        credentials: true
    }
));

//DB CONNECTION
const db_conn = require('./database/connection_db.js');

//DB CONNECTION TEST
const conn_test = require('./database/connection_test.js');
conn_test(db_conn);

//SEQUELIZE CONNECTION
const sequelize = require('./database/sequelize_con');

//SEQUELIZE CONNECTION TEST
const sequelize_test = require('./database/sequelize_test.js');
sequelize_test(sequelize);

//ROUTES
const user = require('./routes/user.js');
const post = require('./routes/post.js');

//CONTROLLERS
app.use('/user', user);
app.use('/post', post);

//SERVER STATUS
app.listen(3001, () => {
console.log("Server started on port 3001")
});