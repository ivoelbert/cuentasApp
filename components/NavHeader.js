import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import headerStyles from '../styles/headerStyles';
import { Icon } from 'react-native-elements'

class NavHeader extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <TouchableHighlight
                    style={headerStyles.iconContainer}
                    onPress={this.props.toggler}
                    underlayColor='#d8ad38'
                    activeOpacity={0.1}>
                    <Icon
                        name='menu'
                        size={24}
                    />
                </TouchableHighlight>

                <Text style={headerStyles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

export default NavHeader;