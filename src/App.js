import React from 'react';
import {FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CharactersScreen from './screens/CharactersScreen';

const Tab = createBottomTabNavigator();

function LocationsScreen() {
  return null;
}
function EpisodesScreen() {
  return null;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Characters" component={CharactersScreen} />
          <Tab.Screen name="Locations" component={LocationsScreen} />
          <Tab.Screen name="Episodes" component={EpisodesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
