import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import NavHeader from '../components/NavHeader';
import styles from '../styles/containerStyles';
import CuentasScrollView from '../components/CuentasScrollView';
import generalStyles from '../styles/generalStyles';
import { Icon } from 'react-native-elements';
import FloatingButton from '../components/FloatingButton';

class MisCuentas extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Mis cuentas',
        drawerIcon: ({ tintColor }) => (
            <Icon
                name='attach-money'
                size={24}
            />
        ),
    };
  
    render() {
        return (
            <>
                <NavHeader toggler={() => this.props.navigation.toggleDrawer()} text="Mis cuentas"/>
                <View style={[styles.container, generalStyles.fullWidth]}>
                    <CuentasScrollView />
                </View>
                <FloatingButton icon='add' onTouch={() => this.props.navigation.navigate("AddEntry")} />
            </>
        );
    }
}

export default MisCuentas;