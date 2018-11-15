import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import MisCuentas from './pages/MisCuentas';
import NotificationsScreen from './pages/NotificationsScreen';

export default MyApp = createDrawerNavigator({
    Home: {
        screen: MisCuentas,
    },
    Notifications: {
        screen: NotificationsScreen,
    },
});
