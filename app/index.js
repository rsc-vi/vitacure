import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput, Button } from 'react-native';
import { Link } from '@react-navigation/native'; // Importe o Link correto para navegação

import { useFonts, Inder_400Regular } from '@expo-google-fonts/inder';
import { auth } from './../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function App() {

  const handleLoginFirebase = () =>{
    signInWithEmailAndPassword(auth, "dso7@aluno.ifal.edu.br", "ACAB1312" )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode);
    console.log(errorMessage);
  });
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let [fontsLoaded] = useFonts({
    Inder_400Regular,
  });

  // Verifica se as fontes foram carregadas antes de renderizar
  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = () => {
    console.log('Nome de usuário:', username);
    console.log('Senha:', password);
  };

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

        {/* <View> */}
          {/* 
            <Button title="Acessar" onPress={handleLogin} />
          </Link> */}
          {/* <Link href="/home" asChild>Acessar          </Link> */}
            {/* <Pressable>
              <Text>Acessar</Text>
            </Pressable> */}


                                 {/* </View> */}
      </View>
      <StatusBar style="auto" />
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
