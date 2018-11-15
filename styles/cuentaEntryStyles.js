import { StyleSheet } from 'react-native';

const entryStyles = StyleSheet.create({
    container: {
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: '#efefef',
        paddingHorizontal: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    },
    textRed: {
        color: 'red'
    },
    textGreen: {
        color: 'green'
    }
});

export default entryStyles;