import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import MisCuentas from './pages/MisCuentas';
import AddEntryScreen from './pages/AddEntryScreen';

export default MyApp = createDrawerNavigator({
    Home: {
        screen: MisCuentas,
    },
    Notifications: {
        screen: AddEntryScreen,
    },
});
