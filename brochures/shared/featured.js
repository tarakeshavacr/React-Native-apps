import { StyleSheet, View, Text } from 'react-native'; 

export default function Featured()
{
        return (
  	    <View style={styles.container}>
         <Text style={styles.description}>
        	  Featured Tab
         </Text>
     </View>
        );
}

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 