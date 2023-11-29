const express = require('express');
const userRoutes = require('./routes/users');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API',
            version: '1.0.0',
            description: 'Dokumentasi Express API'
        },
        servers: [
            { url: 'http://localhost:3000' }
        ],
    },
    apis: ['./routes/*.js']
};

const port = 3000;
const apiRouter = express.Router();

apiRouter.use('/users', userRoutes);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1', apiRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
