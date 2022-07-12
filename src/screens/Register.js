import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Register = () => {
    return (
        <View>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.btn} onPress={() => alert("Hacer cosas")}><Text style={styles.white}>Register</Text></TouchableOpacity>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    btn: {
        backgroundColor:"black",
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    white: {
        color: "white",
    }
})