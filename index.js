const express = require('express');
const userRoutes = require('./routes/users');
const app = express();
app.use(express.json());

const port = 3000;
const apiRouter = express.Router();

apiRouter.use('/users', userRoutes);
app.use('/api/v1', apiRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
