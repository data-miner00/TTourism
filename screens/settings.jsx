//
//  This is the Setting Screen that allows custom settings
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
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
export default function Settings({ navigation }) {
  const setTheme = navigation.getParam("setTheme");
  return (
    <View style={global.container}>
      <Text>Theme</Text>
      <Button
        title="save"
        onPress={() => {
          setTheme("DARK");
          navigation.goBack();
        }}
      />
    </View>
  );
}
