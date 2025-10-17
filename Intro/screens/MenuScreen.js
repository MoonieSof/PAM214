
import { Text,StyleSheet,View, Button } from 'react-native'
import React, {useState} from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import BottomScreen from './BottomScreen'
import ModalScreen from './ModalScreen'
import ListaScreen from './ListaScreen'
import ActScreen from './ActScreen'
import VistaScreen from './VistaScreen'
import ImagenScreen from './ImagenScreen'
import TextoScreen from './TextoScreen'



export default function MenuScreen () {

const[screen,setScreen]=useState('menu');   //debe tener una variabel y una funcion

switch(screen){

    case 'contador':
         return <ContadorScreen/>
    case'botones':
          return <BotonesScreen/>
     case 'bottom':
          return <BottomScreen/>   
    case 'modal':
          return <ModalScreen/>
    case 'lista':
           return <ListaScreen/>
    case 'act':
           return <ActScreen/>
     case 'vista':
           return <VistaScreen/>
       case 'imagen':
           return <ImagenScreen/>
        case 'Texto':
            return <TextoScreen/>         
            
        case 'Bottom':
            return <BottomScreen/>
   
     case 'menu':
    
             
          default: 
  return (
      <View>
       <h1> <Text>MenuPracticas</Text></h1> 

        <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/>
     <Button onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
     <Button onPress={()=>setScreen('texto')} title= 'Pract: Text & Alerts'/>
     <Button onPress={()=>setScreen('imagen')} title= 'Pract: ImageBackground & SlapshScreen'/>
         <Button onPress={()=>setScreen('vista')} title= 'Pract: ScrollView'/>
       <Button onPress={()=>setScreen('act')} title= 'Pract: ActivityIndicator'/> 
        <Button onPress={()=>setScreen('lista')} title= 'Pract: FlatList y Section List'/>
            <Button onPress={()=>setScreen('modal')} title= 'Pract: Modal'/>
                <Button onPress={()=>setScreen('Bottom')} title= 'Pract: Bottom Sheet'/>
        

      </View>
    )

    
}
    
  }
  const styles = StyleSheet.create({});
