const express = require('express');
const app = express();
const port = 8001;
const path = require('path');
let mongodburl = process.env.MONGODB_URI;

const {connecttoDB} = require('./connection');

const urlRouter = require('./routes/url');
const viewRouter = require('./routes/staticRouter');
const userRouter = require('./routes/user');
const apiRouter = require('./routes/api');

const cookieparser = require('cookie-parser');
const {restrictToRole, checkforAuthentication} = require('./middlewares/auth');

if(!mongodburl) {
    mongodburl = 'mongodb://localhost:27017/urlshortenerDB';
}

connecttoDB(mongodburl);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(checkforAuthentication);

//Server Side Rendering
app.set('view engine', 'ejs');
app.set("views",path.resolve('./views'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Routes

//Allow only logged in user to create short url
app.use('/url',restrictToRole(["ADMIN","NORMAL"]), urlRouter);

//Allow only logged in user to view their own created urls
app.use('/', viewRouter);

//Route responsible for user login and signup and creating jwt token and storing in a cookie
app.use('/user', userRouter);

app.use('/api', apiRouter);