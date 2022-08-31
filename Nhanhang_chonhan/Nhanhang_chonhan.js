import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    TextInput
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Datatitle from '../Nhanhang_tbdonnhan/dataflatlisttitle';
import Datainfodonhang from './datainfodonhang';
import {
    RecyclerListView,
    DataProvider,
    LayoutProvider
} from 'recyclerlistview';
import { StatusBar } from 'react-native';

function HeaderComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.viewtopbg}>
            <Text style={styles.texttitle}>Nhận hàng</Text>
            <TouchableOpacity
                style={styles.touchback}
                onPress={() => navigation.goBack('Firstmainpage')}>
                <Image
                    style={styles.imageback}
                    source={require('../Nhanhang_tbdonnhan/Icon/ic_nhanhang_back.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
function TitleComponent() {
    const renderItem = ({ item, index }) => {
        console.log('item : ', item);
        return (
            <TouchableOpacity>
                <View style={styles.viewtitle}>
                    <Text style={styles.texttitles}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal
                data={Datatitle}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}
function TitleBorderComponent() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.touchviewchonhan}>
                    <View style={styles.viewchonhan}>
                        <Text style={styles.textchonhan}>Chờ nhận</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchdahen}>
                    <View style={styles.viewdahen}>
                        <Text style={styles.textdahen}>Đã hẹn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchnhapdoanhthu}>
                    <View style={styles.viewnhapdoanhthu}>
                        <Text style={styles.textnhapdoanhthu}>
                            Nhập doanh thu
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.viewsearch}>
                <TextInput
                    style={styles.textsearch}
                    placeholder="Nhận nhanh bưu gửi"
                    maxLength={12}
                />
                <TouchableOpacity style={styles.touchsearch}>
                    <Image
                        style={styles.imagesearch}
                        source={require('./Icon/ic_nhanhang_chonhan_search.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchQR}>
                    <Image
                        style={styles.imageQR}
                        source={require('../Nhanhang_tbdonnhan/Icon/ic_nhanhang_Qrcolor.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textinfokienhang}>
                    5 khách hàng/ 15 đơn/ 15 kg
                </Text>
                <TouchableOpacity style={styles.touchxuong}>
                    <Text style={styles.texttime}>Mới nhất</Text>
                    <Image
                        style={styles.imagexuong}
                        source={require('../Nhanhang_tbdonnhan/Icon/ic_nhanhang_fillfullblack.png')}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    width: '100%',
                    height: 1,
                    marginTop: 9
                }}
            />
        </View>
    );
}
//========================================
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

function getVisibleDriverData() {
    const _dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });
    const dataProvider = _dataProvider.cloneWithRows(Datainfodonhang);
    return dataProvider;
}
function Borderinfokienhang(type, item) {
    switch (type) {
        case 'Row':
            return (
                <View style={styles.viewborder}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.touchcheck}>
                            <Image
                                style={styles.imagecheck}
                                source={item.imagecheckbox}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textstore}>{item.textstore}</Text>
                        <TouchableOpacity style={styles.touchsms}>
                            <Image
                                style={styles.image}
                                source={item.imagesms}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchcall}>
                            <Image
                                style={styles.image}
                                source={item.imagecall}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.imagediachi}
                            source={item.imagemap}
                        />
                        <Text style={styles.textdiachi}>{item.textdiachi}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.imagesoluong}
                            source={item.imagesoluong}
                        />
                        <Text style={styles.textsoluong}>
                            {item.textsoluong}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.imagesoluong}
                            source={item.imagetrongluong}
                        />
                        <Text style={styles.textsoluong}>
                            {item.texttrongluong}
                        </Text>
                    </View>
                    <View style={styles.viewlinefull} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{
                                width: 196.36,
                                flexDirection: 'row'
                            }}>
                            <Image
                                style={styles.imagenhannhanh}
                                source={item.imagenhannhanh}
                            />
                            <Text style={styles.textnhannhanh}>
                                {item.textnhannhanh}
                            </Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                width: 1,
                                height: 44,
                                backgroundColor: 'rgba(216, 216, 216, 1)'
                                // marginLeft: 44
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                width: 196.36,
                                flexDirection: 'row'
                            }}>
                            <Image
                                style={styles.imagenhannhanh}
                                source={item.imagehennhan}
                            />
                            <Text style={styles.textnhannhanh}>
                                {item.texthennhan}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewlineend} />
                </View>
            );

        default:
            return null;
    }
}
function BottomComponent() {
    return (
        <View style={styles.viewbottom}>
            <TouchableOpacity>
                <View style={styles.viewbntgoiy}>
                    <Text style={styles.textbnt}> Gợi ý hành trình</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default function Nhanhang_ChonhanComponent() {
    const data = getVisibleDriverData();
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent />
            <TitleComponent />
            <TitleBorderComponent />
            <View style={{ flex: 1 }}>
                <RecyclerListView
                    layoutProvider={getLayoutProvider}
                    dataProvider={data}
                    rowRenderer={Borderinfokienhang}
                    canChangeSize={true}
                    forceNonDeterministicRendering={true}
                />
            </View>
            <BottomComponent />
        </View>
    );
}
