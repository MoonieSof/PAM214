
import{useEffect, useState} from 'react';
import { Text,StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native'


export default function ImagenScreen(){
    const [showSplash,setShowSplash] = useState(true)
    
    useEffect (() => {
        const timer =setTimeout (()=>{

        setShowSplash(false);

        },  2000);// tiempo que durará

      return () => clearTimeout (timer);
    },[]);
    
    if (showSplash){  //si es verdadero nos muestra la pantalla de bienvenida 
    return (

        < View style ={styles.splashContainer}>    

        <Text style={styles.splashText}>  Bienvenido a la app!  </Text>
        </View>
    );


  }

  return (

     <SafeAreaView style={{flex: 1}}>

    <ImageBackground 

    source ={{
        uri:'https://www.patasencasa.com/sites/default/files/styles/article_detail_1200/public/2024-09/hello-kitty-historia_0.jpg.webp?itok=vIKuhqYw',
    }}

style={styles.background}
>
<View style={styles.overlay} >  

<Text style={styles.tittle}>  Bienvenido! </Text>


</View>  

</ImageBackground>

</SafeAreaView>

);

}


// Estilos
const styles = StyleSheet.create({
  

  splashContainer: {
    flex: 1, 
    backgroundColor: '#000000ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  splashText: {
    fontSize: 24, 
    color: '#fff', 
  },

  
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20, 
    borderRadius: 10, 
  },

  
  title: {
    fontSize: 28, 
    color: '#fff', 
    marginBottom: 10, 
    textAlign: 'center', 
  },
});