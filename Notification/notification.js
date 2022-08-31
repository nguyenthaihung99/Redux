import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Notifications from './datanotification';
import {
    RecyclerListView,
    LayoutProvider,
    DataProvider
} from 'recyclerlistview';
import styles from './styles';
function HearderComponent() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View>
                <Image
                    style={styles.imagetop}
                    source={require('./Icon/Rectangle.png')}
                />
                <Text style={styles.textheader}>Thông báo</Text>
            </View>
        </View>
    );
}
function Danhdaudadoc() {
    return (
        <View style={styles.viewdanhdau}>
            <Text style={styles.texttime}>Gần đây</Text>
            <TouchableOpacity style={styles.touchdanhdau}>
                <Text style={styles.textdanhdau}>Đánh dấu đã đọc</Text>
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
                dimention.height = 184;
                break;
            default:
                dimention.width = 0;
                dimention.height = 0;
        }
    }
);
function RenderItem(type, item) {
    console.log('item : ', item);
    switch (type) {
        case 'Row':
            return (
                <View style={styles.viewborder}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Image
                            style={styles.imageviettel}
                            source={item.imagetitle}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.texttitle}>
                                    {item.texttitle}
                                </Text>
                                <Text style={styles.textdate}>
                                    {item.textdate}
                                </Text>
                            </View>
                            <Text style={styles.textcontent}>
                                {item.textcontent}
                            </Text>
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
                    onPress={() => navigation.push('Firstmainpage')}>
                    <Image
                        style={styles.imagemain}
                        source={{ uri: 'ic_main_bottommain' }}
                    />
                    <Text style={styles.textmain}>Trang chủ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewbottommain}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SmsComponent')}>
                    <Image
                        style={styles.imagebottomsms}
                        source={{ uri: 'ic_main_bottomsms' }}
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
                <TouchableOpacity>
                    <Image
                        style={styles.imagebottomthongbao}
                        source={require('./Icon/ic_notification_notification.png')}
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
                    <Text style={styles.textbootomprofile}>Cá nhân</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function getVisibleDriverData() {
    const _dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });
    const dataProvider = _dataProvider.cloneWithRows(Notifications);
    return dataProvider;
}

export default function Notification() {
    const data = getVisibleDriverData();
    return (
        <View style={{ flex: 1 }}>
            <HearderComponent />
            <Danhdaudadoc />

            <RecyclerListView
                layoutProvider={layoutProvider}
                dataProvider={data}
                rowRenderer={RenderItem}
                canChangeSize={true}
                forceNonDeterministicRendering={true}
            />
            {/* <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={Notifications}
                renderItem={RenderItem}
                keyExtractor={(item, index) => index}
            /> */}
            <BottomComponent />
        </View>
    );
}
