import { StyleSheet } from 'react-native';

const modalStyles = StyleSheet.create({
    modalBackground: {
        backgroundColor: '#00000070',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        paddingHorizontal: 20,
        paddingVertical: 50,
        borderRadius: 3
    }
});

export default modalStyles;