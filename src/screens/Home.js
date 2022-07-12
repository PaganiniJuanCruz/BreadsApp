import React from "react";
import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import GridItem from "../components/GridItem";
import { CATEGORIES } from "../data/categories";

const Home = ({ navigation }) => {
    return (
        <View>
            <FlatList
                data = {CATEGORIES}
                renderItem = {({ item }) => <GridItem navigation={navigation} item = { item } />}
                keyExtractor = {( item ) => item.id}
                numColumns = {3}
            />
        </View>
    )
}

export default Home;