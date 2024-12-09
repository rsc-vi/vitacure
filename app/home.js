import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image, Alert } from 'react-native';
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

  // Função para exibir o alerta
  const handleNotImplemented = () => {
    Alert.alert('Aviso', 'Função ainda não implementada.');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="blue" />

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

      <View style={styles.avatarContainer}>
        {/* Avatares com alert */}
        <Pressable onPress={handleNotImplemented}>
          <Avatar.Image size={64} source={require('../assets/motoqueiro.png')} style={styles.avatar} />
        </Pressable>
        <Pressable onPress={handleNotImplemented}>
          <Avatar.Image size={64} source={require('../assets/bater-papo.png')} style={styles.avatar} />
        </Pressable>
        <Pressable onPress={handleNotImplemented}>
          <Avatar.Image size={64} source={require('../assets/receita.png')} style={styles.avatar} />
        </Pressable>
        <Pressable onPress={() => router.push('/farmacia')}>
          <Avatar.Image size={64} source={require('../assets/farmacia.png')} style={styles.avatar} />
        </Pressable>
        <Pressable onPress={() => router.push('/consulta')}>
          <Avatar.Image size={64} source={require('../assets/consulta.png')} />
        </Pressable>
      </View>

      <View style={styles.newCardContainer}>
        <View style={styles.newCard}>
          <Pressable onPress={handleNotImplemented}>
            <Image 
              source={require('../assets/poliomielite.png')} 
              style={styles.newCardImage} 
            />
          </Pressable>
        </View>
        <View style={styles.newCard}>
          <Pressable onPress={handleNotImplemented}>
            <Image 
              source={require('../assets/setembroamarelo.png')} 
              style={styles.newCardImage} 
            />
          </Pressable>
        </View>
        <View style={styles.newCard}>
          <Pressable onPress={handleNotImplemented}>
            <Image 
              source={require('../assets/rosa.png')} 
              style={styles.newCardImage} 
            />
          </Pressable>
        </View>
        <View style={styles.newCard}>
          <Pressable onPress={handleNotImplemented}>
            <Image 
              source={require('../assets/novembroazul.png')} 
              style={styles.newCardImage} 
            />
          </Pressable>
        </View>
      </View>
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
    position: 'absolute', 
    top: 10, 
    right: 10, 
    width: 200, 
    height: 100, 
    resizeMode: 'contain',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    marginLeft: 10,
  },
  newCardContainer: {
    width: '100%',
    padding: 20,
  },
  newCard: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  newCardImage: {
    width: '100%', 
    height: 50, 
    borderRadius: 10,
    resizeMode: 'cover', 
  },
});

export default Home;
