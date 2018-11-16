import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import generalStyles from '../styles/generalStyles';
import { Icon } from 'react-native-elements'

const FloatingButton = props => (
    <TouchableHighlight
        style={[generalStyles.roundButton, generalStyles.justifyCenter, generalStyles.alignCenter]}
        onPress={props.onTouch}
        underlayColor='#d8ad38'
        activeOpacity={0.1}>
        <View>
            <Icon
                name={props.icon}
                size={32}
            />
        </View>
    </TouchableHighlight>
)

export default FloatingButton;