import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
export default function Home({ navigation }) {

    const fakedata = [
        { title: 'Silence', authors: "Regina Phalange", thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToS90Y7ExUCyrK841f-3F2ua8Zc_YwNhkyNw&usqp=CAU', description: 'Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.', key: '1'},
        { title: 'The Best Stock Images', authors: "Tarakeshava C R", thumbnail: 'https://www.creativindie.com/wp-content/uploads/2012/07/stock-image-site-pinterest-graphic.jpg', description: 'Consider no mr am overcame yourself throwing sociable children. Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.', key: '2'},
        { title: 'Catching Fire', authors: "Suzzanne Collins", thumbnail: 'https://jlongroadmedia.files.wordpress.com/2013/12/catchingfire.jpg', description: 'Consider no mr am overcame yourself throwing sociable children. Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.', key: '3'} 
    ];

    
    return (
        <View style={globalStyles.container}>            
            <FlatList
            data={fakedata}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ResumeDetails', item)}>
                <Card>
                <View style={styles.container}>
                <Image source={{uri: item.thumbnail}}
                            style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>{item.authors}</Text>
                </View>
                </View>
                </Card>
            </TouchableOpacity>
            )} 
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 15,
        marginLeft: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
});

