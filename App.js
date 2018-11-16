import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import MisCuentas from './pages/MisCuentas';
import AddEntryScreen from './pages/AddEntryScreen';
import { cleanAll } from './api/storage'

export default MyApp = createDrawerNavigator({
    Cuentas: {
        screen: MisCuentas,
    },
    AddEntry: {
        screen: AddEntryScreen,
    },
});
