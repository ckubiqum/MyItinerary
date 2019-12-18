const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cityRouter = require('./routes/cities-route');
const itineraryRouter = require('./routes/itinerary-route');
const activityRouter = require('./routes/activity-route');
const createRouter = require('./routes/users-create-route');
const authRouter = require('./routes/auth');

const port = process.env.PORT || 5000;
const config = require('config');
const db = config.get('mongoURI'); //database config


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cities-route', cityRouter);
app.use('/itinerary-route', itineraryRouter);
app.use('/activity-route', activityRouter);
app.use('/users-create-route', createRouter);
app.use('/auth', authRouter);


app.get('/', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));