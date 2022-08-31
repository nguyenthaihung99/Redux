import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import dataSms from './datasms';
import {
    RecyclerListView,
    LayoutProvider,
    DataProvider
} from 'recyclerlistview';
import { useNavigation } from '@react-navigation/native';
function HeaderComponent() {
    const navigation = useNavigation();
    return (
        <View>
            <Image
                style={styles.viewtopbg}
                source={require('./Icon/ic_sms_topbg.png')}
            />
            <Text style={styles.texttitle}>Tin nhắn</Text>
            <TouchableOpacity
                style={{ position: 'absolute' }}
                onPress={() => navigation.goBack('Firstmainpage')}>
                <Image
                    style={styles.imageback}
                    source={require('./Icon/ic_sms_backhome.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
const layoutProvider = new LayoutProvider(
    () => 'Row',
    (type, dimention) => {
        switch (type) {
            case 'Row':
                dimention.width = 200;
                dimention.height = 62;
                break;
            default:
                dimention.width = 0;
                dimention.height = 0;
        }
    }
);
const getLayoutProvider = layoutProvider;
function getVisibleDriverData() {
    const _dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });
    const dataProvider = _dataProvider.cloneWithRows(dataSms);
    return dataProvider;
}
function BorderSmsComponent(type, item) {
    console.log('item : ', item);
    switch (type) {
        case 'Row':
            return (
                <View>
                    <TouchableOpacity>
                        <View style={styles.viewnewsms}>
                            <Image
                                style={styles.imageavt}
                                source={item.imageavt}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.textiduser}>
                                    {item.textiduser}
                                </Text>
                                <Text style={styles.textcontent}>
                                    {item.textcontent}
                                </Text>
                            </View>
                            <Text style={styles.texttime}>{item.texttime}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.viewline} />
                </View>
            );
        default:
            return null;
    }
}
function BottomComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.viewbottom}>
            <View style={styles.viewbottommain}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Firstmainpage')}>
                    <Image
                        style={styles.imagemain}
                        source={{ uri: 'ic_main_bottommain' }}
                    />
                    <Text style={styles.textmain}>Trang chủ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewbottommain}>
                <TouchableOpacity
                    onPress={() => navigation.push('SmsComponent')}>
                    <Image
                        style={styles.imagebottomsms}
                        source={require('./Icon/ic_sms_smsselect.png')}
                    />
                    <Text style={styles.textbottomsms}>Tin nhắn</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                    style={styles.imagemains}
                    source={{ uri: 'ic_main_bottomapp' }}
                />
            </TouchableOpacity>
            <View style={styles.viewbottommain}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Notification')}>
                    <Image
                        style={styles.imagebottomthongbao}
                        source={{ uri: 'ic_main_bottomnotification' }}
                    />
                    <Text style={styles.textbootomthongbao}>Thông báo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewbottommain}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Yourprofile')}>
                    <Image
                        style={styles.imagebottomprofile}
                        source={{ uri: 'ic_main_bottomindividual' }}
                    />
                    <Text style={styles.textyourprofile}>Cá nhân</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default function SmsComponent() {
    const data = getVisibleDriverData();
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent />
            <View style={{ flex: 1, minHeight: 1 }}>
                <RecyclerListView
                    layoutProvider={getLayoutProvider}
                    dataProvider={data}
                    rowRenderer={BorderSmsComponent}
                />
            </View>
            <BottomComponent />
        </View>
    );
}
