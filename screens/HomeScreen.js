import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const [displayText, setDisplayText] = useState('Inicio');
  
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
          onPress={() => handleButtonPress('Botón 1 - Inicio')}
        >
          <Text style={styles.buttonText}>Botón 1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Botón 2 - Inicio')}
        >
          <Text style={styles.buttonText}>Botón 2</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Botón 3 - Inicio')}
        >
          <Text style={styles.buttonText}>Botón 3</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Botón 4 - Inicio')}
        >
          <Text style={styles.buttonText}>Botón 4</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Botón 5 - Inicio')}
        >
          <Text style={styles.buttonText}>Botón 5</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Botón 6 - Inicio')}
        >
          <Text style={styles.buttonText}>Botón 6</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Botón 7 - Inicio')}
        >
          <Text style={styles.buttonText}>Botón 7</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleButtonPress('Botón 8 - Inicio')}
        >
          <Text style={styles.buttonText}>Botón 8</Text>
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
    backgroundColor: '#007AFF',
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
