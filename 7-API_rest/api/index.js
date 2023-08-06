const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://nda:${process.env.PASSWORD}@cluster0.adsx3wt.mongodb.net/miapp?retryWrites=true&w=majority`)

