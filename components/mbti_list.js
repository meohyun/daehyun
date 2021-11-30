import React from 'react'
import {StyleSheet,Image,Text,View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function mbti_list({content,navigation}){
    return(
        <TouchableOpacity style={styles.list} onPress={()=>{navigation.navigate('Info',content)}}>
            <Image style={styles.image} source={{uri:content.image}}></Image>
            <View style={styles.text}>
                <Text style ={styles.Title}>{content.name}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    list:{
        flex : 1,
        color : "#fff"
    },
    image : {
        flex :1,
        padding : 10,
        height : 70,
        width : 70,
    },
    text : {
        flex : 2,
        color : "#fff"
    },
    Title : {
        fontSize : 20,
        color: "#000",
        textAlign : "center"
    }


})
   