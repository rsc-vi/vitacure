import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

// Dados dos remédios (nome e imagem)
const lista_de_remedios = [
  {
    nome: 'Paracetamol',
    imagem: require('../assets/paracetamol-re.png'), // Caminho da imagem local
  },
  {
    nome: 'Ibuprofeno',
    imagem: require('../assets/ibuprofeno.png'), // Caminho da imagem local
  },
  {
    nome: 'Dipirona',
    imagem: require('../assets/dipirona.png'), // Caminho da imagem local
  },
  {
    nome: 'Amoxicilina',
    imagem: require('../assets/amoxicilina.png'), // Caminho da imagem local
  },
  {
    nome: 'Loratadina',
    // imagem: require('../assets/loratadina.png'), // Caminho da imagem local
  },
  {
    nome: 'Omeprazol',
    // imagem: require('../assets/omeprazol.png'), // Caminho da imagem local
  },
  {
    nome: 'Ranitidina',
    // imagem: require('../assets/ranitidina.png'), // Caminho da imagem local
  },
];

const Remedios = () => {
  const router = useRouter();

  const handleLogout = async () => {
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        iconColor="#00ffff"
        size={30}
        onPress={handleLogout}
        style={styles.backButton} // Estilo para o botão "Voltar"
      />
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Remédios</Text>
      </View>

      <FlatList
        data={lista_de_remedios}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#00B4D8",
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '90%',
    justifyContent: 'flex-start',
  },
  cardImage: {
    width: '50%',
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  cardText: {
    fontSize: 18,
    color: 'black',
  },
});

export default Remedios;
