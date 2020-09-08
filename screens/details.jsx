//
//  This is the screen when tapped on the preview of attraction
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Button,
} from "react-native";

// Importing global styles
import { global } from "../styles/global";

/* Component Styles (Local)
=========================================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 15,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
  },
  space: {
    flex: 1,
    padding: 0,
    marginBottom: 35,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 7,
  },
  image: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontWeight: "bold",
  },
  titleText: {
    color: "#282c34",
  },
});

/* Component Definition
=========================================== */
export default function Details({ navigation }) {
  // Getting back the original data
  let name = navigation.getParam("name");
  let tags = navigation.getParam("tags");
  let imguri = navigation.getParam("imgurl");
  let desc = navigation.getParam("desc");
  let address = navigation.getParam("address");
  let phone = navigation.getParam("phone");

  const [isLoading, setIsLoading] = useState(true);

  // On Mount
  useEffect(() => {
    console.log("Details screen is rendered");

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return isLoading ? (
    <View style={global.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E" />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.baseText}>{name}</Text>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: imguri,
        }}
      />

      <View style={styles.inputGroup}>
        <Text style={styles.titleText}>Tags: </Text>
        <Text style={styles.baseText}>{tags}</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.titleText}>Description: </Text>
        <Text style={styles.baseText}>{desc}</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.titleText}>Address: </Text>
        <Text style={styles.baseText}>{address}</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.titleText}>Phone: </Text>
        <Text style={styles.baseText}>{phone}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
          color="#19AC52"
        />
      </View>
      <View style={styles.space}></View>
    </ScrollView>
  );
}

/* Setting Headers
=========================================== */
Details["navigationOptions"] = (props) => ({
  title: "Details",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#621FF7",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
