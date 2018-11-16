import React from 'react';
import { Button, Image, View, ScrollView } from 'react-native';
import NavHeader from '../components/NavHeader';
import styles from '../styles/containerStyles';
import generalStyles from '../styles/generalStyles';
import { Icon } from 'react-native-elements';
import AddEntryForm from '../components/AddEntryForm';

class AddEntryScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Agregar entrada',
        drawerIcon: ({ tintColor }) => (
            <Icon
                name='add-circle-outline'
                size={24}
            />
        ),
    };
  
    render() {
        return (
            <>
                <NavHeader toggler={() => this.props.navigation.toggleDrawer()} text="Agregar entrada"/>
                <View style={[styles.container, generalStyles.fullWidth]}>
                    <AddEntryForm />
                </View>
            </>
        );
    }
}

export default AddEntryScreen;