import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { auth, db } from '../firebaseConfig';  // Certifique-se de que o caminho está correto
import { addDoc, collection } from 'firebase/firestore';

const Create = () => {
  const [especializacao, setEspecializacao] = useState('');
  const [nomeMedico, setNomeMedico] = useState('');
  const [crmMedico, setCrmMedico] = useState('');
 // const [dataHora, setDataHora] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  /**
   * Função para criar uma nova consulta.
   */
  const handleCriar = async () => {
    try {
      setLoading(true);

      await addDoc(collection(db, 'consultas'), {
        especializacao: especializacao,
        nomeMedico: nomeMedico,
        crmMedico: crmMedico,
        dataHora: new Date(dataHora),  // Convertendo a data para o formato adequado
        idUsuario: user.uid,
      });

      // Após criar, navegar para a tela de consultas
      router.replace('/consultas');
    } catch (error) {
      console.error(error.code);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="blue" />
      <View style={styles.header}>
        <Text style={styles.title}>Nova Consulta</Text>
      </View>
      <TextInput
        label="Especialização"
        value={especializacao}
        onChangeText={setEspecializacao}
        style={styles.input}
      />
      <TextInput
        label="Nome do Médico"
        value={nomeMedico}
        onChangeText={setNomeMedico}
        style={styles.input}
      />
      <TextInput
        label="CRM do Médico"
        value={crmMedico}
        onChangeText={setCrmMedico}
        style={styles.input}
      />
      <TextInput
        label="Data e Hora"
        value={dataHora}
        onChangeText={setDataHora}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleCriar} loading={loading} style={styles.button}>
        Criar Consulta
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: "#00B4D8",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  input: {
    width: '80%',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default Create;
