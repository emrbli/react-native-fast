import { Alert, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './Card.style'
import { SvgUri } from 'react-native-svg';


interface CardProps {
    title: string
    label: string
    msg?: string
}

const Card: React.FC<CardProps> = ({ title, label, msg = "You have liked." }: CardProps): JSX.Element => {
    return (
        <View style={styles.card}>
            <Text style={styles.card_title}>{title}</Text>
            <Text style={styles.card_subTitle}>{label}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    resizeMode='cover'
                    source={{ uri: 'https://avif.io/images/butterfly.avif' }}
                />

                <SvgUri
                    style={{ width: 100, height: 100 }}
                    uri="https://shopify.github.io/restyle/img/shopify-logo.svg"
                />
            </View>
            {/* <Button title='Button' onPress={() => Alert.alert('Simple Button pressed')} /> */}
            <TouchableOpacity style={styles.card_button_container} onPress={() => Alert.alert(msg)}>
                <Text style={styles.card_button_text}>I Liked</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;