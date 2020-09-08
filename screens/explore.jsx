//
//  This is the Explore Screen that
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";
import Window from '../components/window';
import firebase from '../remoteDB/firebaseDB';

// Importing global styles
import { global } from "../styles/global";

const styles = StyleSheet.create({});

export default function Explore({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [place, setPlace] = useState([]);
  const dbRef = firebase.firestore().collection('place');

  const getCollection = (querySnapShot) => {
    let placeArr = [];
    querySnapShot.forEach((res) => {
      const { name, tags, imgurl, desc, address, phone } = res.data();
      placeArr.push({
        key: res.id,
        name,
        tags,
        imgurl, 
        desc, 
        address, 
        phone,
      });
    })
    let nums = [];
    while (nums.length < 3) {
      const num = Math.floor(Math.random() * placeArr.length);
      if (!nums.includes(num))
        nums.push(num);
    }
    let place = [];
    nums.forEach(x => place.push(placeArr[x]));
    setPlace(place);
    setIsLoading(false);
  }

  useEffect(() => {
    console.log("Full screen is rendered");
    const unsubscribe = dbRef.onSnapshot(getCollection);
    
    return function cleanup() {
      unsubscribe();
    }
  }, []);

  return isLoading ? (
    <View style={global.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E" />
    </View>
  ) : (
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

/* Setting Headers
=========================================== */
Explore["navigationOptions"] = (props) => ({
  title: "Suggested Place",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#621FF7",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
