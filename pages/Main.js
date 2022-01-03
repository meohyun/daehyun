import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import { TouchableOpacity,StyleSheet, Text, View,ScrollView} from 'react-native';

export default function Main({navigation}) {

    
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container01}>
        <Text style ={styles.title}>MBTI 궁합</Text>
      </View>
      <View style={styles.button_container}>
      <TouchableOpacity style = {styles.button01}><Text style={styles.buttonText}>MBTI 궁합보기</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.button01} onPress={()=>{navigation.navigate('List')}}><Text style={styles.buttonText}>MBTI 사전</Text></TouchableOpacity>
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
