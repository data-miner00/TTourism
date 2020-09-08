//
//  This is the Explore Screen that
//

/* Imports
=========================================== */
import React, { useState, useEffect, useReducer } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

// Importing global styles
import { global } from "../styles/global";

const styles = StyleSheet.create({});

export default function Explore({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  // On Mount
  useEffect(() => {
    console.log("Explore screen is rendered");

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useReducer();

  return isLoading ? (
    <View style={global.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E" />
    </View>
  ) : (
    <View style={global.container}>
      <Text></Text>
    </View>
  );
}

/* Setting Headers
=========================================== */
Explore["navigationOptions"] = (props) => ({
  title: "Suggested Place",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#621FF7",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
