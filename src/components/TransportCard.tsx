import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {Transports} from '../models';
import {transportsAPI} from '../services/TransportService';

const TransportCard = (props: Transports) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const {transport} = props;
  const {id} = transport;

  const {data: categories} = transportsAPI.useFetchCategoriesQuery();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TransportInfo', {id})}
      style={styles.container}>
      <Text>Transport #{transport.id}</Text>
      <Text>{transport.driver}</Text>
      {categories &&
        categories
          .filter(cat => cat.id === transport.categoryId)
          .map(c => {
            return <Text key={c.id}>{c.name}</Text>;
          })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
});

export default TransportCard;
