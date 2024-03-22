import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';

export default function Details(props) {
    const [data, setData] = useState();
    const { name } = props.route.params;

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${'6bb1ca0d1a4fad45ed60f1df7e967d4d'}`,
        )
            .then(res => res.json())
            .then(res => setData(res) + console.log(res))
            .catch(err => console.log(err));
    }, []);

    const Data=({title , value})=>{
    return(
    <View
    style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
    <Text style={{ color: 'white', fontSize: 25 ,fontWeight:'bold'}}>{title}</Text>
    <Text style={{ color: 'white', fontSize: 25,fontWeight:'bold' }}>
        {value}
    </Text>
</View>
);
    }
    return (
        <View>
            <ImageBackground
                source={require('../assets/images/HOME1.jpg')}
                
                style={{ height: '100%', width: '100%' }}
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

                {data ? (
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            height: deviceHeight - 100,
                        }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 50 }}>{name}</Text>

                            <Text style={{ fontSize: 30, textAlign:'center' }}>{data['weather'][0]['main']} </Text>
                        </View>

                        <Text style={{ color: 'white', fontSize: 60 }}>
                            {(data['main']['temp'] - 273).toFixed(1)}&deg;C
                        </Text>

                       
                       <Text style={{ color: 'darkgrey', fontSize: 25,fontWeight:'bold',marginBottom:10 }}>Weather details </Text>
                        <View style={{ width: deviceWidth - 40 }}>
                           
                           <Data value={`${data['wind']['speed']} km/h`} title='Wind'/>
                           <Data value={`${data['visibility']} m`} title='Visibility'/>
                           <Data value={`${data['main']['humidity']}%`} title='Humidity'/>
                           <Data value={`${data['main']['pressure']} Pa`} title='Pressure'/>

            
                       </View>
                    </View>
                ) : null}
            </View>
        </View>
    );
}
