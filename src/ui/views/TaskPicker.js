import React, {Component, PropTypes} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import TaskType from '../../Model/TaskType';
//import myImage from '../../../public/drugs.png';


let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number.isRequired,
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

class TaskPicker extends Component {
    render() {

        const listItems = TaskType.all().map( (taskType) => {
            return (<ListItem
                value={taskType.key}
                key={taskType.key}
                primaryText={taskType.display}
                leftAvatar={<Avatar src={taskType.src} />}
            />)
        });

        return (
            <SelectableList defaultValue={3}>
                <Subheader>Selectable Contacts</Subheader>
                {listItems}
            </SelectableList>
        )
    }
}

export default TaskPicker;

