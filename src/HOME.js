// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import {deviceHeight, deviceWidth} from './Dimensions';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Cards from './Cards';

// export default function HOME() {
//   const [city, setCity] = useState('');
//   const cities = [
//     {
//       name: 'Lahore',
//       image: require('../assets/images/Lahore.jpg')
//     },
//     {
//       name: 'Islamabad',
//       image: require('../assets/images/Islamabad.jpg')
//     },
//     {
//       name: 'Perth',
//       image: require('../assets/images/Perth.jpg')
//     },
//     {
//       name: 'London',
//       image: require('../assets/images/London.jpg')
//     },
//     {
//       name: 'Canada',
//       image: require('../assets/images/Canada.jpg')
//     },
//     {
//       name: 'Dubai',
//       image: require('../assets/images/Dubai.jpg')
//     },
//   ];
//   return (
//     <View>
//       <ImageBackground
//         source={require('../assets/images/Home.jpg')}
//         style={{height: deviceHeight, width: deviceWidth}}
//         imageStyle={{opacity: 0.5, backgroundColor: 'black'}}
//       />
//       <View
//         style={{
//           position: 'absolute',
//           paddingHorizontal: 10,
//           paddingVertical: 5,
//         }}>
//         <View style={{}}>
//           <Icon name="menu" size={46} color="white" />
//         </View>
//         <View style={{paddingHorizontal: 20, marginTop: 110}}>
//           <Text
//             style={{
//               fontSize: 40,
//               color: 'purple',
//               marginBottom: 5,
//               fontWeight: 'bold',
//             }}>
//             Hello Folks{' '}
//           </Text>
//           <Text
//             style={{
//               fontSize: 17,
//               color: 'white',
//               fontWeight: 'bold',
//               elevation: 100,
//             }}>
//             Enter the city name to know the temperature
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               borderWidth: 2,
//               borderRadius: 25,
//               borderColor: 'white',
//               marginTop: 20,
//               paddingHorizontal: 10,
//             }}>
//             <TextInput
//               value={city}
//               onChangeText={val => setCity(val)}
//               placeholder="CITY NAME"
//               placeholderTextColor="white"
//               style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
//             />
//             <TouchableOpacity onPress={() => {}}>
//               <Icon name="search" size={20} color="white" />
//             </TouchableOpacity>
//           </View>
//           <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 10}}>
//             My Locations
//           </Text>
//           <FlatList   data={cities} renderItem={(item)=>(
//             <Cards name={item.name}  image={item.image}/>
//           )}

//           />

//         </View>
//       </View>
//     </View>
//   );
// }

// // HOME component
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import { deviceHeight, deviceWidth } from './Dimensions';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Cards from './Cards';

// export default function HOME() {
//   const [city, setCity] = useState('');
//   const cities = [
//     {
//       name: 'Lahore',
//       image: require('../assets/images/Lahore.jpg'),
//     },
//     {
//       name: 'Islamabad',
//       image: require('../assets/images/Islamabad.jpg'),
//     },
//     {
//       name: 'Perth',
//       image: require('../assets/images/Perth.jpg'),
//     },
//     {
//       name: 'London',
//       image: require('../assets/images/London.jpg'),
//     },
//     {
//       name: 'Canada',
//       image: require('../assets/images/Canada.jpg'),
//     },
//     {
//       name: 'Dubai',
//       image: require('../assets/images/Dubai.jpg'),
//     },
//   ];

//   return (
//     <View>
//       <ImageBackground
//         source={require('../assets/images/Home.jpg')}
//         style={{ height: deviceHeight, width: deviceWidth }}
//         imageStyle={{ opacity: 0.5, backgroundColor: 'black' }}
//       />
//       <View
//         style={{
//           position: 'absolute',
//           paddingHorizontal: 10,
//           paddingVertical: 5,
//         }}>
//         <View style={{}}>
//           <Icon name="menu" size={46} color="white" />
//         </View>
//         <View style={{ paddingHorizontal: 20, marginTop: 110 }}>
//           <Text
//             style={{
//               fontSize: 40,
//               color: 'purple',
//               marginBottom: 5,
//               fontWeight: 'bold',
//             }}>
//             Hello Folks{' '}
//           </Text>
//           <Text
//             style={{
//               fontSize: 17,
//               color: 'white',
//               fontWeight: 'bold',
//               elevation: 100,
//             }}>
//             Enter the city name to know the temperature
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               borderWidth: 2,
//               borderRadius: 25,
//               borderColor: 'white',
//               marginTop: 20,
//               paddingHorizontal: 10,
//             }}>
//             <TextInput
//               value={city}
//               onChangeText={(val) => setCity(val)}
//               placeholder="CITY NAME"
//               placeholderTextColor="white"
//               style={{ paddingHorizontal: 10, color: 'white', fontSize: 16 }}
//             />
//             <TouchableOpacity onPress={() => {}}>
//               <Icon name="search" size={20} color="white" />
//             </TouchableOpacity>
//           </View>
//           <Text style={{ color: 'white', fontSize: 20, paddingHorizontal: 10 }}>
//             My Locations
//           </Text>
//           <FlatList
//             data={cities}
//             renderItem={({ item }) => <Cards name={item.name} image={item.image} />}
//             keyExtractor={(item, index) => index.toString()} // Key extractor function
//           />
//         </View>
//       </View>
//     </View>
//   );
// }



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';



// HOME component
export default function HOME(props) {

  const [city, setCity] = useState('');
  const cities = [
    {
      name: 'Lahore',
      image: require('../assets/images/Lahore.jpg'),
    },
    {
      name: 'Islamabad',
      image: require('../assets/images/Islamabad.jpg'),
    },
    {
      name: 'Perth',
      image: require('../assets/images/Perth.jpg'),
    },
    {
      name: 'London',
      image: require('../assets/images/London.jpg'),
    },
    {
      name: 'Canada',
      image: require('../assets/images/Canada.jpg'),
    },
    {
      name: 'Dubai',
      image: require('../assets/images/Dubai.jpg'),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/Home.jpg')}
        style={{ height: deviceHeight, width: deviceWidth }}
        imageStyle={{ opacity: 0.5, backgroundColor: 'black' }}
      />
      <View
        style={{
          position: 'absolute',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <View style={{}}>
          <Icon name="menu" size={46} color="white" />
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 110 }}>
          <Text
            style={{
              fontSize: 40,
              color: 'purple',
              marginBottom: 5,
              fontWeight: 'bold',
            }}>
            Hello Folks
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: 'white',
              fontWeight: 'bold',
              elevation: 100,
            }}>
            Enter the city name to know the temperature
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 2,
              borderRadius: 25,
              borderColor: 'white',
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Enter City Name"
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: 'white', fontSize: 16 }}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name:city})}>
              <Icon name="search" size={20} color="white" />
            </TouchableOpacity>
          </View>
         
          
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingHorizontal: 10,
              marginTop: 230,
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            My Locations
          </Text>

          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation} />
            )}
            // keyExtractor={(item, index) => index.toString()} // Key extractor function
          />
        </View>
      </View>
    </View>
  );
}

// git


