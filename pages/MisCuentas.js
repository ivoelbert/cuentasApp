import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import NavHeader from '../components/NavHeader';
import styles from '../styles/containerStyles';
import CuentasScrollView from '../components/CuentasScrollView';
import generalStyles from '../styles/generalStyles';

class MisCuentas extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Mis cuentas',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'https://freeiconshop.com/wp-content/uploads/edd/chat-outline.png'}}
                style={[styles.icon, {tintColor: tintColor}]}
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
            </>
        );
    }
}

export default MisCuentas;