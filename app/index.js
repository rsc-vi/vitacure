import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { auth } from './../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLoginFirebase = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      // Usuário autenticado com sucesso
      const user = userCredential.user;
      console.log(user);
      router.replace('/home');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  const handleCadastrarFirebase = () => {
    router.replace('/cadastrar');
  };

  let [fontsLoaded] = useFonts({
    Inder_400Regular,
  });

  // Verifica se as fontes foram carregadas antes de renderizar
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
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
        <Button title="Acessar Firebase" onPress={handleLoginFirebase} />
        <Text></Text>
        <Button title="Cadastrar" onPress={handleCadastrarFirebase} />
      </View>
    </View>
  );
}

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
});
