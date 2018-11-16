import { StyleSheet } from 'react-native';

const generalStyles = StyleSheet.create({
    fullWidth: {
        width: '100%'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    roundButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        position: 'absolute',
        backgroundColor: '#e8ba3e',
        bottom: 16,
        right: 16,
        elevation: 5
    }
});

export default generalStyles;