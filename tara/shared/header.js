import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

const openMenu = () => {
    navigation.openDrawer();
}

    return (
        <View style={styles.header}>
          <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%' ,
        height: '100%' ,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#378fe9'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#fff',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 2
    },
    headerTitle: {
        flexDirection: 'row'
    },
   

});