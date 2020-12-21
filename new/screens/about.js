import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

export default function About() {

    return (
        <View style={globalStyles.container}>
            <View>
                <Text>About Screen</Text>
            </View>
        </View>
    )
}
