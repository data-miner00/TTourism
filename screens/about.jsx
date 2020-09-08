//
//  This is the About Screen that explains this application
//

/* Imports
=========================================== */
import React, { useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

// Importing global styles
import { global } from "../styles/global";

/* Component Styles (Local)
=========================================== */
const styles = StyleSheet.create({
  quotes: {
    backgroundColor: "gray",
    padding: 30,
    fontSize: 19,
    color: "white",
    marginBottom: 20,
  },
  para: {
    fontSize: 16,
    color: "#826e5a",
    padding: 5,
    textAlign: "left",
    marginBottom: 15,
  },
});

/* Component Definition
=========================================== */
export default function About({ navigation }) {
  // On Mount
  useEffect(() => {
    console.log("About screen is rendered");
  }, []);

  return (
    <ScrollView style={global.container}>
      <Text style={styles.quotes}>
        “Stop worrying about the potholes in the road and celebrate the
        journey.” – Fitzhugh Mullan
      </Text>
      <Text style={styles.para}>
        Sometime travel can be overwhelming, costly and filled with mind-numbing
        planning. And all those potholes appears before you even head to the
        airport. There's potential for a pothole or two on your journey, as
        well.
      </Text>
      <Text style={styles.para}>
        However, there a way that makes travel be wonderfully exciting, also
        remove some of the excess stress associated with travel. The best way to
        avoid tourist traps and truly travel like a pro is using an Tourism App.
      </Text>
      <Text style={styles.para}>
        This is an App about Tourism Information Guide in Taipei city. It is
        fully guided by our Competent Project Owner Lim Jing Chun, developed by
        respectful Project Manager Chong Mum Khong, Database Creater Goh Pei
        Xuan and beloved team members Tan Wei Yan and Yin Siew Fai.
      </Text>
    </ScrollView>
  );
}

/* Setting Headers
=========================================== */
About["navigationOptions"] = (props) => ({
  title: "About This",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#621FF7",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
