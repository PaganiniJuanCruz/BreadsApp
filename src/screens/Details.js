import React from "react";
import { View, StyleSheet } from "react-native";
import { BREADS } from "../data/breads";

const Details = ({ navigation, route }) => {
    const pan = BREADS.find( obj => obj.id === route.params.id) 
    return (
        <View style={styles.container}>
            <View>Details from bread: {route.params.id}</View>
            <p>{pan.name}</p>
            <p>{pan.description}</p>
            <p>{pan.weight}</p>
            <p>{pan.price}</p>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})