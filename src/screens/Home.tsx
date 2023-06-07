import { StyleSheet, Image, Text, View, Button, FlatList, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { colorsDark, theme } from '../styles/color';
import { textVariants } from '../styles/font';
import Card from '../components/Card';

const Home = () => {
    return (
        <View style={{ gap: 10 }}>
            <Card title="Eddard Stark" label="Winter is coming..." />
            <Card title="Eddard Stark" label="Winter is coming..." msg="Eddard" />
        </View>
    )
}

export default Home;