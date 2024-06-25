const express = require('express');
const bodyParser = require('body-parser');
require('./config/DB_connect');
const userRoutes = require('./routes/uRoutes');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use('/worko/user', userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
