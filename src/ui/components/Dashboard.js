import React, {Component} from 'react';
import FloatingButton from '../views/FloatingButton'
import BottomTabBar from './BottomTabBar'

class Dashboard extends Component {
    render() {
        return (
        <div>
            <div>Dashboard!</div>
            <FloatingButton />
            <BottomTabBar />
        </div>

        )
    }
}

export default Dashboard;