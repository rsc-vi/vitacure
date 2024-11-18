import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { IconButton, List } from 'react-native-paper';
import { useRouter } from 'expo-router';

const lista_de_consultas = [
  {
    medico: { nome: 'Dra. Adriana Lima' },
    especializacao: 'Psicologa',
    data: '15/Mar/2024.',
    horario: '08h30',
  },
  {
    medico: { nome: 'Dr. José Roselito' },
    especializacao: 'Ortopedista',
    data: '08/Abr/2024.',
    horario: '09h00',
  },
  {
    medico: { nome: 'Dr. João Silva' },
    especializacao: 'Clinico Geral',
    data: '27/Jul/2024.',
    horario: '14h20',
  },
  {
    medico: { nome: 'Dr. Jair Pinto' },
    especializacao: 'Urologista',
    data: '20/Set/2024.',
    horario: '09h00',
  },
  {
    medico: { nome: 'Dr. Aurelio Paz' },
    especializacao: 'Alergologista',
    data: '25/Nov/2024.',
    horario: '10h00',
  },
  {
    medico: { nome: 'Dr. Eduardo Rubio' },
    especializacao: 'Cardiologista',
    data: '14/Dez/2024.',
    horario: '07h00',
  },
  {
    medico: { nome: 'Dr. Marcelo Costa' },
    especializacao: 'Dermatologista',
    data: '19/Dez/2024.',
    horario: '09h30',
  },

  {
    medico: { nome: 'Dra. Andressa Mello' },
    especializacao: 'Nutricionista',
    data: '03/Jan/2025.',
    horario: '08h30',
  },

  {
    medico: { nome: 'Dr. Murilo Almeida' },
    especializacao: 'Oftalmologista',
    data: '04/Jan/2025.',
    horario: '10h00',
  },

  {
    medico: { nome: 'Dra. Adriana Lima' },
    especializacao: 'Psicologa',
    data: '12/Jan/2025.',
    horario: '08h30',
  },

  {
    medico: { nome: 'Dra. Andressa Mello' },
    especializacao: 'Nutricionista',
    data: '08/Fev/2025.',
    horario: '08h30',
  },

  {medico: { nome: 'Dr. Eduardo Rubio' },
    especializacao: 'Cardiologista',
    data: '25/Fev/2025.',
    horario: '11h00',
  },


];

const Consulta = () => {
  const router = useRouter();

  const handleLogout = async () => {
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
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
          <List.Item
            title={item.especializacao}
            description={`${item.medico.nome}`}
            descriptionNumberOfLines={1}
            right={props => (
              <View style={styles.rightContainer}>
                <Text style={styles.dateText}>{item.data}</Text>
                <Text style={styles.timeText}>{item.horario}</Text>
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
});

export default Consulta;
