import React from 'react';
import {Image, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Character({name, status, image, gender}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#aaa',
        margin: 2,
        padding: 5,
        borderRadius: 2,
      }}>
      <Image
        style={{
          backgroundColor: 'gray',
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
        source={{uri: image}}
      />
      <View
        style={{
          marginHorizontal: 5,
          width: 12,
          height: 12,
          backgroundColor:
            status == 'Dead' ? 'red' : status == 'Alive' ? 'green' : 'gray',
          borderRadius: 6,
        }}
      />
      <Text style={{fontSize: 20, marginHorizontal: 2}}>{name}</Text>
      {gender == 'Female' ? (
        <Ionicons name="female" size={20} />
      ) : gender == 'Male' ? (
        <Ionicons name="male" size={20} />
      ) : gender == 'Genderless' ? (
        <Fontisto name="genderless" size={20} />
      ) : null}
    </View>
  );
}
