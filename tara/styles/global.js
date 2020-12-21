import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingBottom: 280,
    },
    titleText: {
        fontFamily: 'nunito-regular',
        fontSize: 18,
        color: '#333',
        marginVertical: 8,
        lineHeight: 20,
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
        marginBottom: 5,
        marginTop: 5,
        textAlign: 'center',
      },
      title: {
          fontSize: 20,
          paddingBottom: 15,
          fontWeight: 'bold',
          paddingTop: 20
      }
});