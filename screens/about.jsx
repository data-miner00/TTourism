//
//  This is the About Screen that explains this application
//

/* Imports
=========================================== */
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";

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
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  // On Mount
  useEffect(() => {
    console.log("About screen is rendered");

    /* Creating Database
    =========================================== */
    const db = SQLite.openDatabase("about");
    function retrieveData() {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM about", [], (tx, results) => {
          setMessage1(results.rows.item(0).message);
          console.log(message1);
          setMessage2(results.rows.item(1).message);
          console.log(message2);
          setMessage3(results.rows.item(2).message);
          console.log(message3);
          console.log(results);
        });
      });
    }
    db.transaction(
      (tx) => {
        tx.executeSql(`
          CREATE TABLE about (
            id INTEGER PRIMARY KEY,
            message TEXT NOT NULL
          );
        `);
      },
      () => {
        // When the database failed to create
        console.log("fail/already created");
        retrieveData();
      },
      () => {
        // When the database created successfully
        // Dummy data was inserted meanwhile
        console.log("success");
        db.transaction((tx) => {
          tx.executeSql(`
          INSERT INTO about (
            message
          ) VALUES (
            "Sometime travel can be overwhelming, costly and filled with mind-numbing planning. And all those potholes appears before you even head to the airport. There's potential for a pothole or two on your journey, as well."
          );
          `);
        });
        db.transaction((tx) => {
          tx.executeSql(`
          INSERT INTO about (
            message
          ) VALUES (
            "However, there a way that makes travel be wonderfully exciting, also remove some of the excess stress associated with travel. The best way to avoid tourist traps and truly travel like a pro is using an Tourism App."
          );
          `);
        });
        db.transaction((tx) => {
          tx.executeSql(`
          INSERT INTO about (
            message
          ) VALUES (
            "This is an App about Tourism Information Guide in Taipei city. It is fully guided by our Competent Project Owner Lim Jing Chun, developed by respectful Project Manager Chong Mum Khong, Database Creater Goh Pei Xuan and beloved team members Tan Wei Yan and Yin Siew Fai."
          );
          `);
        });
        retrieveData();
      }
    );
  }, []);

  return (
    <ScrollView style={global.container}>
      <Text style={styles.quotes}>
        “Stop worrying about the potholes in the road and celebrate the
        journey.” – Fitzhugh Mullan
      </Text>
      <Text style={styles.para}>{message1}</Text>
      <Text style={styles.para}>{message2}</Text>
      <Text style={styles.para}>{message3}</Text>
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
