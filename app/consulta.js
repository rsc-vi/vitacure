import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IconButton, List } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { auth, db } from '../firebaseConfig';
import { getDocs, collection, query, where } from "firebase/firestore";

const Consulta = () => {
  const [consultas, setConsultas] = useState([]);
  const router = useRouter();
  const user = auth.currentUser;

  const getAllConsultas = async () => {
    try {
        console.log("1");
        const querySnapshot = await getDocs(query(collection(db, "consultas"), where("idUsuario", "==", user.uid)));
        let array = querySnapshot.docs.map((doc) => {
          const resultado = {
            id: doc.id,
            novaDataHora: doc.data().dataHora.toDate(),
            ...doc.data()
          };
          return resultado;
        });
        console.log(array);
        setConsultas(array);
    } catch (error) {
        console.error(error);
    }
  };
  
  useEffect(() => {
    getAllConsultas();
  }, []);

  const handleLogout = async () => {
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="blue" />
      <IconButton
        icon="arrow-left"
        iconColor="#000"
        size={30}
        onPress={handleLogout}
        style={styles.backButton} // Adicionando estilo para o botão "Voltar"
      />
      <View style={styles.header}>
        <Text style={styles.title}>Consultas</Text>
        <IconButton
          icon="plus-circle"
          iconColor="#FF0000"
          size={30}
          onPress={() => router.push('/create')}  // Alterado para navegar para a tela create
        />
      </View>
      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id}  // Corrigido para usar o id correto
        renderItem={({ item }) => (
          <List.Item
            title={item.especializacao}
            description={`${item.nomeMedico}`}
            descriptionNumberOfLines={1}
            right={props => (
              <View style={styles.rightContainer}>
                <Text style={styles.dateText}>{item.novaDataHora.toLocaleDateString("pt-BR")} - {item.novaDataHora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</Text>
                <Text style={styles.crmText}>CRM: {item.crmMedico}</Text>
              </View>
            )}
            style={styles.listItem}
          />
        )}
      />
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

  iconButton: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50, // Tornando a borda arredondada
    padding: 5, // Espaço entre o ícone e a borda
  },

  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginRight: 10,
  },
  listItem: {
    marginVertical: 8,
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 20,
  },
  dateText: {
    fontSize: 16,
    color: 'black',
  },
  timeText: {
    fontSize: 14,
    color: 'gray',
  },
  crmText: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
});

export default Consulta;
