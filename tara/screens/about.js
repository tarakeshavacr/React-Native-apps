import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function About() {

    const text1 = '         This is a simple App that just can be used as a library of books, where people can add books for others to use. Here the app users can just give in the book details and then the book is available for everyone to use.'
    return (
            <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
                <Card style={styles.card}>
                    <View>
                    <View style={{flexDirection: 'row'}}>
                    <Image style={styles.img} source={{uri: 'https://img1.parentune.com/images/blogs/World-Book-Day-Introduce-Book-Reading-Habit-To-Your-Child-1524475235.jpg'}} />
                    </View>
                    <Text style={styles.title}>“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”</Text>
                   
                    <View style={styles.new}>
                    <Text style={styles.titleName}>- By T.S.Elliot</Text>
                    </View>
                    </View>
                </Card>
                <Text style={styles.base}>{text1}</Text>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    content: {
        fontSize: 24,
        padding: 20
    },
    card: {
        backgroundColor: '#e4ede6'
    },
    img: {
        marginTop: 15,
        marginBottom: 20,
        width: 320,
        height: 150,
        marginLeft: 4
    },
    title: {
        fontSize: 24
    },
    new: {
        flexDirection: 'row-reverse'
    },
    titleName: {
        fontWeight: 'bold',
        fontSize: 22
    },
    base: {
        paddingTop: 20,
        paddingLeft: 15,
        fontSize: 20
    }
})
