import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './screens/Home';
import Detail from './screens/Detail';
import User from './screens/User';
import Menu from './screens/Menu';
export const StackHome = StackNavigator({
    Home_Screen: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    Detail_Screen: {
        screen: Detail,
        navigationOptions: {
            title: 'Detail'
        }
    }
});

export const StackUser = StackNavigator({
    User_Screen: {
        screen: User,
        navigationOptions: {
            title: 'User'
        }
    }
});

export const Tabs = TabNavigator({
    Home: {
        screen: StackHome,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    User: {
        screen: StackUser,
        navigationOptions: {
            tabBarLabel: 'User'
        }
    }
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeBackgroundColor: 'green',
            inactiveBackgroundColor: 'blue',
            activeTintColor: 'red',
            inactiveTintColor: 'white'
        }

    }
);
export const Drawer = DrawerNavigator({
    Tabbar: {
        screen: Tabs
    }
}, {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);