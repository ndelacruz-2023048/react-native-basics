import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textHome}>Explore</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>Explore Screen </Text>
      </View>
    </View>
  );
}

/*
{
  community.map((community,index)=>(
    <option key={index} value={value.community.id}>{community.name}</option>
  ))
}

*/

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
    fontSize:22,
    fontWeight:400
  }
});
