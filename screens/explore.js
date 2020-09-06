//
//  This is the Explore Screen that
//

/* Imports
=========================================== */
import React, { useState, useEffect, useReducer } from "react";
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

const styles = StyleSheet.create({});

export default function Explore({ navigation }) {
  // On Mount
  useEffect(() => {
    console.log("Explore screen is rendered");
  }, []);

  useReducer();

  return (
    <View style={global.container}>
      <Text></Text>
    </View>
  );
}

Explore["navigationOptions"] = (props) => ({ title: "Suggested Place" });
