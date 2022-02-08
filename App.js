import React from 'react'; 
import { StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold } 
  from 'expo-google-fonts/motserrat';

import  Cesta from './src/telas/Cesta';
import { View } from 'react-native-web';

export default function App() {

  const[Fontecarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if  (!Fontecarregada){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}