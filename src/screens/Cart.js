import React, { useContext, useState } from "react";
import {FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { AppContext } from "../../app/Provider";
import { deleteItem, getItems } from "../../app/services/cart";
import { createItem } from "../../app/services/orders";

const Cart = () => {
  const [itemSelected, setItemSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useContext(AppContext);

  function clearCart(){
    getItems().then((res) => {
      res.map(r => deleteItem(r.id))
    })
  } 

  const addOrder = () => {
    createItem({ items: state.items, user: state.user, total: addItems() });
    setState({...state, items: []})
    alert("");
    clearCart()
  };

  function addItems() {
    let add = 0;
    state.items.map((p) => (add += parseInt(p.price)));
    return add;
  }

  const onHandlerDelete = () => {
    deleteItem(itemSelected.id);
    setItemSelected({});
    setModalVisible(false);
    getItems().then((res) => {
      setState({ ...state, items: res });
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={state.items}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setItemSelected(item);
                setModalVisible(true);
              }}
            >
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <View sytle={styles.modalLeft}>
        <Modal visible={modalVisible} animationType="slide" transparent="false">
          <View style={styles.modalView}>
            <TouchableOpacity onPress={onHandlerDelete}>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text>Go Back</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        </View>
        <Text style={styles.total} key={"total"}>
          Total: ${addItems()}
        </Text>
        <TouchableOpacity onPress={addOrder} style={styles.button}>
          <Text style={styles.textButton}>Buy it</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  modalView: {
    width: 200,
    height: 100,
    borderRadius: 25,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "pink",
    fontFamily: "OpenSansBold"
  },
  item: {
    paddingBottom: 5,
    marginTop: 2,
    marginBottom: 5,
    textAlign: "center",
  },
  total: {
    paddingBottom: 5,
    marginTop: 2,
    marginBottom: 5,
    textAlign: "center",
  },
    button: {
        backgroundColor: "pink",
        borderRadius: 10,
        paddingVertical: 15,
        width: "20%",
        alignItems:"center",
        justifyContent: "center"
    },
    textButton: {
        alignItems:"center",
        justifyContent: "center",
        fontFamily: "OpenSansBold",
    },
});