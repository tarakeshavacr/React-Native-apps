import { View, Text, Button } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {


    return (
        <View style={globalStyles.container}>
            <View>
                <Card>
                    <Text>{navigation.getParam('name')}</Text>
                    <Text>{navigation.getParam('age')}</Text>
                    <Text>{navigation.getParam('qualifications')}</Text>
                    <Text>{navigation.getParam('branch')}</Text>
                    <Text>{navigation.getParam('passoutyear')}</Text>
                    <Text>{navigation.getParam('latresume')}</Text>
                </Card>
            </View>
        </View>
    )
}
