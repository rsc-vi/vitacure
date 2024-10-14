import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';



const lista_de_consultas = [
    
    {
      medico: { nome: 'Dr. Eduardo' },
      especializacao: 'Clinico geral',
      data: '14/12',
      horario: '07:00h',
    },
    {
      medico: { nome: 'Dr. Carlos' },
      especializacao: 'Clinico geral',
      data: '15/12',
      horario: '08:30h',
    },
    {
      medico: { nome: 'Dr. José' },
      especializacao: 'Dermatologista',
      data: '16/12',
      horario: '09:00h',
    },

  ];
  
  const Consulta = () => {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>Consultas + - </Text>
        <FlatList
          data={lista_de_consultas}
          keyExtractor={(item) => item.medico.nome} // Chave única por nome do médico
          renderItem={({ item }) => (
            <Text style={styles.itemText}>
              Consulta com {item.medico.nome} - {item.especializacao} {'\n'}
              Hospital VITACURE - Maceió {item.data}, {item.horario}
            </Text>
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
  },
  itemText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Consulta;
