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

const styles = StyleSheet.create({});

export default function Add({ navigation }) {
  // On Mount
  useEffect(() => {
    console.log("Add screen is rendered");
  }, []);

  return (
    <View style={global.container}>
      <Text></Text>
    </View>
  );
}
