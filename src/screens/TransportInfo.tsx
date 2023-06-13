import React from 'react';
import {Text, TouchableOpacity, View, Linking, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

import {transportsAPI} from '../services/TransportService';
import TransportMap from '../components/TransportMap';

const TransportInfo = () => {
  const route: RouteProp<{params: {id: number}}, 'params'> = useRoute();
  const {id} = route.params;

  const messageText =
    'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';

  const {data: transport, isLoading} =
    transportsAPI.useFetchTransportByIdQuery(id);
  const {data: categories} = transportsAPI.useFetchCategoriesQuery();

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleMessage = (phone: string) => {
    Linking.openURL(`whatsapp://send?text=${messageText}&phone=${phone}`);
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      {transport && (
        <View>
          <TransportMap transport={transport} />
          <View style={styles.sectionContainer}>
            <Text style={styles.text}>{transport.driver}</Text>
            {categories &&
              categories
                .filter(cat => cat.id === transport.categoryId)
                .map(c => {
                  return (
                    <Text style={styles.text} key={c.id}>
                      {c.name}
                    </Text>
                  );
                })}
            <Text style={styles.text}>{transport.phoneNumber}</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleCall(transport.phoneNumber)}>
                <Text>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleMessage(transport.phoneNumber)}>
                <Text>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 320,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    borderRadius: 15,
    marginVertical: 2,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#93e393ed',
    borderRadius: 10,
    flex: 1,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 2,
  },
});

export default TransportInfo;
