import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SettingsScreen (){
  return (
     <View style={styles.container}>
        <View style={styles.title}>
        <Text style={styles.textHome}>Settings</Text>
        </View>
        <View style={styles.description}>
        <Text style={styles.textDescription}>Settings Screen</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:2,
  },

  title:{
    justifyContent:"center",
    height:"15%"
  },
  textHome:{
    fontWeight:"bold",
    fontSize:30,
    paddingLeft:15
  },

  description:{
    height:"85%",
    justifyContent:"center",
    alignItems:"center"
  },

  textDescription:{
    fontSize:20,
    fontWeight:400
  }

});


