import { Component } from "react";
import Product from "./Product";

export default class ProductsList extends Component {

    state = {
        products: [],
        descendent: true
    };

    componentDidMount() {
        const { products } = this.props;
        this.setState({ products });
    }

    handleProductVote = (id, vote = 1) => {
        const { products } = this.state;
        const newProductsState = products.map(product => {
            if (product.id === id) {
                return { ...product, votes: product.votes + vote };
            }
            return product;
        });

        this.setState({
            products: newProductsState
        });
    };

    toggleSort = () => this.setState({ descendent: !this.state.descendent });

    productsList() {
        const { products, descendent } = this.state;
        const sortedProducts = products.sort((a, b) => descendent ? (b.votes - a.votes) : (a.votes - b.votes));

        return sortedProducts.map(
            product => <Product key={product.id} product={product} onVote={this.handleProductVote} />
        );
    }

    render() {
        const { products, descendent } = this.state;

        return (
            <div className="ui unstackable items">
                <button className="ui button" onClick={this.toggleSort}>
                    <i className={`large caret ${descendent ? 'up' : 'down'} icon`} />
                    {descendent ? 'Ascentent' : 'Descendent'}
                </button>

                {products.length === 0 && <p>No products available.</p>}
                {this.productsList()}
            </div>
        );
    }
} 