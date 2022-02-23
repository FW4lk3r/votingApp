import React from 'react';
import ProductsList from './components/ProductsList';
import { products } from './seeds';

export default class App extends React.Component {

  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(products)}</pre> */}
        <h1>Voting App</h1>
        <hr />
        <ProductsList products={products} />
      </div>
    );
  }
}