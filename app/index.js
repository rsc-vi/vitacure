import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { Avatar, Card } from 'react-native-paper';

const Home = () => {
  const user = auth.currentUser;
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      {/* Imagem posicionada no canto superior direito */}
      <Image
        source={require('./../assets/logovitacure-Photoroom.png')}
        style={styles.image}
      />

      <View style={styles.logoutButton}>
        <Button title="Sair" onPress={handleLogout} />
      </View>

      <View style={styles.card}>
        <Text style={styles.welcome}>Seja bem-vindo(a), {user?.email}</Text>
      </View>

      {/* Adicionando uma view com flexDirection: 'row' para os avatares e Pressable ficarem lado a lado */}
      <View style={styles.avatarContainer}>
        <Avatar.Image size={64} source={require('../assets/motoqueiro.png')} style={styles.avatar} />
        <Avatar.Image size={64} source={require('../assets/bater-papo.png')} style={styles.avatar} />
        <Avatar.Image size={64} source={require('../assets/receita.png')} style={styles.avatar} />
        <Avatar.Image size={64} source={require('../assets/farmacia.png')} style={styles.avatar} />

        <Pressable onPress={() => router.push('/consulta')}>
          <Avatar.Image size={64} source={require('../assets/consulta.png')} />
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    position: 'absolute',  // Faz com que a imagem seja posicionada de forma absoluta
    top: 10,               // Distância do topo da tela
    right: 10,             // Distância da borda direita da tela
    width: 200,            // Ajuste o tamanho conforme necessário
    height: 100,           // Ajuste o tamanho conforme necessário
    resizeMode: 'contain', // Garante que a imagem não distorça
  },
  logoutButton: {
    position: 'absolute',
    top: 10,
    left: 10,
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
    textAlign: 'center',
  },
  avatarContainer: {
    flexDirection: 'row', // Organiza os elementos em linha
    justifyContent: 'center', // Alinha os itens no centro
    alignItems: 'center', // Alinha verticalmente no centro
    marginBottom: 20, // Espaço abaixo dos avatares
  },
  avatar: {
    marginLeft: 10, // Adiciona um espaço pequeno entre os avatares
  },
});

export default Home;
