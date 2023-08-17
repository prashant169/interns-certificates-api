const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors'); // for cors
const specs = require('./swagger'); // Import the Swagger configuration file
const documentRoutes = require('./routes/documentRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
dotenv.config();

const port = process.env.PORT || 7000;

// Middlewares
app.use(bodyParser.json());
app.use(cors()); // Adding this line before defining routes for cors
// Routes
app.use('/generate-document', documentRoutes);
// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// Error Handler Middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
