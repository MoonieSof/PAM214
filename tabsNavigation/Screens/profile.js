import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="person-outline" size={40} color="green" />
      <Text style={styles.title}>Perfil de usuario</Text>

      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate("Detalle")}
      >
        <Text style={styles.buttonText}>Detalles de usuario</Text>
      </Pressable>
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
    fontSize: 22,
    fontWeight: "bold",
    color: "green"
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007Bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
});
