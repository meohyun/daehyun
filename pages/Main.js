import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { Button } from 'react-native';

export default function Main() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container01}>
        <Text style ={styles.title}>MBTI 궁합</Text>
      </View>
      <View style={styles.button_container}>
        <Button style = {styles.button01} title ="시작하기"/>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  title : {
    color : '#fff',
    fontSize : 30,
    fontWeight : "700",
  },
  container01:{
    marginTop : 150,
    justifyContent : "center",
    alignSelf : "center"
  },
  button_container:{
    marginTop : 30,
    justifyContent : "center",
    alignSelf : "center"
  },
  button01 : {
    marginTop : 10,
    width : 100,
  }
});
