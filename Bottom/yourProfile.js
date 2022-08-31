import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from '../Main/styles';
function BottomComponent(navigation) {
    return (
        <View style={styles.viewbottom}>
            <View style={styles.viewbottommain}>
                <TouchableOpacity onPress={() => navigation.Push()}>
                    <Image
                        style={styles.imagemain}
                        source={{ uri: 'ic_main_bottommain' }}
                    />
                    <Text style={styles.textmain}>Trang chủ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewbottommain}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Details')}>
                    <Image
                        style={styles.imagebottomsms}
                        source={{ uri: 'ic_main_bottomsms' }}
                    />
                    <Text style={styles.textbottomsms}>Tin nhắn</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.imagemains}
                    source={{ uri: 'ic_main_bottomapp' }}
                />
            </TouchableOpacity>
            <View style={styles.viewbottommain}>
                <TouchableOpacity>
                    <Image
                        style={styles.imagebottomthongbao}
                        source={{ uri: 'ic_main_bottomnotification' }}
                    />
                    <Text style={styles.textbottomsms}>Thông báo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewbottommain}>
                <TouchableOpacity>
                    <Image
                        style={styles.imagebottomprofile}
                        source={{ uri: 'ic_main_bottomindividual' }}
                    />
                    <Text style={styles.textbootomthongbao}>Cá nhân</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const Stack = createNativeStackNavigator();
function Bot() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Bottom" component={BottomComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default function bottom() {
    return <Bot />;
}
