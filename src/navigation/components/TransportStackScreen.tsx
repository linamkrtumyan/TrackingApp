import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Transports from '../../screens/Transports';
import TransportInfo from '../../screens/TransportInfo';

const TransportStack = createNativeStackNavigator();

const TransportStackScreen = () => {
  return (
    <TransportStack.Navigator initialRouteName="Transports">
      <TransportStack.Screen
        name="Transports"
        component={Transports}
        options={{headerShown: false}}
      />
      <TransportStack.Screen
        name="TransportInfo"
        component={TransportInfo}
        options={{headerShown: false}}
      />
    </TransportStack.Navigator>
  );
};

export default TransportStackScreen;
