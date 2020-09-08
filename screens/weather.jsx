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
    paddingTop: 4,
    color: "white",
  },
  title: {
    fontSize: 19,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  box1: {
    backgroundColor: "#639FAB",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  box2: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1C5D99",
  },
  important: {
    fontWeight: "bold",
    color: "#1c5d99",
    fontSize: 22,
  },
});

/* Component Definition
=========================================== */
export default function Weather({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Weather screen is rendered");

    // Set Timeout to bring out the loading effect XD
    setTimeout(() => setIsLoading(false), 300);
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
  function kelvinToCelcius(kval) {
    return kval - 273.15;
  }
  function getRealWeatherDescrption(desc) {}

  return isLoading ? (
    <View style={global.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E" />
    </View>
  ) : (
    <View style={global.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.box1}>
        <Text style={styles.text}>
          Humidity: <Text style={styles.important}>{humidity}%</Text>
        </Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text}>
          Temperature: {kelvinToCelcius(temperature).toFixed(2)}°C
        </Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text}>
          Weather: <Text style={styles.important}>{weather}</Text>
        </Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text}>Description: {description}</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.text}>Pressure: {pressure}kPa</Text>
      </View>
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
