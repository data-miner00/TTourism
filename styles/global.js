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
    headerTintColor: "black",
    headerBackground: "#E8E1EF",
    backgroundColor: "#D9FFF8",
    buttonPrimColor: "#9BB291",
    buttonSecColor: "#C4F4C7",
    backup: "#C7FFDA",
  },
  theme3: {
    headerTintColor: "white",
    headerBackground: "#102E4A",
    backgroundColor: "#55C1FF",
    buttonPrimColor: "#715AFF",
    buttonSecColor: "#A682FF",
    backup: "#5887FF",
  },
};
