// const React = require('react');
// const Layout = require('./Layout');

import { React } from 'react';
import Layout from './Layout.js';

function Main({ title }) {
  return (
    <Layout title={title}>
      <div>This is Main</div>
    </Layout>
  );
}

// module.exports = Main;

export default Main;
