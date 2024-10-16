import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { Avatar } from 'react-native-paper';

const Home = () => {
  const user = auth.currentUser;
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcome}>Seja bem-vindo(a), {user?.email}</Text>
      </View>

      {/* Avatar pressionável com navegação diretamente no onPress */}
      <Pressable onPress={() => router.push('/consulta')}>
        <Avatar.Image size={64} source={require('../assets/consulta.png')} />
      </Pressable>

      <View style={styles.buttonContainer}>
        <Button title="Sair" onPress={handleLogout} />
      </View>
      
      <StatusBar style="auto" />

      {/* Outro Avatar, verifique se o caminho da imagem está correto */}
      <Avatar.Image size={64} source={require('../assets/motoqueiro.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingTop: 50,
  },
  card: {
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 24,
    color: 'black',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default Home;
