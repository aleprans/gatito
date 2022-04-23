import React from 'react';
import { FlatList } from 'react-native';

import Item from './Item';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const servicos = [
  {
    id: 1,
    nome: 'banho',
    preco: 79.9,
    descricao: 'Banho',
    quantidade: 1,
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.9,
    descricao: 'Uma dose da vacina V4',
    quantidade: 2
  },
  {
    id: 3,
    nome: 'vacina anti-rabica',
    preco: 99.9,
    descricao: 'Uma dose da vacina anti-rabica',
    quantidade: 1
  }
]

export default function Carrinho(){
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0)
 
  return <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={({id}) => String(id)}
      />
    </>
}