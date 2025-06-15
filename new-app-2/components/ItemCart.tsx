import React from 'react'
import { Image, Text, View } from 'react-native'
type ObjectProductType = {
    id: string;
    name: string;
    price: string;
    image: string; // Assuming image is a URL string
}

export const ItemCart = ({id, name, price, image}:ObjectProductType) => {
  return (
    /**creame la vista de un item de un carrito de compras solo tengo el dato de image,descripcion, nombre y precio */
    <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
      <Image
        source={{ uri: image }} // Replace with actual image URL
        style={{ width: 50, height: 50, borderRadius: 5 }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Product Name:{name}</Text>
        <Text style={{ color: '#666' }}>Product Description</Text>
        <Text style={{ color: '#000', fontWeight: 'bold' }}>{price}</Text>
      </View>
    </View>
    
  )
}



