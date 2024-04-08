import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Image source={require('/home/alunoifal/Documentos/GitHub/vitacure/assets/logovitacure-Photoroom.png')} 
      style={{width:100, height: 100}} >
        
      </Image>
      
      <View>
        <View style={styles.login}>
          
          <Text>Login:</Text>
          <Text>Senha:</Text>
          <StatusBar style="auto" />

             <Button title="Acessar" />
      </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    borderWidth: 1,
    padding: 110,
    backgroundColor: 'white'
  }
});
