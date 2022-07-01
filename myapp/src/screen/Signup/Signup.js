import { View, Text,Image ,StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from "../../../assets/images/logo.jpg"

import axios from 'axios'

import CommonInput from "../../components/commonInput/CommonInput"
import CustomButton from '../../components/commonbutton/CustomButton'


export default function Login({navigation}) {

   
    const [password , setpassword] = useState("")
    const [email , setemail] = useState("")
    const [name , setname] = useState("")

    //////
    const SingupForm =async (e)=>{
    //   e.preventDefault() 

  
    // try{
    //     if(!name || !email || !password){
    //         alert("required Fielld are Miissing")
    //       }
    
    //       else{
    //         await axios.post('http://localhost:5000/register')
    //         .then((res) => {
    //           alert("Signup SuccesFully")
    //           navigation.navigate("Login")
    //         })
    //         .catch((err) => {
    //           console.log(err);  
    //         })
    //       }
    // }
    // catch{
    //     err =>{
    //         console.log(err);
    //     }
    // }


    alert("you are SuccessFully SIgn Up ")
    navigation.navigate("Login")
            
    }

    const gotologin =()=>{
        navigation.navigate("Login")
    }

  return (
  
    <ScrollView>
    <View style={Style.root}>
    <View style={Style.logoroot}>
        <Image source={Logo} style={Style.logo}/>
        </View>

        <View style={Style.inputroot}>
        <CommonInput placeholder="username" value={name} setValue={setname} />
         <CommonInput placeholder="email" value={email} setValue={setemail} />
         <CommonInput placeholder="password" value={password} setValue={setpassword} secureTextEntry={true} />
         <CustomButton text="Signup" onPress={SingupForm}/>
         <Text onPress={gotologin} style={Style.link}>Don't have an Account ?</Text>
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