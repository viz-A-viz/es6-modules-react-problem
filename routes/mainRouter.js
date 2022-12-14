// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const express = require('express');
// const Main = require('../views/Main');

import { express } from 'express';
import { React } from 'react';
import { ReactDOMServer } from 'react-dom/server';
import Main from '../views/Main.js';

const router = express.Router();

router.get('/', (req, res) => {
  const main = React.createElement(Main, { title: 'Main' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
});

// module.exports = router;

export default router;
