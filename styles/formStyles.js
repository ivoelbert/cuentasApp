import { StyleSheet } from 'react-native';

const formStyles = StyleSheet.create({
    switch: {
        flexDirection: 'row',
        width: 250
    },
    switchItem: {
        flex: 1,
        borderColor: '#505050',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchItemFirst: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    switchItemLast: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    input: {
        width: 250,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#505050',
        marginVertical: 20,
    },
    guardarButton: {
        backgroundColor: '#e8ba3e',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80
    }
});

export default formStyles;