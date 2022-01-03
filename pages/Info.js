import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect,useState } from 'react';
import { Pressable,Modal,StyleSheet, Text, View,ScrollView ,Image, TouchableOpacity} from 'react-native';


export default function Info({navigation,route}) {

  // modal
  const [modal01,setmodal01] = useState(false)
  const [modal02,setmodal02] = useState(false)
  const [modal03,setmodal03] = useState(false)
  const [modal04,setmodal04] = useState(false)


  const [list, setlist] = useState({
    "idx":0,
    "name" : "ENFP",
    "image":"./assets/enfp.png",
    "title" : "재기발랄한 활동가, 스파크형",
    "desc" : "따뜻하고 정열적이고 활기가 넘치며 재능이 많고 상상력이 풍부하다.온정적이고 창의적이며 항상 새로운 가능성을 찾고 시도하는 유형이다. 문제 해결에 재빠르고 관심이 있는 일은 무엇이든지 수행해내는 능력과 열성이 있다.다른 사람들에게 관심을 쏟으며 사람들을 잘 다루고 뛰어난 통찰력으로 도움을 준다.반복되는 일상적인 일을 참지 못하고 열성이 나지 않는다. 또한 한 가지 일을 끝내기도 전에 몇 가지 다른 일을 또 벌이는 경향을 가지고 있다. 통찰력과 창의력이 요구되지 않는 일에는 흥미를 느끼지 못하고 열성을 불러일으키지 못한다.",
    "first_func" : "Ne(외향 직관)",
    "secon_func" : "Fi(내향 감정)",
    "third_func" : "Te(외향 사고)",
    "fourth_func" : "Si(내향 감각)",
    "func_desc01" : "자유로운 상상,개방적 사고에 뛰어남",
    "func_desc02" : "내면의 자아를 탐구하고 개개인의 가치와 개성을 중요시함",
    "func_desc03" : "구체적 목적을 가지고 체계적으로 일을 추진하는데 서투름",
    "func_desc04" : "과거의 경험을 통한 안정적인 선택 또는 전통적인 가치를 존중하는데 어려움을 느낌"
})

  useEffect(()=>{
    console.log(route)
    navigation.setOptions({
        title:route.params.name,
        headerStyle: {
            backgroundColor: '#000',
            shadowColor: "#000",
        },
        headerTintColor: "#fff",
    })
    setlist(route.params)
  },[])


  const func_desc_1 = () => {
    setmodal01(true)
  }

  const func_desc_2 = () => {
    setmodal02(true)
  }

  const func_desc_3 = () => {
    setmodal03(true)
  }

  const func_desc_4 = () => {
    setmodal04(true)
  }

  const modalinvisible = () => {
    setmodal01(false)
    setmodal02(false)
    setmodal03(false)
    setmodal04(false)
  }




  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.Titlecontainer}>
        <Text style ={styles.title}>{list.name}</Text>
        <Image style ={styles.MbtiImage}  source={{uri:list.image}}/>
      </View>
      <View style={styles.Desc_container}>
        <Text style ={styles.Desc_title}>
            {list.title}
        </Text>
        <Text style={styles.Desc}>
            {list.desc}
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
      <View style={styles.func_button02}>
         <TouchableOpacity style={styles.button02} onPress={func_desc_1}><Text style={styles.button_text}>{list.first_func}</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button02} onPress={func_desc_2}><Text style={styles.button_text}>{list.secon_func}</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button02} onPress={func_desc_3}><Text style={styles.button_text}>{list.third_func}</Text></TouchableOpacity>
         <TouchableOpacity style={styles.button02} onPress={func_desc_4}><Text style={styles.button_text}>{list.fourth_func}</Text></TouchableOpacity>
      </View>

      <Modal
      style={styles.modal}
      animationType="slide"
      transparent={true}
      visible={modal01}>
        <View style={styles.modal}>
          <View style={styles.modalbox}>
            <Text style={styles.modaltext01}>{list.first_func}</Text>
            <Text style={styles.modaltext02}>{list.func_desc01}</Text>
            <Pressable style={styles.modalbutton} onPress={modalinvisible}>
              <Text style={styles.modalbuttontext}>확인</Text>

            </Pressable>
          </View> 
        </View>

      </Modal>

      <Modal
      style={styles.modal}
      animationType="slide"
      transparent={true}
      visible={modal02}>
        <View style={styles.modal}>
          <View style={styles.modalbox}>
            <Text style={styles.modaltext01}>{list.secon_func}</Text>
            <Text style={styles.modaltext02}>{list.func_desc02}</Text>
            <Pressable style={styles.modalbutton} onPress={modalinvisible}>
              <Text style={styles.modalbuttontext}>확인</Text>

            </Pressable>
          </View> 
        </View>

      </Modal>

      <Modal
      style={styles.modal}
      animationType="slide"
      transparent={true}
      visible={modal03}>
        <View style={styles.modal}>
          <View style={styles.modalbox}>
            <Text style={styles.modaltext01}>{list.third_func}</Text>
            <Text style={styles.modaltext02}>{list.func_desc03}</Text>
            <Pressable style={styles.modalbutton} onPress={modalinvisible}>
              <Text style={styles.modalbuttontext}>확인</Text>

            </Pressable>
          </View> 
        </View>

      </Modal>

      <Modal
      style={styles.modal}
      animationType="slide"
      transparent={true}
      visible={modal04}>
        <View style={styles.modal}>
          <View style={styles.modalbox}>
            <Text style={styles.modaltext01}>{list.fourth_func}</Text>
            <Text style={styles.modaltext02}>{list.func_desc04}</Text>
            <Pressable style={styles.modalbutton} onPress={modalinvisible}>
              <Text style={styles.modalbuttontext}>확인</Text>

            </Pressable>
          </View> 
        </View>

      </Modal>
    </ScrollView>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
  },
  MbtiImage : {
    width : 150,
    height : 150,
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
    marginTop : 30,
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
  func_button02 : {
    marginTop : 10,
    marginBottom : 10,
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
  },
  modal:{
    flex : 1,
    alignItems :"center",
    justifyContent :"center"
  },
  modalbox :{
      backgroundColor :"#fff",
      width : "90%",
      borderRadius :15,
      padding :20,
      alignItems : "center",
      borderColor : "#017CFF",
      borderWidth : 5,
  },
  modaltext01 : {
      marginTop: 30,
      color : "#000",
      fontSize : 30,
      fontWeight :"700"
  },
  modaltext02 :{
      marginTop: 30,
      color : "#000",
      fontSize : 20,
      fontWeight :"700",
      alignSelf : 'center',
      justifyContent :'center'
  },

  modalbutton : {
    marginTop : 30,
    width : 80,
    height : 50,
    borderWidth : 2,
    borderColor :'blue',
    backgroundColor : "white",
    marginLeft : 15,
    borderRadius : 10,
},
  modalbuttontext : {
      color : "#000",
      fontSize : 20,
      fontWeight :"700",
      alignSelf : 'center',
      justifyContent :'center',
      marginTop : 10,
  }


});
