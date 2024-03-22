import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherAppHome from './CurrentLocation';
import HOME from './src/HOME';
import Details from './src/Details';


// create a component
const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name='HOME' component={HOME} />
        <Stack.Screen name='Details' component={Details} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;


// define your styles
// const styles = StyleSheet.create({
//   container: {
//     marginTop:100,
//     marginLeft:90,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightblue',
//     width:'70%',
//     height:'50%',
//     borderRadius:10
//   },
// });

//make this component available to the app

