import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TransportsMap from '../screens/TransportsMap';
import Settings from '../screens/Settings';
import TransportStackScreren from './components/TransportStackScreen';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const {t} = useTranslation();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name={t('transportList')}
            component={TransportStackScreren}
            options={{
              tabBarIcon: () => (
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/icons/list.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name={t('map')}
            component={TransportsMap}
            options={{
              tabBarIcon: () => (
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/icons/map.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name={t('settings')}
            component={Settings}
            options={{
              tabBarIcon: () => (
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/icons/settings.png')}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;
