// require('@babel/register');
// const express = require('express');
// const mainRouter = require('./routes/mainRouter');

import '@babel/register';
import { express } from 'express';
import * as mainRouter from './routes/mainRouter.js';

const app = express();
const PORT = 3000;

app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
