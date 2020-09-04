//
//  This is the screen when tapped on the preview of attraction
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Importing global styles
import { global } from "../styles/global";

/* Component Styles (Local)
=========================================== */
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
  },
});

/* Component Definition
=========================================== */
export default function Details({ navigation }) {
  // Getting back the original data
  let place = navigation.getParam("place");
  let tags = navigation.getParam("tags");
  let imguri = navigation.getParam("imguri");
  let description = navigation.getParam("description");
  let address = navigation.getParam("address");
  let phonono = navigation.getParam("phonono");

  return (
    <View style={global.container}>
      <Image
        style={styles.image}
        source={{
          uri: imguri,
        }}
      />
      <Text>{place}</Text>
      <Text>{tags}</Text>
      <Text>{description}</Text>
      <Text>{address}</Text>
      <Text>{phonono}</Text>
    </View>
  );
}
