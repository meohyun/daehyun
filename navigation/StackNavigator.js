import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Info from '../pages/Info'
import Main from '../pages/Main'
import List from '../pages/List'

const Stack = createStackNavigator();

const StackNavigator = () =>{

    return(

        <Stack.Navigator
            screenOptions= {{
                headerStyle :{
                    backgroundColor : "white",
                    borderBottomColor : "white",
                    shadowColor : "white",
                    height :100
                },

                headerTitleAlign : "left",
                headerTintColor : "#000",
                headerBackTitleVisible: false
            }}
        >   

            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Info" component={Info}/>
            <Stack.Screen name="List" component={List}/>

        </Stack.Navigator>
    )
}

export default StackNavigator;