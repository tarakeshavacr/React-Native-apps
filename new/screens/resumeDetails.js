import { View, Text, Button, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ReviewDetails({ navigation }) {
    const link = navigation.getParam('thumbnail'); 

    return (
            <View>
                <View style={styles.container}>
                    <Image style={styles.thumbnail} source={{uri: link}} />
                    <Text style={styles.name}>{navigation.getParam('title')}</Text>
                    <Text style={styles.author}>Author: {navigation.getParam('authors')}</Text>
                </View>
                    <View>
                    <Text style={styles.descText}>Description of the Book:</Text>
                    <Text style={styles.desc}>{navigation.getParam('description')}</Text>
                    </View>
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnail: {
        width: 150,
        height: 200,
        marginVertical: 25
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10
    },
    author: {
        fontSize: 18,
        marginBottom: 20
    },
    descText: {
        marginHorizontal: 20,
        marginBottom: 20
        },
    desc: {
        fontSize: 14,
        paddingHorizontal: 20
    }
});
