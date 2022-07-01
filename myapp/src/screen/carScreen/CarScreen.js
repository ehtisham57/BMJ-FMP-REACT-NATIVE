import { View, Text ,StyleSheet ,ScrollView ,Image ,TouchableOpacity } from 'react-native'
import React from 'react'



export default function CarScreen({navigation}) {
  const BookItem = ()=>{
    alert("Your Items Has Been Book")
    navigation.navigate("Home")
  }

  return (
   
     <ScrollView>
     <View style={Style.upppaerHeading}>
      <Text style={Style.upppaerHeadingtxt}>
        All Services
      </Text>
     </View>
    
      <View style={Style.Carmain}>
        <Image style={Style.image} source={require("../../../assets/images/car5.jpg")}/>
        <View style={Style.text}>
        <Text style={Style.textHeading}>car name</Text>
        <Text style={Style.textDescription}>car Description</Text>
        <Text style={Style.textPrice}>Car Rent Price</Text>
        <TouchableOpacity style={Style.button}>
          <Text onPress={BookItem} style={Style.buttontxt}>Book Now</Text>
          </TouchableOpacity>
        </View >
      </View>

      <View style={Style.Carmain}>
        <Image style={Style.image} source={require("../../../assets/images/car4.jpg")}/>
        <View style={Style.text}>
        <Text style={Style.textHeading}>car name</Text>
        <Text style={Style.textDescription}>car Description</Text>
        <Text style={Style.textPrice}>Car Rent Price</Text>
        <TouchableOpacity style={Style.button}>
          <Text onPress={BookItem} style={Style.buttontxt}>Book Now</Text>
          </TouchableOpacity>
        </View >
      </View>

      <View style={Style.Carmain}>
        <Image style={Style.image} source={require("../../../assets/images/car2.jpg")}/>
        <View style={Style.text}>
        <Text style={Style.textHeading}>car name</Text>
        <Text style={Style.textDescription}>car Description</Text>
        <Text style={Style.textPrice}>Car Rent Price</Text>
        <TouchableOpacity style={Style.button}>
          <Text onPress={BookItem} style={Style.buttontxt}>Book Now</Text>
          </TouchableOpacity>
        </View >
      </View>

      <View style={Style.Carmain}>
        <Image style={Style.image} source={require("../../../assets/images/car3.jpg")}/>
        <View style={Style.text}>
        <Text style={Style.textHeading}>car name</Text>
        <Text style={Style.textDescription}>car Description</Text>
        <Text style={Style.textPrice}>Car Rent Price</Text>
        <TouchableOpacity style={Style.button}>
          <Text onPress={BookItem} style={Style.buttontxt}>Book Now</Text>
          </TouchableOpacity>
        </View >
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
  upppaerHeading:{
    paddingVertical:100,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    backgroundColor:"white"
  },
  upppaerHeadingtxt:{
    textAlign:'center',
    justifyContent:"center",
    fontSize:21,
    fontWeight:"bold",
    color:"black"
  },
  Carmain:{
    minHreight:350,
    backgroundColor:"black",
    display:"flex",
    flexDirection:"row",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:20,
    margin:20
  },
  image:{
    width:"45%",
    height:"100%",
    borderRadius:10
  },
  text:{
    width:"55%",
    height:"100%",
     paddingVertical:5,
    paddingHorizontal:15,
  },
  textHeading:{
    marginBottom:15,
    fontSize:20,
    fontWeight:"bold",
    color:"white"
  },
  textDescription:{
    marginBottom:15,
    fontSize:16,
    fontWeight:"normal",
    color:"white"
  },
  textPrice:{
    marginBottom:15,
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  },
  button:{
    backgroundColor:"white",
    padding:5,
    borderRadius:50,
    marginVertical:20
  },
  buttontxt:{
    textAlign:"center",
    fontSize:18,
    fontWeight:"bold",
    color:"green"
  },
  paragraph:{
    paddingVertical:50,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:"black"
    
  },
  paragraphtext:{
    fontSize:21,
    paddingHorizontal:50,
    color:"white"
  },
})