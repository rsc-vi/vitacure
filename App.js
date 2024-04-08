import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingRight: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  login: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logovitacure-Photoroom.png')}
        style={[styles.image, {alignSelf: 'flex-end'}]} 
      />
      <View style={styles.login}>
        <Text>Login:</Text>
        <Text>Senha:</Text>
        <StatusBar style="auto" />
        <Button title="Acessar" />
      </View>
    </View>
  );
}