
import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import BottomScreen from './BottomScreen';
import ModalScreen from './ModalScreen';
import ListaScreen from './ListaScreen';
import ActScreen from './ActScreen';
import VistaScreen from './VistaScreen';
import ImagenScreen from './ImagenScreen';
import TextoScreen from './TextoScreen';
import PantallaGrafica from './PantallaGrafica';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'modal':
      return <ModalScreen />;
    case 'lista':
      return <ListaScreen />;
    case 'act':
      return <ActScreen />;
    case 'vista':
      return <VistaScreen />;
    case 'imagen':
      return <ImagenScreen />;
    case 'Texto':
      return <TextoScreen />;
    case 'Bottom':
      return <BottomScreen />;
    case 'Graficas':
      return <PantallaGrafica/>  
    case 'menu':
    default:

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menu de Prácticas</Text>

          <Button onPress={() => setScreen('contador')} title="Pract: Contador" />
          <Button onPress={() => setScreen('botones')} title="Pract: Buttons" />
          <Button onPress={() => setScreen('Texto')} title="Pract: Text & Alerts" />
          <Button onPress={() => setScreen('imagen')} title="Pract: ImageBackground & SplashScreen" />
          <Button onPress={() => setScreen('act')} title="Pract: ActivityIndicator" />
          <Button onPress={()=> setScreen ('Contador')} title="Pract: ScrollView"/>
          <Button onPress={() => setScreen('lista')} title="Pract: FlatList y SectionList" />
          <Button onPress={() => setScreen('modal')} title="Pract: Modal" />
          <Button onPress={() => setScreen('Bottom')} title="Pract: Bottom Sheet" />
          <Button onPress ={()=> setScreen ('Grafica')} title='Graficas'/>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
