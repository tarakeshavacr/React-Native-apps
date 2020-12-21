import { createStackNavigator } from 'react-navigation-stack';
import Contact from '../screens/contact';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Contact: {
        screen: Contact,
        navigationOptions: ({ navigation }) => {
            return {
            headerTitle: () => <Header navigation={navigation} title='Contact Us' />, 
            }
        }
    },
}

const ContactStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#378fe9', height: 90 }

    }
});

export default ContactStack;