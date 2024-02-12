const express = require('express');
const app = express();
const port = 8001;
const path = require('path');
let mongodburl = process.env.MONGODB_URI;

const {connecttoDB} = require('./connection');

const urlRouter = require('./routes/url');
const viewRouter = require('./routes/staticRouter');
const userRouter = require('./routes/user');
const cookieparser = require('cookie-parser');
const {restricToLoggedinUserOnly, checkAuth} = require('./middlewares/auth');

if(!mongodburl) {
    mongodburl = 'mongodb://localhost:27017/urlshortenerDB';
}

connecttoDB(mongodburl);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

//Server Side Rendering
app.set('view engine', 'ejs');
app.set("views",path.resolve('./views'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/url', restricToLoggedinUserOnly, urlRouter);
app.use('/',checkAuth, viewRouter);
app.use('/user', userRouter);


