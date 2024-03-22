import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimensions';

export default function Cards({name, image , navigation}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => navigation.navigate('Details',{name})}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 6, width: deviceWidth / 4}}
        imageStyle={{borderRadius: 10}}
      />
      <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <Text
          style={{
            fontSize: 22,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
