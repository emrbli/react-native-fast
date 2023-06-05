import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { colorsDark, theme } from '../styles/color';
import { textVariants } from '../styles/font';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Image
                style={{ width: 200, height: 200 }}
                resizeMode='cover'
                source={{ uri: 'https://shopify.github.io/restyle/img/shopify-logo.svg' }}
            />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.current.background0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.current.textPrimary,
    }
});