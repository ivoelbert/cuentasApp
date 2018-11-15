import React from 'react';
import { ScrollView, Button, View, Text, Modal } from 'react-native';
import CuentaEntry from './CuentaEntry';
import generalStyles from '../styles/generalStyles';
import modalStyles from '../styles/modalStyles';

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const formatMoney = monto => {
    return '$ ' + (monto / 100).toFixed(2);
}

const fechas = [...new Array(1000)].map( (v, i) => randomDate(new Date(2012, 0, 1), new Date()) );

const montos = [...new Array(1000)].map( (v, i) => (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 200000) + 1000 );

class CuentasScrollView extends React.Component {
    state = {
        modalVisible: false,
        modalText: "",
    }
    
    toggleModalVisible = text => {
        this.setState(prevState => ({...prevState, modalVisible: !prevState.modalVisible, modalText: text || ''}));
    }

    getEntries = mockNumber => {
        return [...new Array(mockNumber)].map( (v, i) => (
            <CuentaEntry
                key={i}
                monto={montos[i]}
                fecha={fechas[i]}
                descripcion={montos[i] < 0 ? `gastaste ${formatMoney(-montos[i])} por boludo` : `ganaste ${formatMoney(montos[i])} por capo`}
                onTouch={this.toggleModalVisible}
            />
        ));
    }

    render() {
        return(
            <>
                <ScrollView style={generalStyles.fullWidth}>
                    {this.getEntries(20)}
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