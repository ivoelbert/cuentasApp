import React from 'react';
import { Button, Image, View } from 'react-native';
import styles from '../styles/containerStyles';

class NotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notificaciones',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'https://static.thenounproject.com/png/24628-200.png'}}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
  
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Ir a mis cuentas"
                />
            </View>
        );
    }
}

export default NotificationsScreen;