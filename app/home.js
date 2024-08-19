import { Text, View } from 'react-native';
import {React} from 'react'
import { Link } from 'expo-router';
import {auth} from '../firebaseConfig'

const Home = () => {
  const user  = auth.currentUser



  return (
    <View>
      <Text>Home</Text>
      <Text>Seja bem-vindo(a), {user.email}</Text>
      
    </View>
  );

}

export default Home;