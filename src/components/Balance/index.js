import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Balance({ items}) {
  const getBalanceStyle = (title) => {
    if (title === 'Saldo') {
      return styles.balance;
    } else if (title === 'Gastos') {
      return styles.expenses;
    }
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemTitle}>{item.title}</Text>

          <View style={styles.content}>
            <Text style={styles.currencySymbol}>{item.currency}</Text>
            <Text style={getBalanceStyle(item.title)}>{item.balance}</Text>
          </View>

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    color: '#dadada',
    fontSize: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    color: '#dadada',
    marginRight: 6
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71',
  },
  expenses: {
    color: '#e74c3c',
    fontSize: 22,
  }
});