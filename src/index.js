const express = require("express");
const cors = require("cors");
const routers = require("./routes");
const morgan = require("morgan");
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const path = require('path');



const app = express();
const PORT = 3003;


app.use(
  cors({
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('combined'))

app.use(routers);

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'This is a simple CRUD API Application made with express and documented with swagger',
    },
    servers: [
      {
        url: 'http://localhost:3003/api',
        description: 'Development server',
      },
      {
        url: 'https://backend-opal-delta.vercel.app/api',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', 
        },
      },
    },
    security: [
      {
        bearerAuth: [], 
      },
    ],
  },
  apis: [path.join(__dirname, '../api/routes/*.js')],
};



const swaggerSpecification = swaggerJsdoc(options)
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecification));
    
app.get('/', (req, res) => {
  res.send({
    message: 'Hello 👋',
    status: 'Server ready 🚀',
  })
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
