import React from "react";
import { View, StyleSheet } from "react-native";
import { BREADS } from "../data/breads";
import { useContext } from "react";
import { AppContext } from "../../app/Provider";
import { TouchableOpacity } from "react-native-gesture-handler";

const Details = ({ navigation, route }) => {
    const [state, setState] = useContext(AppContext);

    const bread = route.params.bread;
    return (
        <View style={styles.container}>
            <p>{bread.title}</p>
            <p>{bread.description}</p>
            <p>{bread.weight}</p>
            <p>{bread.price}</p>
            <TouchableOpacity onPress={() => setState(...state, {name:bread.title, price:bread.price, weight:bread.weight})}>Add to Cart</TouchableOpacity>
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