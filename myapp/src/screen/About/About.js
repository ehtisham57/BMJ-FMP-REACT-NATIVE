import { View, Text,ScrollView ,StyleSheet ,Image } from 'react-native'
import React from 'react'



export default function About() {
  return (
    <ScrollView>
    <View style={Styles.mainHeading}>
      <Text style={Styles.mainHeadingTxt}>ABOUT OUR {'\n'}{'\n'} COMPANY</ Text>
    </View>

    <Image 
    source={require('../../../assets/images/car5.jpg')}
    style={Styles.image}
    />
    <View style={Styles.headingroot}>
      <Text style={Styles.headingtxt}>
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
    <Image 
    source={require('../../../assets/images/car3.jpg')}
    style={Styles.image}
    />
    <View style={Styles.headingroot}>
      <Text style={Styles.headingtxt}>
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
       
      </Text>
    </View>

    <Image 
    source={require('../../../assets/images/car2.jpg')}
    style={Styles.image}
    />
    <View style={Styles.headingroot}>
      <Text style={Styles.headingtxt}>
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
      </Text>
    </View>

    <Image 
    source={require('../../../assets/images/car4.jpg')}
    style={Styles.image}
    />
    <View style={Styles.headingroot}>
      <Text style={Styles.headingtxt}>
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
      </Text>
    </View>

    <View style={Styles.footer}>
      <Text style={Styles.footertxt}>
        Thanks For Read This
      </Text>
    </View>

    </ScrollView>
  )
}

const Styles = StyleSheet.create({
    mainHeading:{
        paddingVertical:20,
        backgroundColor:"black",
        borderBottomEndRadius:50
    },
    mainHeadingTxt:{
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        fontSize:40,
        fontWeight:"bold",
        color:"white",
        paddingVertical:20,
    },
    headingroot:{
      paddingVertical:20,
      paddingHorizontal:20
    },
    headingtxt:{
      fontSize:20,
      fontWeight:"500",
      textTransform:"capitalize"
    },
    image:{
      width:"100%",
      height:250,
      marginVertical:20,
      borderTopLeftRadius:50
    },
    footer:{
      paddingVertical:30,
      backgroundColor:"black",
      borderTopRightRadius:40,
      borderTopLeftRadius:40,
      alignItems:"center",
      justifyContent:"center",
    },
    footertxt:{
      paddingVertical:30,
      fontSize:30,
      color:"white"
    }
})