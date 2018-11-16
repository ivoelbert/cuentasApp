import React from 'react';
import { Text, TouchableHighlight, View, ScrollView, TextInput } from 'react-native';
import generalStyles from '../styles/generalStyles';
import formStyles from '../styles/formStyles';
import { Icon } from 'react-native-elements'

const Switch = props => (
    <View style={formStyles.switch}>
        <TouchableHighlight
            style={[
                formStyles.switchItem,
                formStyles.switchItemFirst,
                {backgroundColor: props.selected > 0 ? '#f4f4f4' : '#ce1c1c'}
            ]}
            onPress={() => props.onTouch(-1)}
            underlayColor='#ba1616'
            activeOpacity={0.5}>
            <View>
                <Text style={{paddingHorizontal: 20, paddingVertical: 10, fontSize: 16, color: props.selected > 0 ? '#b2b2b2' : 'white'}}>
                    Pago
                </Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight
            style={[
                formStyles.switchItem,
                formStyles.switchItemLast,
                {backgroundColor: props.selected < 0 ? '#f4f4f4' : '#43bf24'}
            ]}
            onPress={() => props.onTouch(1)}
            underlayColor='#3aaa1e'
            activeOpacity={0.5}>
            <View>
                <Text style={{paddingHorizontal: 20, paddingVertical: 10, fontSize: 16, color: props.selected < 0 ? '#b2b2b2' : 'white'}}>
                    Recibo
                </Text>
            </View>
        </TouchableHighlight>
    </View>
);

const Separator = props => (
    <View style={{width: 300, borderBottomWidth: 0.5, borderBottomColor: '#b2b2b2'}}></View>
);

class AddEntryForm extends React.Component {
    state = {
        selectedSwitch: -1,
        monto: 0,
        descripcion: "",
        text: ""
    }

    selectSwitch = which => {
        this.setState(prevState => ({...prevState, selectedSwitch: which}))
    }

    updateMonto = monto => {
        this.setState(prevState => ({...prevState, monto: monto}))
    }

    updateDescripcion = descr => {
        this.setState(prevState => ({...prevState, descripcion: descr}))
    }

    saveData = () => {
        
        this.setState(prevState => ({...prevState, text: prevState.monto + prevState.descripcion}))
    }

    render() {
        return(
            <ScrollView style={[generalStyles.fullWidth]}>
                <View style={[generalStyles.alignCenter, generalStyles.fullWidth, {paddingTop: 30}]}>
                    <Switch selected={this.state.selectedSwitch} onTouch={this.selectSwitch}/>
                    <View style={[formStyles.input, generalStyles.alignCenter, {marginBottom: 30}]}>
                        <Text style={{paddingHorizontal: 5, fontSize: 18}}>$</Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder='Monto'
                            keyboardType='numeric'
                            autoFocus={true}
                            maxLength={10}
                            fontSize={18}
                            onChangeText={(text) => this.updateMonto(+text)}
                        />
                    </View>
                    <Separator />
                    <View style={[formStyles.input, {padding: 5, marginTop: 30}]}>
                        <TextInput
                            placeholder='Descripcion'
                            maxLength={150}
                            fontSize={16}
                            multiline={true}
                            numberOfLines={1}
                            onChangeText={(text) => this.updateDescripcion(text)}
                        />
                    </View>
                    <TouchableHighlight
                        style={[formStyles.guardarButton, {marginVertical: 20, borderRadius: 5, borderColor: '#cea331', borderWidth: 1}]}
                        onPress={this.saveData}
                        underlayColor='#dbaf39'
                        activeOpacity={0.5}>
                        <Icon
                            name='add-circle-outline'
                            size={50}
                        />
                    </TouchableHighlight>
                    <Text>
                        {this.state.text}
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

export default AddEntryForm;