const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const feedbackRoute = require('./routes/feedback.routes');

mongoose.connect(
    "mongodb+srv://Arijeet_725:Qm0tiDujbnpOnIT9@cluster0.p9j7r.mongodb.net/sl-event-feedbacks?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(()=>console.log('Connected to database successful'))
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/feedback',feedbackRoute);

const PORT = 3000;
app.listen(PORT,console.log(`Server started at port: ${PORT}`))