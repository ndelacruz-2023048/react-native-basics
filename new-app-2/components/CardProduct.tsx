import { useRouter } from 'expo-router';
import React from 'react'
import { Button, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'

type CardProductProps = {
    name: string;
    price: string;
    image: string; // You can specify a more specific type if needed, e.g., ImageSourcePropType
    data:ObjectProductType; // Assuming data is an object with product details
    id:string
}

type ObjectProductType = {
    id: string;
    name: string;
    price: string;
    image: string | string[]; // Assuming image is a URL string
}

export const CardProduct = ({id,name,price,image,data}:CardProductProps) => {

  const router = useRouter()
    
  const handlePressButton = ()=>{
    console.log("Product data:", data);
    // Here you can navigate to the product detail screen or perform any other action
    // For example, if using React Navigation:
    // navigation.navigate('ProductDetail', { id: data.id });
    router.push({pathname:'/productDetail/[id]',params:data})
  }

  return (
    <View style={styles.container}>
        <View style={styles.containerText}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{price}</Text>
            <Button title='View' onPress={handlePressButton}/>
        </View>
        <Image style={styles.image} source={{uri:image}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginBottom: 20,
        borderRadius: 10,
        width: '90%',
        gap: 20,
        height:"auto"
    },
    containerText:{
        gap: 2,
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },

    button:{
        backgroundColor: '#cbcbcb',
    }
})
