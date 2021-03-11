# ReactJS UI and ExpressJS Backend

This project shows how to use expressjs as backend for a ReactJs application.

To begin this project node.js need to be installed on your machine. It will use npm, npx to run and create the application.

### Create React Client
```bash
npx create-react-app client
cd client
npm start
```
Navigate to http://localhost:3000

### Create Express Api
```bash
npx express-generator api
cd api
npm install
npm start
```
change the port in bin/www file to 9000 (to avoid conflict with client). Navigate to http://localhost:9000

you can use nodemon for api to reflect changes automatically.

> **NOTE**: If you get CORS error while connecting to api then run below command
```bash
npm install --save cors
```
After running above command make following change to the api code
```javascript
1. Add below to api app.js
    var cors = require('cors');
2. Add below to tell express to use cors
    app.use(cors());
```