import React, { useState, useEffect } from 'react';
import { 
  Text, View, SafeAreaView, ImageBackground, TextInput, 
  Switch, TouchableOpacity, Alert, Image, StyleSheet 
} from 'react-native';

export default function RepasoScreen() {
  const [Nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Splash screen
  if (showSplash) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <Image 
          source={{ uri:'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.splashText}>Miau!</Text>
      </SafeAreaView>
    );
  }

  // Función de validación
  const mostrarAlerta = () => {
    if (!Nombre.trim() || !correo.trim()) {
      alert('Error: los campos no pueden estar vacíos');
    } else if (!isDisabled) {
      alert('Debes aceptar los términos y condiciones');
    } else {
      alert(`Tu registro se completó con éxito.\nCorreo: ${correo}`);
      setNombre('');
      setCorreo('');
      setDisabled(false);
    }
  };

  // Pantalla principal
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
        source={{ uri:'https://i.pinimg.com/originals/f4/c7/8f/f4c78fd0ab88a7e68622f5958052d444.png' }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Registro de usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#ccc"
            value={Nombre}
            onChangeText={setNombre}
            keyboardType="default"
            autoCapitalize="words"
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            value={correo}
            onChangeText={setCorreo}
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <View style={styles.row}>
            <Text style={styles.label}>Aceptar términos y condiciones</Text>
            <Switch
              onValueChange={() => setDisabled(!isDisabled)}
              value={isDisabled}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={mostrarAlerta}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1, 
    backgroundColor: '#000', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  splashText: {
    fontSize: 24, 
    color: '#fff', 
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
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
    width: '90%',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
ZAZ AS-CFGHBJ-YN{I8IU<¨
    BN+}GJYPFV67+0II8T79-IÑ
}