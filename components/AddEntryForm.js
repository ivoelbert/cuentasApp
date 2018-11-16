import React from 'react';
import { Text, TouchableHighlight, View, ScrollView, TextInput } from 'react-native';
import generalStyles from '../styles/generalStyles';
import formStyles from '../styles/formStyles';
import { Icon } from 'react-native-elements';
import { storeData } from '../api/storage';

const SwitchItem = props => (
    <TouchableHighlight
        style={[
            formStyles.switchItem,
            props.style,
            {backgroundColor: props.selected ? '#f4f4f4' : props.color.main}
        ]}
        onPress={props.onTouch}
        underlayColor={props.color.secondary}
        activeOpacity={0.5}>
        <View>
            <Text style={{paddingHorizontal: 20, paddingVertical: 10, fontSize: 16, color: props.selected > 0 ? '#b2b2b2' : 'white'}}>
                {props.children}
            </Text>
        </View>
    </TouchableHighlight>
);

const Switch = props => (
    <View style={formStyles.switch}>
        <SwitchItem
            selected={props.selected > 0}
            color={{main: '#ce1c1c', secondary: '#ba1616'}}
            onTouch={() => props.onTouch(-1)}
            style={formStyles.switchItemFirst}
        >
            Pago
        </SwitchItem>

        <SwitchItem
            selected={props.selected < 0}
            color={{main: '#43bf24', secondary: '#3aaa1e'}}
            onTouch={() => props.onTouch(1)}
            style={formStyles.switchItemLast}
        >
            Recibo
        </SwitchItem>
    </View>
);

const Separator = props => (
    <View style={{width: 300, borderBottomWidth: 0.5, borderBottomColor: '#b2b2b2'}}></View>
);

class AddEntryForm extends React.Component {
    state = {
        selectedSwitch: -1,
        monto: 0,
        descripcion: ""
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
        const fecha = new Date();
        if(this.state.monto > 0 && this.state.descripcion != "") {
            storeData(fecha, {monto: this.state.selectedSwitch * this.state.monto, fecha: fecha, descripcion: this.state.descripcion}).then(obj => {
                this.props.onSubmit();
            });
        }
    }

    textToCents = text => Math.round(parseFloat(text) * 100);

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
                            onChangeText={text => this.updateMonto(this.textToCents(text))}
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
                            name='add'
                            size={50}
                        />
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}

export default AddEntryForm;