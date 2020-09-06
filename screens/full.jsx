//
//  This is the Full List Screen that shows all the attraction
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

import Window from "../components/window";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default function Full({ navigation }) {
  const place = navigation.getParam("attractions");

  useEffect(() => {
    console.log("Full screen is rendered");
  });

  return (
    <View style={global.container}>
      <View style={styles.list}>
        <FlatList
          data={place}
          renderItem={({ item }) => (
            <Window place={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

Full["navigationOptions"] = (props) => ({ title: "Attractions List" });
