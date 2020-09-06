//
//  This is the About Screen that explains this application
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

/* Component Styles (Local)
=========================================== */
const styles = StyleSheet.create({});

/* Component Definition
=========================================== */
export default function About({ navigation }) {
  // On Mount
  useEffect(() => {
    console.log("About screen is rendered");
  }, []);

  return <View style={global.container}></View>;
}

About["navigationOptions"] = (props) => ({ title: "About" });
