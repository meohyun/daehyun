import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View,ScrollView} from 'react-native';

export default function Main({navigation}) {


  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container01}>
        <Text style ={styles.title}>MBTI 궁합</Text>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style = {styles.button01} onPress={()=>{navigation.navigate('List')}}><Text style={styles.buttonText}>시작하기</Text></TouchableOpacity>
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
    borderWidth : 1,
    borderColor : "#fff",
    borderRadius : 10,
    marginTop : 30,
    width : 100,
    height : 50,
  },
  buttonText :{
    marginTop : 12,
    textAlign : "center",
    color : "#fff"
  }
});
