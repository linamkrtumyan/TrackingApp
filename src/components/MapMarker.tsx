import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';
import {Transports} from '../models';


const MapMarker = (props: Transports) => {
  const {transport} = props;

  const MarkerImage = () => {
    switch (transport.categoryId) {
      case 1:
        return <Image source={require('../assets/images/car.png')} />;
      case 2:
        return <Image source={require('../assets/images/greencar.png')} />;
      case 3:
        return <Image source={require('../assets/images/garbagetruck.png')} />;
    }
  };

  return (
    <Marker
      draggable
      coordinate={{
        latitude: Number(transport.latitude),
        longitude: Number(transport.longitude),
      }}
      title={`Transport# ${transport.id}`}
      description={transport.driver}>
      <MarkerImage />
    </Marker>
  );
};

export default MapMarker;
