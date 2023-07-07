import { StyleSheet, Image, Text, View, Button, FlatList, TouchableOpacity, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colorsDark, theme } from '../styles/color';
import { textVariants } from '../styles/font';
import Card from '../components/Card';

interface ICafe {
    id: number,
    name: string,
    isFavorites: boolean
}


const data: ICafe[] = [
    { id: 0, name: 'Alias', isFavorites: false },
    { id: 1, name: 'Basdq', isFavorites: true },
    { id: 2, name: 'Cas1', isFavorites: false },
    { id: 3, name: 'Isao2', isFavorites: true },
    { id: 4, name: 'Uasj1', isFavorites: false },
    { id: 5, name: 'SIA0', isFavorites: true },
]




const Home = () => {
    const [showFavorites, setShowFavorites] = useState(false);
    const [cafeList, setCafeList] = useState<ICafe[] | any>(data);
    useEffect(() => console.log('list updated'), [cafeList])

    function onFavoritesChange(isFav: boolean) {
        setShowFavorites(isFav)
        isFav ? setCafeList(data.filter(data => data.isFavorites)) : setCafeList(data);
    }

    return (
        <View style={{ gap: 10 }}>
            <Switch value={showFavorites} onValueChange={(v) => onFavoritesChange(v)} />
            <Button onPress={() => console.log(showFavorites)} title='show' />
            <FlatList data={cafeList} renderItem={({ item }) => <Text style={{ color: 'white', fontSize: 23, padding: 3 }}>{item.name}</Text>} />
            {showFavorites && <HelloWorld/>}
        </View>
    )
}


const HelloWorld = () => {

    useEffect(() => {
        console.log("HelloWorld");


        return () => {
            console.log("I'm going..");
        };
    }, []);

    return (
        <View>
            <Text style={{color:'green', fontSize: 23, padding: 3}}>Hello World!</Text>
        </View>
    )

}

export default Home;