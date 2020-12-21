import { View, Text, Image, StyleSheet, Linking} from 'react-native';
import React from 'react';
import FlatButton from '../shared/button';

export default function ReviewDetails({ navigation }) {
    const link = navigation.getParam('thumbnail'); 

    return (
            <View>
                <View style={styles.container}>
                    <Image style={styles.thumbnail} source={{uri: link}} />
                    <Text style={styles.name}>{navigation.getParam('title')}</Text>
                    <Text style={styles.author}>Author: <Text style={{fontWeight: 'bold'}}>{navigation.getParam('authors')}</Text></Text>
                </View>
                    <View>
                    <Text style={styles.price}>Price: {navigation.getParam('price')}</Text>
                    <Text style={styles.descText}>Description of the Book:</Text>
                    <Text style={styles.desc}>             {navigation.getParam('description')}</Text>
                    </View>
                    <View style={styles.download}>
                    <FlatButton onPress={() => Linking.openURL('http://www.pdfdrive.com')} text='Download' />
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
        width: 140,
        height: 200,
        marginVertical: 25,
        marginRight: 15,
        marginLeft: 10
    },
    price: {
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 10,
        color: 'blue'
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
        marginBottom: 10,
        fontSize: 18
        },
    desc: {
        fontSize: 16,
        paddingLeft: 30,
        paddingRight: 15
    },
    download: {
        padding: 40
    }
});
