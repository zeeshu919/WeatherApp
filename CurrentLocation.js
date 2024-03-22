//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


const WeatherAppLocation = () => {

    useEffect(()=>{
        requestPermission();
    },[])

    const requestPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message:
                'grant premission for location',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
            
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Access Granted you can use location');
          } else {
            console.log('Permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      };

      const getLocation=()=>{
        Geolocation.getCurrentPosition(
            (position) => {
              console.log(position);
            },
            (error) => {
             
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    return (
        <View style={styles.container}>
            <Text style={{color:'black', fontWeight:'bold'}}>Weather Location page</Text>
            <TouchableOpacity style={styles.getLocation} onPress={getLocation}> 
            <Text style={{fontSize:15, fontWeight:'bold'}}>Get Current Location</Text>
            </TouchableOpacity>
        </View>
    );
};

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccf9ff',
        borderRadius:10,
        height:"30%"
    },
    getLocation:{
        width:'90%',
        height:50,
        alignSelf:'center',
        position:'absolute',bottom:20,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:0,

    }
});


export default WeatherAppLocation;


// //import liraries
// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';

// // create a component
// const WeatherAppHome = () => {

//     useEffect(() => {
//         requestPermission();
//     }, []);

//     const requestPermission = async () => {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                     title: 'Location Permission',
//                     message: 'Grant permission for location',
//                     buttonNeutral: 'Ask Me Later',
//                     buttonNegative: 'Cancel',
//                     buttonPositive: 'OK',
//                 },
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log('Access Granted you can use location');
//             } else {
//                 console.log('Permission denied');
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     };

//     const getLocation = () => {
//         Geolocation.getCurrentPosition(
//             (position) => {
//                 console.log(position);
//             },
//             (error) => {
//                 // See error code charts below.
//                 console.log(error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <Text>WeatherAppHome</Text>
//             <TouchableOpacity style={styles.getLocation} onPress={getLocation}>
//                 <Text>Get Location</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'tomato',
//         borderRadius: 10,
//         height: "30%"
//     },
//     getLocation: {
//         width: '90%',
//         height: 50,
//         alignSelf: 'center',
//         position: 'absolute', bottom: 20,
//         backgroundColor: 'orange',
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// });

// //make this component available to the app
// export default WeatherAppHome;


