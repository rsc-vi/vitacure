import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

const lista_de_consultas = [
  {
    medico: { nome: 'Dr. Eduardo Rubio' },
    especializacao: 'Cardiologista',
    data: '14/12',
    horario: '07:00h',
  },
  {
    medico: { nome: 'Dr. Carlos Corval' },
    especializacao: 'Clinico geral',
    data: '15/12',
    horario: '08:30h',
  },
  {
    medico: { nome: 'Dr. José Roselito' },
    especializacao: 'Dermatologista',
    data: '16/12',
    horario: '09:00h',
  },
];

const Consulta = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // await signOut(auth);
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Consultas </Text>
        <IconButton
          icon="plus-circle"
          iconColor="#FF0000"
          size={20}
          onPress={() => console.log('Plus pressed')}
        />
        <IconButton
          icon="minus-circle"
          iconColor="#0000FF"
          size={20}
          onPress={() => console.log('Minus pressed')}
        />
      </View>
      <FlatList
        data={lista_de_consultas}
        keyExtractor={(item) => item.medico.nome}
        renderItem={({ item }) => (
          <Card style={styles.itemCard}>
            <View style={styles.cardContent}>
              <Text style={styles.itemText}>
                {item.especializacao} - {item.data}
              </Text>
              <Text style={styles.itemText}>
                {item.medico.nome} - {item.horario}
              </Text>
            </View>
          </Card>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Voltar" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row', // Alinha o texto e os ícones horizontalmente
    alignItems: 'center', // Centraliza verticalmente
  },
  title: {
    fontSize: 24,
    marginRight: 10, // Espaçamento entre o texto e o ícone
  },
  itemText: {
    fontSize: 18,
    marginVertical: 2, // Menor espaçamento vertical entre os textos
  },
  itemCard: {
    marginVertical: 8,
    padding: 10, // Adiciona um pouco de padding ao card
  },
  cardContent: {
    flexDirection: 'column', // Alinha os textos verticalmente
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Consulta;
