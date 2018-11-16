import React from 'react';
import { ScrollView, Button, View, Text, Modal } from 'react-native';
import CuentaEntry from './CuentaEntry';
import generalStyles from '../styles/generalStyles';
import modalStyles from '../styles/modalStyles';
import { getData } from '../api/storage';

class CuentasScrollView extends React.Component {
    state = {
        modalVisible: false,
        modalText: "",
        entries: []
    }

    componentDidMount = () => {
        this.getEntries();
    }

    getEntries = () => {
        getData().then(obj => {
            if(obj.error) {
                this.toggleModalVisible(obj.error);
            } else {
                const sortedOBj = obj.sort( (a, b) => new Date(b.val.fecha) - new Date(a.val.fecha) );
                this.setState(prevState => ({...prevState, entries: sortedOBj.map(this.componentFromEntry)}) );
            }
        });
    };

    componentFromEntry = entry => (
        <CuentaEntry
            key={entry.key}
            monto={entry.val.monto}
            fecha={new Date(entry.val.fecha)}
            descripcion={entry.val.descripcion}
            onTouch={this.toggleModalVisible}
        />
    );
    
    toggleModalVisible = text => {
        this.setState(prevState => ({...prevState, modalVisible: !prevState.modalVisible, modalText: text || ''}));
    };

    render() {
        return(
            <>
                <ScrollView style={generalStyles.fullWidth}>
                    {this.state.entries}
                </ScrollView>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={this.state.modalVisible}
                    onRequestClose={this.toggleModalVisible}>
                    <View style={modalStyles.modalBackground}>
                        <View style={modalStyles.modal}>
                            <Text style={{paddingVertical: 20}}>{this.state.modalText}</Text>
                            <Button
                                onPress={this.toggleModalVisible}
                                title="OK!"
                                color="#e8ba3e"
                            />    
                        </View>
                    </View>
                </Modal>
            </>
        )
    }
}

export default CuentasScrollView;