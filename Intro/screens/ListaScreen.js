import React from "react";
import {View, Text, FlatList, SectionList, StyleSheet } from "react-native"; //primero se importn las librerias a usar

export default function FlatlistScreen() { //Usamos flatlist como una alternativa a mucho text, muestra listas largas de forma eficiente va trayendo mas a medida que hacemos scroll
    
    const estudiantes = [   //se crea un arreglo... este arreglo es una fuente de dato, cada elemento del arreglo representa una fila en la lista 
    { id: "1", nombre: "Ana" },
    { id: "2", nombre: "Luis" },
    { id: "3", nombre: "María" },
    { id: "4", nombre: "Carlos" }
    ];
    const materias = [ //este arreglo se usa para la siguiente parte que es una lista con secciones
    {
    titulo: "Matemáticas",
    data: ["Ana", "Carlos"]   
    },
    {
    titulo: "Historia",
    data: ["Luis", "María"]
    },
    {
    titulo: "Programación",
    data: ["Ana", "Luis", "María"]
    }
    ];

    return (                          //todo lo que se va a mostrar
      <View style={styles.container}>         // el styles.container aplica nuestros estilos
      
      




      
      <FlatList                                    //dentro de mi view contenedor voy a colocar mis textos y la lista 
      data={estudiantes} //le pasamos el arreglo con nuestros datos
      keyExtractor={(item) => item.id} //para dar id, asi react sabe cual elmento cambio si actualoizamos la lista 
      renderItem={({ item }) => (//render item nos dice como se dibuja cda elemento de la lista 
      <Text style={styles.item}>{item.nombre}</Text>   //En este caso, cada item del arreglo se muestra como un texto con su nombre 
      )}
      ListHeaderComponent={() => (
          <Text style={styles.headerFooter}>Inicio de la lista de estudiantes</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.headerFooter}>Fin de la lista de estudiantes</Text> //nos sirven para poner titulos o separadores 
        )}
      />

      <Text style={[styles.titulo, { marginTop: 30 }]}>SectionList (Lista con secciones)</Text>
      <SectionList
      sections={materias}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={styles.item}>- {item}</Text>}
      renderSectionHeader={({ section }) => (
      <Text style={styles.sectionHeader}>{section.titulo}</Text>
      )}
      //stickySectionHeadersEnabled
      ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        SectionSeparatorComponent={() => (
          <View style={styles.sectionSeparator} />
        )}

      />
      </View>
    )
}

const styles = StyleSheet.create({
      container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#F5F5F5"
      },
      titulo: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10
      },
      item: {
      fontSize: 16,
      backgroundColor: "#ffffff",
      padding: 10,
      marginVertical: 4,
      borderRadius: 8
      },
      sectionHeader: {
      fontSize: 18,
      fontWeight: "bold",
      backgroundColor: "#E0E0E0",
      padding: 8,
      marginTop: 10,
      borderRadius: 8
      },
      separator: {
      height: 8,
      },
      sectionSeparator: {
      height: 15,
      },
      headerFooter: {
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'italic',
        color: '#555',
        marginVertical: 6,
      },
});