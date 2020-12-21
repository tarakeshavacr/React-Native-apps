import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import Card from  '../shared/card';

export default function Home({ navigation }) {

    const [resumes, setReviews] = React.useState([
        { name: 'Tarakeshava C R', age: 22, qualifications: 'B.Tech', branch: 'E & C', passoutyear: 2019, latresume: 'filename.pdf', key:'1' },
        { name: 'Srihari M N', age: 23, qualifications: 'B.Tech', branch: 'CSc', passoutyear: 2019, latresume: 'filename.pdf', key: '2' },
        { name: 'Pramath J', age: 23, qualifications: 'B.Tech', branch: 'TC', passoutyear: 2020, latresume: 'filename.pdf', key:'3' },
    ]);


    return (
        <View style={globalStyles.container}>
            <FlatList
            data={resumes}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ResumeDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.name}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    )
}

