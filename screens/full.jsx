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
  ActivityIndicator,
} from "react-native";
import firebase from '../remoteDB/firebaseDB';

// Importing global styles
import { global } from "../styles/global";

import Window from "../components/window";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingBottom: 22,
  },
});

export default function Full({ navigation }) {
  const [place, setPlace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dbRef = firebase.firestore().collection('place');

  const getCollection = (querySnapShot) => {
    const place = [];
    querySnapShot.forEach((res) => {
      const { name, tags, imgurl, desc, address, phone } = res.data();
      place.push({
        key: res.id,
        name,
        tags,
        imgurl, 
        desc, 
        address, 
        phone,
      });
    })
    console.log(place);
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
Full["navigationOptions"] = (props) => ({
  title: "Attractions List",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#621FF7",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
