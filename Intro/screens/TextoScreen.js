
import { Text,StyleSheet, View, TextInput, Button,Alert } from 'react-native'
import React,{component, useState} from "react";

export default function TextoScreen(){

    const [nombre,setNombre] =useState(""); //iro creamos nuestra constante
    const [password, setPasword] = useState ("");
    const [comentario, setComentario] = useState ("");
    
    const mostrarAlerta=( ) => {//creamos la funcion mostrar alerta con una funcion letra 

 if ([nombre.trim(), password.trim(), comentario.trim()].includes('')){
    alert ('Error,por favor ingresa tu nombre ');
    Alert.alert('Error',' por favor ingresa tu nombre');//primera alerta, hay dos tipos, la normal es para navegador, alert.alert es para movil.
 } else {

    
    alert (`Hola, ${nombre}!`, 'Tu nombre ha sido registrado con éxito ');

    setNombre (''); //limpia el campo 
   
 }

    } ;
    return (

        < View style={styles.container}>    

        <Text style={styles.label}> Ingresa tu nombre: </Text>
       
        <TextInput
            style={styles.input}
            placeholder ="SChofis"
            value = {nombre}
            onChangeText ={setNombre}   //actualiza la variable cada que escribimos, se guarda en la variable y es lo que mostraremos 
            keyboardType ="default"
            autoCapitalize = "words"
            />

        <TextInput
            style={styles.input}
            placeholder ="contraseña"
            keyboardType ="numeric"
         secureTextEntry = {true}
            />

             <TextInput
            style={styles.input}
              value= {comentario}
             onChangeText ={setComentario} 
             multiline ={true}
             numberOfLines={4}
             placeholder ='un comentario'
              />


            <Button

            title = "saludar"
            onPress ={mostrarAlerta}
            color   = '#e183a2ff'
            
            
            />
        </View>
    )




}

// 4. Estilos para nuestros componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize:16,
},
});
