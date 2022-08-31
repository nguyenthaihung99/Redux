import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import dataduce from './data/dataintroduce';
import {
    RecyclerListView,
    DataProvider,
    LayoutProvider
} from 'recyclerlistview';
import Interactive from './data/datatuongtac';
import { useNavigation } from '@react-navigation/native';
//============================================================================================================
function HeaderComponent() {
    return (
        <View>
            <Image
                style={styles.imagetopbg}
                source={require('./IconProfile/ic_profile_topbg.png')}
            />
            <View style={{ position: 'absolute' }}>
                <Image
                    style={styles.imageavt}
                    source={{ uri: 'ic_main_avt' }}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.textname}>Nguyễn Thái Hùng</Text>
                    <Text style={styles.textidnv}>Mã NV: e9mg2txk</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textdanhgia}>Đánh giá: </Text>
                        <Image
                            style={styles.imagestar}
                            source={{ uri: 'ic_main_star' }}
                        />
                        <Text style={styles.textstar}>4.5</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
//============================================================================================================
function Borderprofile() {
    return (
        <View>
            <View>
                <TouchableOpacity style={styles.viewborderprofile}>
                    <Image
                        style={styles.imageupdateinfo}
                        source={require('./IconProfile/ic_profile_useredit.png')}
                    />
                    <Text style={styles.textupdateinfo}>
                        Cập nhật thông tin
                    </Text>
                    <Image
                        style={styles.imagengang}
                        source={require('./IconProfile/ic_profile_ngang.png')}
                    />
                </TouchableOpacity>
                <View style={styles.viewline} />
            </View>
            <View>
                <TouchableOpacity style={styles.viewborderprofile}>
                    <Image
                        style={styles.imageupdateinfo}
                        source={require('./IconProfile/ic_profile_chuyentk.png')}
                    />
                    <Text style={styles.textupdateinfo}>Đổi bưu cục</Text>
                    <Image
                        style={styles.imagengang}
                        source={require('./IconProfile/ic_profile_ngang.png')}
                    />
                </TouchableOpacity>
                <View style={styles.viewline} />
            </View>
        </View>
    );
}
//============================================================================================================
function Introduce() {
    return (
        <View>
            <View style={styles.viewtitelintroduce}>
                <Text style={styles.texttitleintroduce}>
                    GIỚI THIỆU/HƯỚNG DẪN
                </Text>
            </View>
        </View>
    );
}
//============================================================================================================
const layoutProvider = new LayoutProvider(
    () => 'Row',
    (type, dimention) => {
        switch (type) {
            case 'Row':
                dimention.width = 200;
                dimention.height = 200;
                break;
            default:
                dimention.width = 0;
                dimention.height = 0;
        }
    }
);
const getLayoutProvider = layoutProvider;
//=============================================================================================================
//console.log(getLayoutProvider, 'getLayoutProvider');
function getVisibleDriverData() {
    const _dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });
    const dataProvider = _dataProvider.cloneWithRows(dataduce);
    return dataProvider;
}
function Itemintroduce(type, item) {
    console.log(item, 'data');
    switch (type) {
        case 'Row':
            return (
                <View>
                    <TouchableOpacity style={styles.viewintroduce}>
                        <Image
                            style={styles.imageupdateinfo}
                            source={item.imagecontent}
                        />
                        <Text style={styles.textupdateinfo}>
                            {item.textcontent}
                        </Text>
                        <Image
                            style={styles.imagengang}
                            source={item.imagengang}
                        />
                    </TouchableOpacity>
                    <View style={styles.viewline} />
                </View>
            );
        default:
            return null;
    }
}
///------------------------------------------------------------------------------------------------------------
function Texttuongtac() {
    return (
        <View>
            <View style={styles.viewtitelintroduce}>
                <Text style={styles.texttitleintroduce}>TƯỞNG TÁC</Text>
            </View>
        </View>
    );
}
function getVisibleDriverDatas() {
    const _dataProviders = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });
    const dataProvider = _dataProviders.cloneWithRows(Interactive);
    return dataProvider;
}
function Interactives(type, item) {
    //console.log(item, 'data');
    switch (type) {
        case 'Row':
            return (
                <View>
                    <TouchableOpacity style={styles.viewintroduce}>
                        <Image
                            style={styles.imageupdateinfo}
                            source={item.imagecontent}
                        />
                        <Text style={styles.textupdateinfo}>
                            {item.textcontent}
                        </Text>
                        <Image
                            style={styles.imagengang}
                            source={item.imagengang}
                        />
                    </TouchableOpacity>
                    <View style={styles.viewline} />
                </View>
            );
        default:
            return null;
    }
}
//=============================================================================================================

function Signout() {
    return (
        <View>
            <TouchableOpacity style={styles.viewsignout}>
                <Image
                    style={styles.imageupdateinfo}
                    source={require('./IconProfile/ic_profile_signout.png')}
                />
                <Text style={styles.textupdateinfo}>Thoát</Text>
                <Image
                    style={styles.imagengang}
                    source={require('./IconProfile/ic_profile_ngang.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
//=============================================================================================================
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('Notification')}>
                    <Image
                        style={styles.imagebottomthongbao}
                        source={{ uri: 'ic_main_bottomnotification' }}
                    />
                    <Text style={styles.textbottomsms}>Thông báo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewbottommain}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Yourprofile')}>
                    <Image
                        style={styles.imagebottomprofile}
                        source={require('./IconProfile/ic_profile_yourprofile.png')}
                    />
                    <Text style={styles.textyourprofile}>Cá nhân</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
//=============================================================================================================
export default function Yourprofile() {
    const data = getVisibleDriverData();
    const Okela = getVisibleDriverDatas();
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent />
            <ScrollView style={{ flex: 1 }}>
                <Borderprofile />
                <Introduce />
                <View
                    style={{
                        flex: 1,
                        minHeight: 1,
                        backgroundColor: '#FFFFFF'
                    }}>
                    <RecyclerListView
                        layoutProvider={getLayoutProvider}
                        dataProvider={data}
                        rowRenderer={Itemintroduce}
                        canChangeSize={true}
                        forceNonDeterministicRendering={true}
                    />
                </View>
                <Texttuongtac />
                <View
                    style={{
                        flex: 1,
                        minHeight: 1,
                        backgroundColor: '#FFFFFF'
                    }}>
                    <RecyclerListView
                        layoutProvider={getLayoutProvider}
                        dataProvider={Okela}
                        rowRenderer={Interactives}
                        canChangeSize={true}
                        forceNonDeterministicRendering={true}
                    />
                </View>
                <Signout />
            </ScrollView>
            <BottomComponent />
        </View>
    );
}
