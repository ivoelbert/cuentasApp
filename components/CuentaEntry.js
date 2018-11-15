import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import entryStyles from '../styles/cuentaEntryStyles';
import generalStyles from '../styles/generalStyles';

const formatDate = date => {
    let day = ("0" + date.getDate());
    day = day.substring(day.length - 2);
    let month = ("0" + date.getMonth() + 1);
    month = month.substring(month.length - 2, month.length);
    let year = date.getFullYear();

    return `${day}/${month}/${year}`
}

const formatMoney = monto => {
    return '$ ' + (monto / 100).toFixed(2);
}

class CuentaEntry extends React.Component {
    render() {
        return(
            <TouchableHighlight
                style={[entryStyles.touchable, generalStyles.fullWidth]}
                onPress={() => this.props.onTouch(this.props.descripcion)}
                underlayColor='#fafafa'
                activeOpacity={0.5}>
                <View style={entryStyles.container}>
                    <Text style={entryStyles.text}>
                        {formatDate(this.props.fecha)}
                    </Text>
                    <Text style={[entryStyles.text, {color: this.props.monto < 0 ? 'red' : 'green'}]}>
                        {formatMoney(this.props.monto)}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export default CuentaEntry;