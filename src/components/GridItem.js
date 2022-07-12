import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const GridItem = ({ item, navigation }) => {
    return(
        <View style={ styles.gridItem }>
            <TouchableOpacity style={{...styles.container, backgroundColor: item.color}} onPress={() => navigation.navigate('Breads')}>{ item.title }
            </TouchableOpacity>
        </View>
    )
}

export default GridItem;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150
    },

    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 6,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 8,
    }
})