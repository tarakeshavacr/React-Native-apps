import React, { useState } from 'react';
import {Animated, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, ImageBackground, FlatList, Modal, Image, Keyboard, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';
import SmallCard from '../shared/smallCard';

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [fakeData, setFakeData] = useState([
      { title: 'Growth Mindset', authors: "Rick Capozzi", price:'₹ 380', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFMs6DpFxBdH33uS0LXsSDe06HJ642UP9RjQ&usqp=CAU', description: 'Consider no mr am overcame yourself throwing sociable children. Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.', key: '1'},
        { title: 'Silence', authors: "Regina Phalange", price:'₹ 1250', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToS90Y7ExUCyrK841f-3F2ua8Zc_YwNhkyNw&usqp=CAU', description: 'Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.', key: '2'},
        { title: 'Stock Images', authors: "Tarakeshava C R", price:'₹ 430', thumbnail: 'https://www.creativindie.com/wp-content/uploads/2012/07/stock-image-site-pinterest-graphic.jpg', description: 'Consider no mr am overcame yourself throwing sociable children. Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.', key: '3'},
        { title: 'Catching Fire', authors: "Suzzanne Collins", price:'₹ 380', thumbnail: 'https://jlongroadmedia.files.wordpress.com/2013/12/catchingfire.jpg', description: 'Consider no mr am overcame yourself throwing sociable children. Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.', key: '4'},     
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setFakeData((currentReviews) => {
          return [review, ...currentReviews];
        });
        setModalOpen(false);
      }
  
    return (
        <ImageBackground style={globalStyles.container} source={require('../assets/game_bg.png')} > 
               <Text style={styles.top}>  A simple App to find, download and add books for free !!!</Text>
               
         <Text style={styles.topNext}>Click here to add a Book!!!</Text>
        <View style={styles.small}>
        <SmallCard style={styles.newcard}>
            <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons 
            name='close'
            size={28} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          <ReviewForm addReview={addReview} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add' 
        size={30} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      /> 
      </SmallCard>
      </View>

        <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 16}}>   Here is a Collection of Books:</Text>
            <FlatList 
            data={fakeData}
            renderItem={({ item }) => (
              <View>
              <TouchableOpacity onPress={() => navigation.navigate('ResumeDetails', item)}>
                <Card>
                  <View style={styles.container}>
                    <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>Title: {item.title}</Text>
                        <Text style={styles.author}>Author: {item.authors}</Text>
                    </View>
                    </View>
                    </Card>
                    </TouchableOpacity>   
                    </View> 
                     
            )} 
            />
            </View>
            <View>

              <Button style={styles.last} title='Contact Us' onPress={() => (navigation.navigate('Contact'))}></Button>
            </View> 
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',       
    },
    small: {
      width: 50,
      height: 80,
      marginLeft: 160,
      justifyContent:'center'
    },
    top: {
      padding: 15,
      fontSize: 18
    },
    topNext: {
      fontSize: 18,
      marginLeft: 80,
      color: '#ed4242'
    },
    newcard: {
      height: 100,
    },
    initText: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 80,
      marginBottom: 10
    },
    thumbnail: {
        width: 80,
        height: 120,
    },
    rightContainer: {
      margin: 20
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565',
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        alignSelf: 'center',
      },
      modalClose: {
        marginTop: 20,
        marginBottom: 0,
      },
      modalContent: {
        flex: 1,
      },
      last: {
        paddingTop: 20
    }
});

