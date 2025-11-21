import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalle() {
  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={40} color="red" />
      <Text style={styles.title}>Bienvenido a la pantalla de detalle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "red"
  }
});
