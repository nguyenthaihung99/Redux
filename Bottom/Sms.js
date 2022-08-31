import React from 'react';
import { View, ImageBackground, Dimensions, Button } from 'react-native';

const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={{
                    width: '100%',
                    height: windowHeight,
                    position: 'absolute'
                }}
                source={{
                    uri: 'https://i.pinimg.com/originals/8d/a6/14/8da6140227f852e40fd4109ef882a403.jpg'
                }}
            />
            <View
                style={{
                    justifyContent: 'center',
                    flex: 1,
                    width: 363,
                    height: 50,
                    borderRadius: 32,
                    marginLeft: 16
                }}>
                <Button title=" Hello" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}
