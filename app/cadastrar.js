import { Alert, Button, Image, Text, TextInput, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import {useState} from 'react'
import {auth} from '../firebaseConfig'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';




const Cadastrar = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

const handleLogout = async () => {

    
 try{ 
    setLoading(true)
    await createUserWithEmailAndPassword(auth, username, password);
    router.replace('/home');

    } catch(error){
        console.error(error.code);
        console.error(error.message);
    } finally {
        setLoading(false);
    }
}

const handleCadastrarUserFirebase = async () =>{
    try{
    const userCredential = await createUserWithEmailAndPassword(auth, username, password )
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    router.replace('/home');
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.error(errorCode);
      // console.error(errorMessage)
      Alert.alert('Erro', error.message)
    }

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

<TextInput
        style={styles.input}
        placeholder="Repetir senha"
        value={repetirSenha}
        onChangeText={setRepetirSenha}
        secureTextEntry={true}
      />

<Button title="Cadastrar" onPress={handleCadastrarUserFirebase} />

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




export default Cadastrar;
