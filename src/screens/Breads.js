import React from "react";
import { View, Text } from "react-native";
import { BREADS } from '../data/breads';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Breads = ({ navigation }) => {
    return (
        <View>
            <FlatList
                data={ BREADS }
                renderItem={({ item }) => <TouchableOpacity onPress={
                    () => navigation.navigate("Details", { id: item.id }) 
                } >{ item.name } </TouchableOpacity>}
            />
        </View>
    )
}

export default Breads;