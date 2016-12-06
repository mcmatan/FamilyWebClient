import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
    marginRight: 20,
};


class FloatingButton extends Component {

    render() {
        return (
            <div>
                <FloatingActionButton style={style} onClick={this.props.onClick}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

export default FloatingButton;