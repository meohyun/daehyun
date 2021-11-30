import React from 'react'
import {StyleSheet,Image,Text,View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function mbti_list({content,navigation}){
    return(
        <TouchableOpacity style={styles.list} onPress={()=>{navigation.navigate('Info',content)}}>
            <Image style={styles.image} source={{uri:content.image}}></Image>
            <View style={styles.text}>
                <Text style ={styles.Title}>{content.name}</Text>
                <Text style ={styles.Title}>{content.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    list:{
        flex : 1,
        flexDirection : "row",
        margin : 10,
        color : "#fff",
        borderBottomWidth : 1,
        borderColor : "#FFF",
        paddingBottom:10,
        marginTop : 10,
  
        
    },
    image : {
        flex :1,
        padding : 10,
        height : 150,
        width : 30,
        borderRadius : 10,
    },
    text : {
        flex : 2,
        color : "#fff"

    },
    Title : {
        fontSize : 20,
        textAlign : "center",
        justifyContent : "center",
        color : "#fff"
    }


})
   