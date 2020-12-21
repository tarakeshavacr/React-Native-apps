import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ResumeDetails from '../screens/resumeDetails';
import Header from '../shared/header';
import React from 'react';

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
            title:'Resume Details',
            }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }

    }
});

export default HomeStack;