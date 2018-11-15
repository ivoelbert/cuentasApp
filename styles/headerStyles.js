import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 8,
        position: 'relative',
        backgroundColor: '#e8ba3e',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#d8ad38',
    },
    text: {
        fontSize: 18
    }
});

export default headerStyles;