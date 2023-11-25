import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const items = [
  { title: 'Saldo', currency: 'R$', balance: '15.548,56' },
  { title: 'Gastos', currency: 'R$', balance: '854,00' },
];

// 0 - despesas // 1 - receita / entradas
const list = [
  { id: 1, label: 'Boleto', value: '300,90', date: '25/11/2023', type: 0 },
  { id: 2, label: 'Pix', value: '454,90', date: '25/11/2023', type: 1 },
  { id: 3, label: 'Salário', value: '7,200', date: '25/11/2023', type: 1 },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Yasmin Lopes"/>

      <Balance items={items}/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}/> }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
