const Product = require('./components/Product');
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <Product name="Dunder Mifflin" producer="PaperCo" color="white" weight={210} />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
