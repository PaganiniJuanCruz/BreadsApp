import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import GridItem from '../components/GridItem'
import { getItems } from '../../app/services/categories'

const Home = ({ navigation }) => {
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
      renderItem={({item}) => <GridItem item={item} navigation={navigation}/>}
      keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
    </>
    )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},
})

