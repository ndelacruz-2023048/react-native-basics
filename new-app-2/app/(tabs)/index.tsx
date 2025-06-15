import { Image } from 'expo-image';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CardProduct } from '@/components/CardProduct';

export default function HomeScreen() {

  const products = [
    {
      id: "1",
      name: 'Product 1',
      image: 'https://5aldia.cl/wp-content/uploads/2018/03/zanahoria-668x321.jpg',
      price: '$10.00',
    },
    {
      id: "2",
      name: 'Product 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVC8pPH1Y3TWx7926N06lFwWqXDW8WKsAKQ&s',
      price: '$20.00',
    },
    {
      id: "3",
      name: 'Product 3',
      image: 'https://walmartgt.vtexassets.com/arquivos/ids/482192-800-450?v=638423989815670000&width=800&height=450&aspect=true',
      price: '$30.00',
    },
  ]

  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Store</Text>
          </View>
          <View style={styles.body}>
              <FlatList
                data={products}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                  <CardProduct id={item.id}  name={item.name} price={item.price} image={item.image} data={item}/>
                )}
              />
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-between"
  },
  header:{
    height:"13%",
    backgroundColor:"#ffffff",
    justifyContent:"center",
  },
  headerTitle:{
    fontSize:30,
    marginLeft:15
  },
  body:{
    height:"85%",
    gap:15,
    alignItems: 'center',
  }
});
