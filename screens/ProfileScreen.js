import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const [displayText, setDisplayText] = useState('Perfil');
  
  useEffect(() => {
    if (route.params?.message) {
      setDisplayText(route.params.message);
    }
  }, [route.params?.message]);

  const handleButtonPress = (param) => {
    navigation.setParams({ message: param });
    setDisplayText(param);
  };

  return (
    <ScrollView 
      style={styles.scrollView} 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true}
    >
      <Text style={styles.title}>{displayText}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Usuario Activo')}
        >
          <Text style={styles.buttonText}>Ver Estado</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Información del Perfil')}
        >
          <Text style={styles.buttonText}>Ver Info</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Perfil Actualizado')}
        >
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Cambiar Avatar')}
        >
          <Text style={styles.buttonText}>Avatar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Editar Biografía')}
        >
          <Text style={styles.buttonText}>Biografía</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Mis Publicaciones')}
        >
          <Text style={styles.buttonText}>Publicaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Seguidores')}
        >
          <Text style={styles.buttonText}>Seguidores</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    minHeight: 1000,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
