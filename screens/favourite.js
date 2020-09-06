//
//  This is the Favourite Screen that
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
} from "react-native";

// Importing global styles
import { global } from "../styles/global";

export default ({ navigation }) => {
  useEffect(() => {
    console.log("Favourite screen loaded");
  }, []);
  return (
    <View style={global.container}>
      <Text></Text>
    </View>
  );
};
