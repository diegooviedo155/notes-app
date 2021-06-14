const mongoose = require('mongoose');

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env
//${NOTES_APP_MONGODB_DATABASE||"notes-app"}`;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST || "localhost"}`;

mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
