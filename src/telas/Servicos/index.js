import React from 'react';
import { Text, FlatList, StatusBar, SafeAreaView } from 'react-native';

import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: 'banho',
    preco: 79.90,
    descricao: 'Banho'
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.9,
    descricao: 'Uma dose da vacina V4'
  },
  {
    id: 3,
    nome: 'vacina anti-rabica',
    preco: 99.9,
    descricao: 'Uma dose da vacina anti-rabica'
  }
]

export default function Servicos(){
  return <SafeAreaView>
    <StatusBar />
    <Text>Serviços!</Text>
    <FlatList
      data={servicos}
      removeClippedSubviews={false}
      renderItem={({item}) => <Item {...item} />}
      keyExtractor={({id}) => String(id)}
    />
  </SafeAreaView>
}