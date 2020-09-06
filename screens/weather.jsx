//
//  This is the
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { global } from "../styles/global";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  icon: {
    height: 50,
    width: "100%",
  },
});

export default function Weather({ navigation }) {
  useEffect(() => {
    console.log("Weather screen is rendered");
  }, []);

  let _weather = navigation.getParam("weather")[0];
  let _main = navigation.getParam("main");
  let _sys = navigation.getParam("sys");
  let _wind = navigation.getParam("wind");

  let visibility = navigation.getParam("visibility");
  let humidity = _main["humidity"];
  let pressure = _main["pressure"];
  let temperature = _main["temp"];
  let name = navigation.getParam("name");
  let weather = _weather["main"];
  let description = _weather["description"];
  let icon = _weather["icon"];

  let wiconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <View style={global.container}>
      <Image style={styles.icon} source={{ uri: wiconurl }} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{humidity} %</Text>
      <Text style={styles.text}>{temperature} deg</Text>
      <Text style={styles.text}>{weather}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>{pressure} kPa</Text>
    </View>
  );
}
