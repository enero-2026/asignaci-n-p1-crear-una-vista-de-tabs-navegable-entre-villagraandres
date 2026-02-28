import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function SettingsScreen({ route, navigation }) {
  const [displayText, setDisplayText] = useState('Configuración');
  
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
          onPress={() => handleButtonPress('Notificaciones Activadas')}
        >
          <Text style={styles.buttonText}>Notificaciones</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Tema Oscuro')}
        >
          <Text style={styles.buttonText}>Cambiar Tema</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Idioma: Español')}
        >
          <Text style={styles.buttonText}>Idioma</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Privacidad')}
        >
          <Text style={styles.buttonText}>Privacidad</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Seguridad')}
        >
          <Text style={styles.buttonText}>Seguridad</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Ayuda y Soporte')}
        >
          <Text style={styles.buttonText}>Ayuda</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Acerca de')}
        >
          <Text style={styles.buttonText}>Acerca de</Text>
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
    backgroundColor: '#FF9500',
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
