import React, {Component} from 'react';

class CardComponent extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default CardComponent;