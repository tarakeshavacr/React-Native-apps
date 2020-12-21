import { View, Text, StyleSheet, Image, TextInput, Linking, ImageBackground, ImageBackgroundBase } from 'react-native';
import React from 'react';
import Card from '../shared/card';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from "../shared/button";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Contact() {

    const reviewSchema = yup.object({
        title: yup.string()
        .required()
        .email()
        .min(4),
        feedback: yup.string()
        .required()
        .min(8),
    });
    
    return (
        <View style={{backgroundColor: '#defcf7'}}>
            <View style={styles.container}>
                <Text style={{padding: 10, fontWeight: 'bold', fontSize: 20}}>Contact Information:</Text>
                <Card>
                <Formik
        initialValues={{ title: '', feedback: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          setThanks(true);
        }}
      >
        {props => (
          <View style={{padding: 10, width: 340}}>
          <Text style={styles.title}> Enter email:</Text>
            <TextInput
              style={styles.input}
              placeholder='  email'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={styles.errorText}>{ props.touched.title && props.errors.title }</Text>

            <Text style={styles.feedback}> Please enter your feedback:</Text>
            <TextInput
              style={styles.input}
              placeholder='  feedback'
              onChangeText={props.handleChange('feedback')}
              value={props.values.feedback}
              onBlur={props.handleBlur('feedback')}
            />
            <Text style={styles.errorText}>{ props.touched.feedback && props.errors.feedback }</Text>
            
            <FlatButton onPress={props.handleSubmit} text='submit' /> 
          </View>
        )}
      </Formik>  
              </Card>
            </View>

              <View style={{marginLeft: 20, marginTop: 20}}>
                <Text style={{fontSize: 20, marginBottom: 10}}><TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps')}><Image source={{uri: 'https://seeklogo.com/images/G/globe-logo-42DE548AC7-seeklogo.com.png'}} style={{width: 20, height: 19.5}} /></TouchableOpacity>  Address: </Text>
                <Text style={styles.text}>#4, 'Gate WestWood'</Text>
                <Text style={styles.text}>5th cross, 4th Main Road</Text>
                <Text style={styles.text}>Jayanagar, Bengaluru South</Text>
                <Text style={styles.text}>Bengaluru - 560032.</Text>
                <Text style={styles.text}>Phone Number: +91-9980970123.</Text>
                <Text style={styles.text}>Mobile Number: +91-7844512211.</Text>
                <Text style={{fontSize: 20, marginLeft: 50, marginTop: 10, color: '#53a2c2'}}>Please send your feedbacks and resumes to hr@someone.com.</Text>
                <Text style={{marginTop: 20, fontSize: 20, marginLeft: 100, color: '#53a2c2'}}>Social Media Links: </Text>
              </View>

                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.facebook.com')}>
                    <Image style={styles.f} source={require('../assets/fb.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')}>
                    <Image style={styles.g} source={require('../assets/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('http://www.twitter.com')}>
                    <Image style={styles.t} source={require('../assets/twitter.png')} /> 
                    </TouchableOpacity>
                  </View>
                  <Text style={{marginLeft: 150 ,marginBottom: 100}}>Copyright © 2020.</Text>
          </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    f: {
        width: 60,
        height: 60,
        marginHorizontal: 30,
    },
    g: {
        width: 40,
        height: 40,
        marginHorizontal: 30
    },
    t: {
        width: 50,
        height: 40,
        marginHorizontal: 30
    },
  input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      fontSize: 18,
      borderRadius: 6,
    },
    errorText: {
      color: 'crimson',
      fontWeight: 'bold',
      marginTop: 5,
      textAlign: 'center',
    },
    title: {
        fontSize: 16,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    feedback: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 10
    },
    text:{
      fontSize: 16,
      margin: 2
    }
   
});
