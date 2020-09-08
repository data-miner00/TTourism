//
//  This is the component that gives the preview of the attraction
//

/* Imports
=========================================== */
import React, {useState} from "react";
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
  const [uri, setUri] = useState(place.imgurl);

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", place)}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: uri,
          }}
          onError={() => setUri("https://image.flaticon.com/icons/png/512/1602/1602620.png")}
        >
          <View style={styles.label}>
            <Text style={styles.text}>{place.name}</Text>
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
