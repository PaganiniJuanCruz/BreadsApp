import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { COLORS } from "../data/colors";
import { signIn, signUp } from "../../app/api.js";

const Register = () => {
    
    const title = "Register",
        message = "Do you have an account?"

        const [email, setEmail] = useState();
        const [password, setPassword] = useState();

    return (
        <KeyboardAvoidingView
            behavior = "heigth"
            style={styles.screen}
        >
            <View style={styles.container}>
                <Text>Log in</Text>
                
                <Text style={styles.title}>{ title }</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                placeholder="Write your email..."
                />
                <br />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                placeholder="Write your password..."
                onChangeText={(text) => setPassword(text)}
                />
                <br />
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={async() =>{{
                        await signIn(email, password)}
                    }}>
                    <br />
                    <Text style={styles.prompButton}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>    
        </KeyboardAvoidingView>
    )
}

export default Register;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontFamily: "OpenSansBold",
        marginBottom: 18,
        textAlign: "center",
        color: COLORS.secondary
    },
    container: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white"
    },
    prompt: {
        alignItems: "center"
    },
    promptMessage: {
        fontSize: 16,
        fontFamily: "OpenSans",
        color: "#ccc"
    },
    prompButton: {
        fontSize: 16,
        fontFamily: "OpenSansBold",
        color: COLORS.secondary,
    },
    button: {
        backgroundColor: COLORS.secondary,
        marginVertical: 20
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    label: {
        fontSize: 16,
        fontFamily: "OpenSansBold",
        color: COLORS.secondary,
    }
})