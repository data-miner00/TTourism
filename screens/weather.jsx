//
//  This is the
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

import { global } from "../styles/global";

/* Local Styles
=========================================== */
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  icon: {},
});

/* Component Definition
=========================================== */
export default function Weather({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Weather screen is rendered");

    // Set Timeout to bring out the loading effect XD
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  /* Decomposing the response Json Object
  =========================================== */
  let _weather = navigation.getParam("weather")[0];
  let _main = navigation.getParam("main");
  let _sys = navigation.getParam("sys");
  let _wind = navigation.getParam("wind");

  /* Assigning Useful Infromations to Variable
  =========================================== */
  let visibility = navigation.getParam("visibility");
  let humidity = _main["humidity"];
  let pressure = _main["pressure"];
  let temperature = _main["temp"];
  let name = navigation.getParam("name");
  let weather = _weather["main"];
  let description = _weather["description"];
  let icon = _weather["icon"];

  let wiconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  /* Functions
  =========================================== */
  function farenheitToCelcius(fval) {
    return ((fval - 32) * 5) / 9;
  }
  function getRealWeatherDescrption(desc) {}

  return isLoading ? (
    <View style={global.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E" />
    </View>
  ) : (
    <View style={global.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{humidity} %</Text>
      <Text style={styles.text}>{temperature} deg</Text>
      <Text style={styles.text}>{weather}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>{pressure} kPa</Text>
    </View>
  );
}

/* Setting Headers
=========================================== */
Weather["navigationOptions"] = (props) => ({
  headerStyle: {
    backgroundColor: "#621FF7",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
