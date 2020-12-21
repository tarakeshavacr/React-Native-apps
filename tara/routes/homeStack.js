import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ResumeDetails from '../screens/resumeDetails';
import Header from '../shared/header';
import React from 'react';
import Contact from '../screens/contact';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
            headerTitle: () => <Header navigation={navigation} title='Books Viewer' />, 
            }
        }
    },
    ResumeDetails: {
        screen: ResumeDetails,
        navigationOptions: {
            title:'Book Information',
            headerTitleStyle: {
                marginLeft: 50
            },
            }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            title: 'Contact Us',
            headerTitleStyle: {
                marginLeft: 80
            }

        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        
        headerStyle: { backgroundColor: '#378fe9', height: 90,},

    }
});

export default HomeStack;