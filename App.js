import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import NotificationsScreen from './pages/NotificationsScreen';

export default MyApp = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Notifications: {
        screen: NotificationsScreen,
    },
});
