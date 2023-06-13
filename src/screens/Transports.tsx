import React from 'react';
import {Text, ScrollView} from 'react-native';

import {transportsAPI} from '../services/TransportService';
import TransportCard from '../components/TransportCard';
import Filter from '../components/Filter';

const Transports = () => {
  const {data: transports, isLoading} =
    transportsAPI.useFetchAllTransportsQuery(0);

  const [trigger, {data: filteredTransports}] =
    transportsAPI.useLazyFetchAllTransportsQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView>
      <Filter trigger={trigger} />
      {filteredTransports
        ? filteredTransports.map(transport => (
            <TransportCard key={transport.id} transport={transport} />
          ))
        : transports?.map(transport => (
            <TransportCard key={transport.id} transport={transport} />
          ))}
    </ScrollView>
  );
};

export default Transports;
