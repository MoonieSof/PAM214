//1. imports : Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import React, {useState, UseState} from 'react'; 
//2. Main : Zona de componentes
export default function ContadorScreen() { 
  const [contador, setContador] = useState(855);
  return ( 
    <View style={styles.container}> 

      <Text style ={styles.texto}> Contador: </Text>
      <Text style ={styles.texto2}>  {contador} </Text>

<View style={styles.contenedorBotones}> 
      <Button color ="pink"title="Agregar" onPress={()=>setContador(contador+1)}/> 
      <Button color = "pink"title='Quitar' onPress={()=> setContador(contador-1)}/>
      <Button color="pink" title='Reiniciar' onPress={()=> setContador(contador - contador)}/>
</View>
      <StatusBar style="auto" />
    </View>
  );
}

//3. Estilos : Zona de los estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bb5683ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
texto:{
  color: '#e6dde1ff',
  fontSize:30,
  fontFamily:'Arial',//tipo deletra
  fontWeight: 'bold', //por siq ueremos que se anegrita
fontStyle: 'italic',//cmabiar el tipo de texto
textDecorationLine: 'underline'

},

texto2:{
  color: '#c5005cff',
  fontSize:40,
  fontFamily:'Times new roman',//tipo deletra
  fontWeight: '900', //por siq ueremos que se anegrita
textDecorationLine: 'underline'

},

//mover contenido para que no esten solo en fila

contenedorBotones:{
  marginTop:15,
  flexDirection:'row',
  gap:10,


},

});