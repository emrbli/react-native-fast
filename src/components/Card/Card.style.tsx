
import { StyleSheet } from 'react-native'
import { theme } from '../../styles/color';

export default StyleSheet.create({
    card: {
        backgroundColor: theme.current.background2,
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    card_title: {
        color: theme.current.textPrimary,
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    card_subTitle: {
        color: theme.current.textPrimary,
        padding: 10,
    },
    card_button_container: {
        backgroundColor: theme.current.accentActive,
        padding: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        alignItems: 'center',
    },
    card_button_text: {
        color: theme.current.textPrimary,

    }

});