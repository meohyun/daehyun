import React from 'react'
import { useState,useEffect } from 'react'
import {View,StyleSheet,ScrollView} from 'react-native'
import Mbti from '../components/mbti_list'
import data from '../data.json'

export default function List({navigation,route}){


  const [state,setState] = useState([])

  useEffect(()=>{

    setTimeout(()=>{

      let mbti_data = data.mbti;
      setState(mbti_data)

    },1000)
    
  })

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listcontainer}>
                {state.map((content,i)=>{
                    return(<Mbti content={content} key={i} navigation={navigation}/>)
                })}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        color : "#fff"
    },
    listcontainer :{
        marginTop:10,
        marginLeft : 10,
    }

})