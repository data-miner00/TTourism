//
//  This is the Add Screen that allows users to add in their desired place
//

/* Imports
=========================================== */
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Picker,
  TextInput,
} from "react-native";

// Importing global styles
import { global } from "../styles/global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

/* Component Definition
=========================================== */
export default function Add({ navigation }) {
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // On Mount
  useEffect(() => {
    console.log("Add screen is rendered");
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <View style={global.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E" />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder={"Name"}
          value={name}
          onChangeText={(val) => setName(val)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder={"Tags"}
          value={tags}
          onChangeText={(val) => setTags(val)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder={"Image URL"}
          value={imgurl}
          onChangeText={(val) => setImgurl(val)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          multiline={true}
          numberOfLines={6}
          placeholder={"Description"}
          value={desc}
          onChangeText={(val) => setDesc(val)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          multiline={true}
          numberOfLines={3}
          placeholder={"Address"}
          value={address}
          onChangeText={(val) => setAddress(val)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder={"Phone"}
          value={phone}
          onChangeText={(val) => setPhone(val)}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Add Place"
          onPress={() => navigation.goBack()}
          color="#19AC52"
        />
      </View>
    </ScrollView>
  );
}

/* Setting Headers
=========================================== */
Add["navigationOptions"] = (props) => ({
  title: "Add Attraction",
  headerStyle: {
    backgroundColor: "#621FF7",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
