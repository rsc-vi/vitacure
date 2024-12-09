import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Text, TextInput, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Cadastrar = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar o ActivityIndicator
  const router = useRouter();

  const handleCadastrarUserFirebase = async () => {
    if (password !== repetirSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    setLoading(true); // Mostra o ActivityIndicator
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      // Usuário cadastrado com sucesso
      const user = userCredential.user;
      console.log(user);
      router.replace('/index');
    } catch (error) {
      Alert.alert('Erro', error.message);
      console.error(error.code);
      console.error(error.message);
    } finally {
      setLoading(false); // Esconde o ActivityIndicator
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="blue" />
      <Image
        source={require('./../assets/logovitacure-Photoroom.png')}
        style={styles.image}
      />
      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir senha"
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry={true}
        />
        <Button title="Cadastrar" onPress={handleCadastrarUserFirebase} />
        <Button title="Voltar" onPress={() => router.replace('/')} />

        {/* ActivityIndicator para carregamento */}
        {loading && <ActivityIndicator size="large" color="blue" style={styles.loader} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  login: {
    borderWidth: 1,
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  loader: {
    marginTop: 10,
  },
});

export default Cadastrar;
