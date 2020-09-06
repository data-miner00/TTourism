//
//  This is the Add Screen that allows users to add in their desired place
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Picker,
  TextInput,
} from "react-native";

// Importing global styles
import { global } from "../styles/global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    padding: 10,
    fontSize: 20,
    borderBottomColor: "white",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "blue",
  },
});

export default function Add({ navigation }) {
  // On Mount
  useEffect(() => {
    console.log("Add screen is rendered");
  }, []);

  return (
    <View style={global.container}>
      <Text>Place Name:</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text>Tags:</Text>
      <TextInput style={styles.textInput}></TextInput>
    </View>
  );
}

Add["navigationOptions"] = (props) => ({ title: "Add Attraction" });
