import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
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
      {/* Configuração da StatusBar */}
      <StatusBar style="dark" backgroundColor="blue" />

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

        <Pressable onPress={() => router.push('/farmacia')}>
          <Avatar.Image size={64} source={require('../assets/farmacia.png')} style={styles.avatar} />
        </Pressable>

        <Pressable onPress={() => router.push('/consulta')}>
          <Avatar.Image size={64} source={require('../assets/consulta.png')} />
        </Pressable>
      </View>

      {/* Card components com imagens placeholder */}
     

      {/* Adicionando quatro novos cards abaixo dos avatares, agora com imagens */}
      <View style={styles.newCardContainer}>
        <View style={styles.newCard}>
          <Image 
            source={require('../assets/poliomielite.png')} 
            style={styles.newCardImage} 
          />
        </View>
        <View style={styles.newCard}>
          <Image 
            source={require('../assets/setembroamarelo.png')} 
            style={styles.newCardImage} 
          />
        </View>
        <View style={styles.newCard}>
          <Image 
            source={require('../assets/rosa.png')} 
            style={styles.newCardImage} 
          />
        </View>
        <View style={styles.newCard}>
          <Image 
            source={require('../assets/novembroazul.png')} 
            style={styles.newCardImage} 
          />
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  cardComponent: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
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
    width: '100%',   // Ajuste a largura da imagem
    height: 50,     // Ajuste a altura da imagem conforme necessário
    borderRadius: 10,
    resizeMode: 'cover', // Ajusta a imagem para cobrir o espaço sem distorcer
  },
});

export default Home;
