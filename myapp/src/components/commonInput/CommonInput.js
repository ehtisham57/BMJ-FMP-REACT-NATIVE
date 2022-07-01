import { View, Text, TextInput ,StyleSheet } from 'react-native'
import React from 'react'

export default function  ({value , setValue ,placeholder ,secureTextEntry}) {
  return (
    <View style={Style.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder} 
      Style={Style.input}
      secureTextEntry={secureTextEntry} 
      />
    </View>
  )
}


const Style = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:"80%",
        borderColor:"e8e8e8",
        borderWidth:1,
        borderRadius:50,
        paddingHorizontal:15,
        marginVertical : 10
    },
    input:{
      fontSize:20,
      color:"black",

    }
})