import { AppLoading } from 'expo';
import React from 'react';
import * as Font from 'expo-font';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  });

export default function App() {
const [fontsLoaded,setFontsLoaded] = React.useState(false);

if(fontsLoaded)
{
  return (
   <Navigator />
  );
  } else {
    return (
    <AppLoading
       startAsync={getFonts} 
       onFinish={() => setFontsLoaded(true)}
       />
    )
  }

}

