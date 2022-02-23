import { Component } from "react";

export default class Product extends Component {

    handleVote = ({ target }) => {
        const { product: { id }, onVote } = this.props;
        // onVote(id);
        target.className.includes('up') ? onVote(id, 1) : onVote(id, -1);
    };

    render() {

        const { 
            product: {
                title, 
                description, 
                url, 
                productImageUrl, 
                submitterAvatarUrl: avatar, 
                votes = 0 
            }
        } = this.props; 

        return (
            <div className="item">
                <div className="image">
                    <img src={productImageUrl} alt="Product" />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a href="javascript:void(0)" onClick={this.handleVote}>
                            <i className="large caret up icon" />
                        </a>
                        {votes}
                        <a href="javascript:void(0)" onClick={this.handleVote}>
                            <i className="large caret down icon" />
                        </a>
                    </div>
                    <div className="description">
                        <a href={url}>{title}</a>
                        <p>{description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img src={avatar} alt="Avatar" className="ui avatar image" />
                    </div>
                </div>
            </div>
        );
    }
} 