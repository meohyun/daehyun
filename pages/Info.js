import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView ,Image, TouchableOpacity} from 'react-native';
import enfp from '../assets/enfp.png'

export default function Info() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.Titlecontainer}>
        <Text style ={styles.title}>ENFP</Text>
        <Image style ={styles.MbtiImage } source={enfp}></Image>
      </View>
      <View style={styles.Desc_container}>
        <Text style ={styles.Desc_title}>
            재기발랄한 활동가, 스파크형
        </Text>
        <Text style={styles.Desc}>
            따뜻하고 정열적이고 활기가 넘치며 재능이 많고 상상력이 풍부하다.
            온정적이고 창의적이며 항상 새로운 가능성을 찾고 시도하는 유형이다. 
            문제 해결에 재빠르고 관심이 있는 일은 무엇이든지 수행해내는 능력과 열성이 있다.
            다른 사람들에게 관심을 쏟으며 사람들을 잘 다루고 뛰어난 통찰력으로 도움을 준다.
            반복되는 일상적인 일을 참지 못하고 열성이 나지 않는다. 
            또한 한 가지 일을 끝내기도 전에 몇 가지 다른 일을 또 벌이는 경향을 가지고 있다. 통찰력과 창의력이 요구되지 않는 일에는 흥미를 느끼지 못하고 열성을 불러일으키지 못한다.
        </Text>
      </View>
      <View style={styles.func_container}>
          <Text style={styles.func_title}>주요 기능</Text>
      </View>
      <View style={styles.func_button01}>
         <TouchableOpacity style={styles.button}><Text style={styles.button_text}>주 기능</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button}><Text style={styles.button_text}>부 기능</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button}><Text style={styles.button_text}>3차 기능</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button}><Text style={styles.button_text}>열등 기능</Text></TouchableOpacity>
      </View>
      <View style={styles.func_button01}>
         <TouchableOpacity style={styles.button02}><Text style={styles.button_text}>Ne(외향 직관)</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button02}><Text style={styles.button_text}>Fi(내향 감정)</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button02}><Text style={styles.button_text}>Te(외향 사고)</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button02}><Text style={styles.button_text}>Si(내향 감각)</Text></TouchableOpacity>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
  },
  MbtiImage : {
    width : 300,
    height : 300,
    justifyContent : "center",
    alignContent : "center"
  },
  title:{
    justifyContent : "center",
    marginBottom : 30,
    alignSelf: "center",
    fontSize : 40,
    fontWeight :"700",
    color : "#000"
  },
  Titlecontainer:{
    flex : 2,
    marginTop : 100,
    justifyContent : "center",
    alignSelf : "center"
  },
  Desc_container:{
      padding : 15,
      flex : 2,
      marginTop : 50,
      justifyContent : "center",
      alignContent: 'center',
  },
  Desc_title : {
      fontSize : 25,
      fontWeight : "700",
  },
  Desc :{
      marginTop :10
  },
  func_container :{
    padding : 10,
    flex : 2,
    marginTop: 20,
  },
  func_title : {
      margin : 10,
      fontSize :25,
      fontWeight :"700",
  },
  func_button01 : {
      marginTop : 15,
      marginBottom : 15,
      flexDirection : "row",
      justifyContent : "center",
      alignContent : "center"
  },
  button : {
      width : 80,
      height : 50,
      backgroundColor : "deeppink",
      marginLeft : 15,
      borderRadius : 10,
  },
  button02 : {
    width : 80,
    height : 70,
    backgroundColor : "#000",
    marginLeft : 15,
    borderRadius : 10,
    },
  button_text :{
    textAlign :"center",
    color : "#fff",
    margin : 10,
  }
});
