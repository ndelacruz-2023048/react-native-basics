import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textHome}>Home</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>Home Screen</Text>
      </View>
    </View>
  );
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
