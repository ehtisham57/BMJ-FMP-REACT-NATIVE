import { View, Text,Image ,StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from "../../../assets/images/logo.jpg"

import CommonInput from "../../components/commonInput/CommonInput"
import CustomButton from '../../components/commonbutton/CustomButton'


export default function Login({navigation}) {

   
    const [password , setpassword] = useState("")
    const [email , setemail] = useState("")

    //////
    const LoginForm = ()=>{
        alert("form has been Completed")
        navigation.navigate("TabsNAvigation")
    }

    const gotosigup =()=>{
        navigation.navigate("Signup")
    }

  return (
  <ScrollView>
  <View style={Style.root}>
    <View style={Style.logoroot}>
        <Image source={Logo} style={Style.logo}/>
        </View>

        <View style={Style.inputroot}>
         <CommonInput placeholder="email" value={email} setValue={setemail} />
         <CommonInput placeholder="password" value={password} setValue={setpassword} secureTextEntry={true} />
         <CustomButton text="Login" onPress={LoginForm}/>
         <Text onPress={gotosigup} style={Style.link}>Don't have an Account ?</Text>
         </View>
    </View>
    </ScrollView>
   

  )
}


const Style = StyleSheet.create({
    root:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        flex:1, 
        flexDirection:"column",
    },
    logoroot:{
        height:"50%",
        width:"100%",
        alignItems:"center",
        display:"flex"

    },
    logo:{
        width:"70%",
        height:150,
        borderRadius:20,
        paddingTop:50,
        marginVertical:50
    },
    link:{
        color :"white",
        fontSize:15,
        fontWeight: "bold"
    },
    inputroot:{
        width:"100%",
        height:"60%",
        paddingBottom:70,
        paddingTop:100,
        backgroundColor:"#000",
        paddingBottom:150,
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:100,
        
    }
})