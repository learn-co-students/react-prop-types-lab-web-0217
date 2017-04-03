// const Product = require('./components/Product');
import Product from './components/Product'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Product name="Dunder Mifflin" producer="PaperCo" color="white" weight={210} />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
