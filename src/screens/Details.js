import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import { getItemById } from '../../app/services/items'
import { createItem, getItems } from '../../app/services/cart'
import { AppContext } from '../../app/Provider'

const Details = ({ route }) => {
  const [items, setItems] = useState([]);
  const [state, setState] = useContext(AppContext);
  useEffect(() => {
    getItemById(route.params.id).then((res) => {
      setItems(res);
    });
  }, []);

  const addToCart = () => {
    createItem(items);
    getItems().then((res) => {
      const obj = res;
      console.log(obj);
      setState({...state, items: obj})
    }) 
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.textCart}>
        {items.name}
      </Text>
      <Text style={styles.textCart}>
        ${items.price}
      </Text>
      <TouchableOpacity style={styles.button} onPress={addToCart}><Text style={styles.textButton}>Add To Cart</Text></TouchableOpacity>
    </View>
    </>
  )
}


export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "pink",
        borderRadius: 10,
        paddingVertical: 15,
        width: "20%",
        alignItems:"center",
    },
    textButton: {
        fontFamily: "OpenSansBold",
    },
    textCart: {
        margin: 30,
        fontFamily: "OpenSansBold",
    }
})