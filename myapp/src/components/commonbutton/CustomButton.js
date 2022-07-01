import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomButton  ({text , onPress}) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.buttontxt}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    color:"white",
    paddingHorizontal: 10,
    marginVertical:20
},
button: {
  alignItems: "center",
  backgroundColor: "white",
  padding: 10,
  borderRadius:20,
  paddingHorizontal:50,
},
buttontxt:{
  fontSize:15,
  fontWeight:"bold",
}

});
