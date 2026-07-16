# Homeschool Inventory API

## Overview

The Homeschool Inventory API is a RESTful web service built with Node.js, Express, MongoDB, and Mongoose. It helps organize homeschool educational materials by storing math and reading resources in separate collections.

This project was developed as part of the BYU-Idaho CSE 341 course to demonstrate CRUD operations, data validation, error handling, API documentation, and deployment.

## Features

- REST API with full CRUD operations
- Two MongoDB collections:
  - Math Materials
  - Reading Materials
- Data validation using Mongoose
- Error handling with appropriate HTTP status codes
- Interactive API documentation using Swagger UI
- MongoDB Atlas database
- Deployment on Render

## Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Swagger UI
- Render

## Collections

### Math Materials

Each document contains:

- inventoryNumber
- name
- category
- ageRange
- skills
- quantity
- condition
- notes

### Reading Materials

Each document contains:

- inventoryNumber
- name
- category
- ageRange
- skills
- quantity
- condition
- notes

## API Endpoints

### Math

- GET /math
- GET /math/:id
- POST /math
- PUT /math/:id
- DELETE /math/:id

### Reading

- GET /reading
- GET /reading/:id
- POST /reading
- PUT /reading/:id
- DELETE /reading/:id

## API Documentation

Swagger documentation is available at:

```
/api-docs
```

## Author

Silvia Ferran

BYU-Idaho – CSE 341
