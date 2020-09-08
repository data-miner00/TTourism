//
//  This is the Setting Screen that allows custom settings
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Picker } from "react-native";

// Importing global styles
import { global } from "../styles/global";

/* Component Styles (Local)
=========================================== */
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    marginBottom: 10,
  },
});

/* Component Definition
=========================================== */
export default function Settings({ navigation }) {
  const setTheme = navigation.getParam("setTheme");
  const [value, setValue] = useState("theme1");
  return (
    <View style={global.container}>
      <Text style={styles.text}>Select Theme</Text>
      <Picker
        style={styles.picker}
        value={value}
        onValueChange={(value) => setValue(value)}
      >
        <Picker.Item label="Theme 1" value="theme1" />
        <Picker.Item label="Theme 2" value="theme2" />
        <Picker.Item label="Theme 3" value="theme3" />
      </Picker>
      <Button
        title="save"
        onPress={() => {
          setTheme(value);
          setTimeout(() => navigation.goBack(), 1000);
        }}
      />
    </View>
  );
}

/* Setting Headers
=========================================== */
Settings["navigationOptions"] = (props) => ({
  title: "Settings",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#621FF7",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
