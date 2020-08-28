import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Window({ place }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text>{place.place}</Text>
                <Text>{place.tags}</Text>
                <Image 
                    style={styles.image}
                    source={{
                    uri: place.imguri,
                    }}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: '100%',
        height: 100,
    }
});