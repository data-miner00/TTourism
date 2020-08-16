import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TTourism</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#E69A8DFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Verdana',
        color: '#5F4B8BFF',
        fontSize: 22
    },
});