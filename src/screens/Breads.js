import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import { getItems } from "../../app/services/items";

const Breads = ({ navigation }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((res) => {
      setItems(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id})}>
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id }
        />
      </View>        
    </>
  );
};

export default Breads;

const styles = StyleSheet.create({
    item: {
      paddingBottom: 5,
      marginTop: 2,
      marginBottom: 5,
      textAlign: "center",
    },
    container: {
        margin: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
  });