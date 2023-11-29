const express = require('express');
const userRoutes = require('./routes/users');
const app = express();
app.use(express.json());

const port = 3000;

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
