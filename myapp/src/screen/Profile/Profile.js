import { View, Text ,Image ,StyleSheet,ScrollView ,TouchableOpacity } from 'react-native'
import React from 'react'
import Login from '../Login/Login'



export default function Profile({navigation}) {

    const Logout = ()=>{
      navigation.navigate("Home")
      alert("The Function added soon")
    }


  return (
    <ScrollView>
      <View style={Style.profileimage}>
        <Image 
        style={Style.profile}
        source={require('../../../assets/images/car5.jpg')}/>
      </View>
      <View style={Style.mainContent}>
    <View style={Style.profileimage}>
       <Text style={Style.Name}>
        Your Name
       </Text>
      </View>
      <View style={Style.profileimage}>
       <Text style={Style.Email}>
        Your Email
       </Text>
      </View>
      <View style={Style.profileimage}>
       <TouchableOpacity style={Style.Logoutcontainer}>
        <Text onPress={Logout} style={Style.Logout}>
            Logout
        </Text>
       </TouchableOpacity>
      </View>
      </View>


      <View style={Style.paragraph}>
      <Text style={Style.paragraphtext}>
       Here We are Provide Best Rent a Car Services or Uber and Careem Services for our belove customer,
       {'\n'}{'\n'}
       Dear Customer,
       {'\n'}{'\n'}
       Our First periority is customer satisfaction.
      </Text>
    </View>

    </ScrollView>
  )
}


const Style = StyleSheet.create({
    profileimage:{
        padding:10,
        width:"100%",

       alignItems:"center",
        
    },
    profile:{
        width:200, 
        margin:40,
        height:200,
      alignItems:"center",
        justifyContent:"center",
        borderRadius:250,
    },
    Name:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    },
    Email:{
        fontSize:15,
        fontWeight:"bold",
        color:"white"
    },
    Logout:{
        fontSize:15,
        fontWeight:"bold",
        color:"black",
        textAlign:"center"
    },
    mainContent:{
        padding:25,
        backgroundColor:"black",
        borderRadius:100
    },
    Logoutcontainer:{
        backgroundColor:'white',
        width:"50%",
        padding:8,
        borderRadius:50
    },
    paragraph:{
      paddingVertical:50,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:"black",
    marginTop:60
      
    },
    paragraphtext:{
      fontSize:21,
      paddingHorizontal:50,
      color:"white"
    },
})