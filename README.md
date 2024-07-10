# LascadeTask API Documentation and Setup

## Overview

This repository contains the LascadeTask API, a Node.js application that includes user creation, authentication, CSV upload and processing, and database operations using MongoDB. The API also integrates with Redis for efficient task queue management.

## Prerequisites

Ensure that you have the following installed on your local system:

- Node.js
- Redis

## Setup Instructions

###1. Clone the Repository

First, clone the repository to your local system:

```bash
git clone https://github.com/Duyoofmp/LascadeTask.git
cd LascadeTask
```

###2. Install Dependencies
Install the required Node.js dependencies:
```bash
npm install
```
###3.Configure Environment Variables
Create a .env file in the root directory with the following content:
```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/lascade
JWT_SECRET=qwertyuiop
REDIS_URL=redis://localhost:6379
```

###4. Start Redis Server
Ensure that Redis is running on your local system. If you are using WSL (Windows Subsystem for Linux), you can start Redis with the following command:
```bash
wsl redis-server
```
###5. Run the Application
Start the Node.js application:
```bash
node app.js
```
The application should now be running on
`http://localhost:3000`

###6. Swagger Documentation
To view the API documentation, navigate to
```http://localhost:3000/api-docs```


Note: If you are running the application locally, make sure to update the ```swagger.json```
file to reflect the local URL. Change the host to ```localhost:3000``` and ensure the scheme is set to 
'http'
