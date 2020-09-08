//
//  This is the component that gives the preview of the attraction
//

/* Imports
=========================================== */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

/* Component Definition
=========================================== */
export default function Window({ place, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", place)}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: place.imgurl,
          }}
        >
          <View style={styles.label}>
            <Text style={styles.text}>{place.place}</Text>
            <Text style={styles.text}>{place.tags}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

/* Component Styles
=========================================== */
const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 40,
    width: "100%",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
