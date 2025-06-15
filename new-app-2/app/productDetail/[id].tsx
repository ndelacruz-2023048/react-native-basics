import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

type ObjectProductType = {
    id: string;
    name: string;
    price: string;
    image: string; // Assuming image is a URL string
}

const ProductDetail = () => {
const {id,name,price,image} = useLocalSearchParams<ObjectProductType>()
    const router = useRouter()
    const product: ObjectProductType = {
        id: id,
        name: name,
        price: price,
        image: image  // Default image if none provided
    }

  const handlePressButton = ({id, name, price, image}:ObjectProductType) => {
    router.push({ pathname: '/cart' as const, params: {
    id,
    name,
    price,
    image,
  },});
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={{ uri: image}} style={styles.productImage} />
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
        <Text style={styles.label}>Price:</Text>
        <Text style={styles.value}>{price}</Text>
      </View>
      <Button title='add to cart' onPress={()=>handlePressButton(product)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: '#ffffff',
    },
    header: {
        height: '13%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    headerTitle: {
        fontSize: 30,
        marginLeft: 15,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
    },
    body: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    productImage: {
        width: 220,
        height: 220,
        borderRadius: 16,
        marginBottom: 24,
        backgroundColor: '#ffffff',
    },
    label: {
        fontSize: 16,
        color: '#888',
        marginBottom: 2,
        fontWeight: '600',
    },
    value: {
        fontSize: 20,
        color: '#222',
        marginBottom: 14,
        fontWeight: '500',
    },
});

export default ProductDetail;