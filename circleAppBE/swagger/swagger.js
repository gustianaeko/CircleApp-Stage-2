const swaggerAutogen = require("swagger-autogen")({
  openapi: "3.0.0",
  autoHeaders: false,
});

const doc = {
  info: {
    title: "CircleApp",
    description: "CircleApp API Documentation",
  },
  servers: [{ url: "http://localhost:3000" }],
  components: {
    "@schemas": {
      LoginDTO: {
        type: "object",
        properties: {
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
            format: "password",
          },
        },
        required: ["email", "password"],
      },
      RegisterDTO: {
        type: "object",
        properties: {
          fullName: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
            format: "password",
          },
        },
        required: ["fullName", "email", "password"],
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["../src/index.ts"];

swaggerAutogen(outputFile, routes, doc);
