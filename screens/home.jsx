//
//  This is the Home Screen for the application
//

/* Imports
=========================================== */
import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Importing global styles
import { global, colourScheme } from "../styles/global";

/* Weather API Credentials
=========================================== */
const APP_ID = "535b799ef7661f7c78e6dd820476ac63";
const CITY_ID = "1665148";
const URL = `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${APP_ID}`;

/* Dynamic Styles
=========================================== */
var headerColors = {
  headerTintColor: "white",
  headerBackground: "#373D20",
};

/* Component Styles
=========================================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  weatherBox: {
    padding: 15,
    backgroundColor: "blue",
  },
  weatherCity: {
    fontSize: 21,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "white",
  },
  weather: {},
});

/* Component Definition
=========================================== */
export default function Home({ navigation }) {
  /* States and JSX
  =========================================== */
  const [fullRes, setFullRes] = useState({});
  const [weather, setWeather] = useState("why cant change");
  const Seperator = () => <View style={styles.seperator} />;
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("theme1");
  const [bgColor, setBgColor] = useState("#EFF1ED");
  const [primColor, setPrimColor] = useState();
  const [secColor, setSecColor] = useState();
  const [backupColor, setBackupColor] = useState("#766153");

  /* ComponentDidMount
  =========================================== */
  useEffect(() => {
    console.log("Home screen loaded");

    // Set Timeout to bring out the loading effect XD
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  /* Themes Logic
  =========================================== */
  function useTheme(theme) {
    headerColors = {
      headerTintColor: theme.headerTintColor,
      headerBackground: theme.headerBackground,
    };
    setBgColor(theme.backgroundColor);
    setPrimColor(theme.buttonPrimColor);
    setSecColor(theme.buttonSecColor);
    setBackupColor(theme.backup);
  }

  useEffect(() => {
    theme === "theme1"
      ? useTheme(colourScheme.theme1)
      : theme === "theme2"
      ? useTheme(colourScheme.theme2)
      : useTheme(colourScheme.theme3);
  }, [theme]);

  /* Save Expensive Functions
  =========================================== */
  // Make sure that fetch URL will not be called each time the component
  // rerenders by changing themes
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        console.log(typeof responseJSON.weather[0].main);
        setFullRes(responseJSON);
        return responseJSON.weather[0].main;
      })
      .then((weather) => setWeather(weather))
      .then(() => console.log(weather))
      .catch(console.error);
    console.log("Fetch URL called");
  }, []);

  useEffect(() => console.log(weather), [weather]);

  return isLoading ? (
    <View style={global.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E" />
    </View>
  ) : (
    <View style={[global.container, { backgroundColor: bgColor }]}>
      <Button
        title="attractions list"
        color={primColor}
        onPress={() => navigation.navigate("Full")}
      />
      <Seperator />
      <Button
        title="explore city"
        color={primColor}
        onPress={() => navigation.navigate("Explore")}
      />
      <Seperator />
      <Button
        title="weather"
        color={primColor}
        onPress={() => navigation.navigate("Weather", fullRes)}
      />
      <Seperator />
      <Button
        title="add attraction"
        color={secColor}
        onPress={() => navigation.navigate("Add")}
      />
      <Seperator />
      <Button
        title="favourite"
        color={secColor}
        onPress={() => navigation.navigate("Favourite")}
      />
      <Seperator />
      <Button
        title="about"
        color={secColor}
        onPress={() => navigation.navigate("About")}
      />
      <Seperator />
      <Button
        title="settings"
        color={secColor}
        onPress={() =>
          navigation.navigate("Settings", {
            setTheme: (theme) => setTheme(theme),
          })
        }
      />
      <Seperator />
      <View style={[styles.weatherBox, { backgroundColor: backupColor }]}>
        <Text style={styles.weatherCity}>New Taipei City</Text>
        <Text style={styles.weatherCity}>{weather}</Text>
      </View>
    </View>
  );
}

/* Setting Headers
=========================================== */
Home["navigationOptions"] = (props) => ({
  title: "Taipei Tourist Guide",
  headerTintColor: headerColors.headerTintColor,
  headerStyle: {
    backgroundColor: headerColors.headerBackground,
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
