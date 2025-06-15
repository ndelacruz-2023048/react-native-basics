import { ItemCart } from '@/components/ItemCart';
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

type ObjectProductType = {
    id: string;
    name: string;
    price: string;
    image: string; // Assuming image is a URL string
}

const Cart = () => {

    const data = useLocalSearchParams<ObjectProductType>()
    const [cart, setCart] = useState([] as ObjectProductType[])
    useEffect(()=>{
        const { id, name, price, image } = data;
  if (id && name && price && image) {
    const product: ObjectProductType = { id, name, price, image };
    setCart((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      return exists ? prev : [...prev, product];
    });
  }
    },[data])

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#f0f0f0' }}>
        <View style={{ height: '13%', backgroundColor: '#ffffff', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, marginLeft: 15 }}>Cart</Text>
        </View>
        <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemCart name={item.name} image={item.image} id={item.id} price={item.price}/>}
        />
    </View>
  )
}

export default Cart;