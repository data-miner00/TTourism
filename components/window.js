//
//  This is the component that gives the preview of the attraction
//

/* Imports
=========================================== */
import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    TouchableOpacity 
} from 'react-native';

/* Component Definition
=========================================== */
export default function Window({ place, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', place)}>
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

/* Component Styles
=========================================== */
const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: '100%',
        height: 100,
    },
});