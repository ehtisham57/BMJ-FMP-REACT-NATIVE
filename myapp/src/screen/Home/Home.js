import { View, Text ,Button ,ScrollView ,StyleSheet ,Image ,ImageBackground} from 'react-native'
import React from 'react'




export default function Home() {


  return (
    <ScrollView>
    <View style={Style.heading}>
      <Text style={Style.headingtext}> Rent A Car Screen </Text>
    </View>
    
    <View style={Style.secondHeading}>
      <Text style={Style.secondHeadingtext}>
        You are Looking for Car Services ?
      </Text>
    </View>
    <View>
    <Image 
    source={require('../../../assets/images/car2.jpg')}
    style={Style.image}
    />
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

    <View>
    <Image 
    source={require('../../../assets/images/car3.jpg')}
    style={Style.image}
    />
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

    <View>
    <Image 
    source={require('../../../assets/images/car4.jpg')}
    style={Style.image}
    />
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
  root:{
    textAlign:'center',
    justifyContent:"center",
    flex:1
  },
  heading:{
    paddingVertical:100,
    borderBottomRightRadius:50,
    backgroundColor:"black"
  },
  headingtext:{
    textAlign:'center',
    justifyContent:"center",
    fontSize:21,
    fontWeight:"bold",
    color:"white"
  },
  secondHeading:{
    paddingVertical:45
  },
  secondHeadingtext:{
    textAlign:'center',
    justifyContent:"center",
    fontSize:25,
    fontWeight:"bold",
    paddingHorizontal:30,
    color:"black"
  },
  paragraph:{
    paddingVertical:50,
    borderTopLeftRadius:50,
    backgroundColor:"black"
    
  },
  paragraphtext:{
    fontSize:21,
    paddingHorizontal:50,
    color:"white"
  },
  image:{
    width:"100%",
      height:250,
      marginVertical:20,
      borderTopLeftRadius:50
  }

})