const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3003;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes'));

app.listen(PORT, ()=> {
    console.log(`App live on ${PORT}!`)
});