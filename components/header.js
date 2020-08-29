//
//  This files is the custom components for the header
//

/* Imports
=========================================== */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* Component Definition
=========================================== */
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TTourism</Text>
        </View>
    );
}

/* Component Styles
=========================================== */
const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Verdana',
        color: 'white',
        fontSize: 22
    },
});