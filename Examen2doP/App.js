import{useEffect,useState} from 'react';
import {Text,styleSheet,View,SafeAreaView,ImageBackground} from 'react-native'

export default function App(){

const [showSplash,setShowSplash]= useState(true)

useEffect ( ()=>{
  const timer =setTimeout( () =>{
    setShowSplash(false);

  }, 3000);
  return ()=> clearTimeout(timer);

},[]);

if (showSplash){

  return(

    <View style ={styles.splashContainer}>

      <Text style={styles.splashText}>   Bienvenido a mi perfil  </Text> 
    </View>
  );
}




}

const styles = styleSheet.create({

splashContainer:{

flex:1,
backgroundColor:'#000000ff',
justifyContent:'center',
alignItems: 'center',

},

splashText:{
  fontSize:24,
  color:'#fff',

},










});