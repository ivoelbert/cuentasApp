import React from 'react';
import { Button, Image, View } from 'react-native';
import styles from '../styles/containerStyles';

class HomeScreen extends React.Component {
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
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Ir a notificaciones"
                />
            </View>
        );
    }
}

export default HomeScreen;