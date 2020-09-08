//
//  This file contains all the necessary styles that can be
//  used by the application globally without redefining all time
//

// Import StyleSheet only
import { StyleSheet } from "react-native";

/* Styles Definition
=========================================== */
export const global = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

export const colourScheme = {
  theme1: {
    headerTintColor: "white",
    headerBackground: "#373D20",
    backgroundColor: "#EFF1ED",
    buttonPrimColor: "#717744",
    buttonSecColor: "#BCBD8B",
    backup: "#766153",
  },
  theme2: {
    headerTintColor: "white",
    headerBackground: "#4a4e69",
    backgroundColor: "#9a8c98",
    buttonPrimColor: "#c9ada7",
    buttonSecColor: "#b1a7a6",
    backup: "#22223b",
  },
  theme3: {
    headerTintColor: "black",
    headerBackground: "#ff928b",
    backgroundColor: "#fec3a6",
    buttonPrimColor: "#723d46",
    buttonSecColor: "#b36a5e",
    backup: "#f6aa1c",
  },
};
