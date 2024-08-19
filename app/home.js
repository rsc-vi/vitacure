import { Button, Text, View } from 'react-native';
import {React} from 'react'
import { Link, useRouter } from 'expo-router';
import {auth} from '../firebaseConfig'
import { signOut } from 'firebase/auth';

const Home = () => {
  const user  = auth.currentUser
  const router = useRouter();

const handleLogout = async () => {
  await signOut(auth);
  router.replace('/');
}

  return (
    <View>
      <Text>Home</Text>
      <Text>Seja bem-vindo(a), {user.email}</Text>
    <Button onPress={handleLogout} title="Sair"/>
    </View>

  );

}

export default Home;
