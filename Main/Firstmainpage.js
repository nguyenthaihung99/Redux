import React, { Component } from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert
} from 'react-native';
import dataOder from './datamenu';
import styles from './styles';
import {
    RecyclerListView,
    LayoutProvider,
    DataProvider
} from 'recyclerlistview';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default class Firstmainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._rowRenderer = this._rowRenderer.bind(this);
        this._layoutProvider = new LayoutProvider(
            () => 'Row',
            (type, dimention) => {
                switch (type) {
                    case 'Row':
                        dimention.width = windowWidth / 2;
                        dimention.height = 184;
                        break;
                    default:
                        dimention.width = 0;
                        dimention.height = 0;
                }
            }
        );
    }
    getLayoutProvider = () => this._layoutProvider;
    HeaderComponent = () => {
        return (
            <SafeAreaView>
                <View style={styles.viewtop}>
                    <View style={styles.viewprofile}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.imageavt}
                                source={{ uri: 'ic_main_avt' }}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.textname}>
                                    Nguyễn Xuân Thành
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textaddress}>
                                        hung0103 •
                                    </Text>
                                    <Text style={styles.text4header}>4.5</Text>
                                    <Image
                                        style={styles.imagestar}
                                        source={{ uri: 'ic_main_star' }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewpay}>
                        <Image
                            style={styles.imagepay}
                            source={{ uri: 'ic_main_imagepay' }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textsurplus}>14,940,000 đ</Text>
                            <Text style={styles.textviettelpay}>
                                ViettelPay
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.touchadd}>
                            <Image
                                style={styles.imageadd}
                                source={{ uri: 'ic_main_add' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewmenu} />
                    <View
                        style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            marginTop: 140
                        }}>
                        <View style={styles.viewincome}>
                            <Image
                                style={styles.imagethunhap}
                                source={{ uri: 'ic_main_thunhap' }}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.textsodu}>
                                    14,940,000 đ
                                </Text>
                                <Text style={styles.textthunhap}>Thu nhập</Text>
                            </View>
                            <TouchableOpacity style={styles.touchngang}>
                                <Image
                                    style={styles.imagengang}
                                    source={{ uri: 'ic_main_ngang' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewkpi}>
                            <Image
                                style={styles.imagekpi}
                                source={{ uri: 'ic_main_kpi' }}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.textsodu}>66/100</Text>
                                <Text style={styles.textthunhap}>
                                    KPI giao hàng
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.touchngang}>
                                <Image
                                    style={styles.imagengang}
                                    source={{ uri: 'ic_main_ngang' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    };
    BorderComponent = () => {
        const navigation = useNavigation();
        return (
            <SafeAreaView style={{ flexDirection: 'column' }}>
                <View style={styles.viewmenufirst}>
                    <View style={styles.viewnhanhang}>
                        <TouchableOpacity
                            style={styles.touchnhanhang}
                            onPress={() =>
                                navigation.navigate('Nhanhang_ChonhanComponent')
                            }>
                            <Image
                                style={styles.imagenhanhang}
                                source={{ uri: 'ic_main_nhanhang' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textnhanhang}>Nhận hàng</Text>
                    </View>
                    <View style={styles.viewkhaithacdi}>
                        <TouchableOpacity
                            style={styles.touchkhaithacdi}
                            onPress={() =>
                                navigation.navigate('InboxComponent')
                            }>
                            <Image
                                style={styles.imagekhaithacdi}
                                source={{ uri: 'ic_main_khaithac' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textkhaithacdi}>Khai thác đi</Text>
                    </View>
                    <View style={styles.viewkhailaixenhan}>
                        <TouchableOpacity style={styles.touchlaixenhan}>
                            <Image
                                style={styles.imagelaixenhan}
                                source={{ uri: 'ic_main_laixenhan' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textlaixenhan}>Lái xe nhận</Text>
                    </View>
                    <View style={styles.viewbangiaoden}>
                        <TouchableOpacity style={styles.touchbangiaoden}>
                            <Image
                                style={styles.imagebangiaoden}
                                source={{ uri: 'ic_main_bangiaoden' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textbangiaoden}>Bàn giao đến</Text>
                    </View>
                </View>
                <View style={styles.viewmenusecond}>
                    <View style={styles.viewkhaithacden}>
                        <TouchableOpacity
                            style={styles.touchkhaithacden}
                            onPress={() =>
                                navigation.navigate('KhaithacdenComponent')
                            }>
                            <Image
                                style={styles.imagekhaithacden}
                                source={{ uri: 'ic_main_khaithacden' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textkhaithacden}>
                            Khai thác đến
                        </Text>
                    </View>
                    <View style={styles.viewgiaohang}>
                        <TouchableOpacity
                            style={styles.touchgiaohang}
                            onPress={() => navigation.navigate('Giaohang')}>
                            <Image
                                style={styles.imagegiaohang}
                                source={{ uri: 'ic_main_giaohang' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textgiaohang}>Giao hàng</Text>
                    </View>
                    <View style={styles.viewquetton}>
                        <TouchableOpacity style={styles.touchquetton}>
                            <Image
                                style={styles.imagequetton}
                                source={{ uri: 'ic_main_quetton' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textquetton}>Quét tồn</Text>
                    </View>
                    <View style={styles.viewkhac}>
                        <TouchableOpacity style={styles.touchkhac}>
                            <Image
                                style={styles.imagekhac}
                                source={{ uri: 'ic_main_khac' }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textkhac}>Khác</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.touchmenukhac}
                        onPress={() => navigation.navigate('Secondmainpage')}>
                        <Image
                            style={styles.imagemenukhac}
                            source={{ uri: 'ic_main_ngang' }}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };
    orderprocessingComponent = () => {
        return (
            <SafeAreaView>
                <View style={styles.vieworderprocessing}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textdonhang}>
                            Đơn hàng cần xử lý
                        </Text>
                        <Image
                            style={styles.imagexuly}
                            source={{ uri: 'ic_main_imagexuly' }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.viewgiao1phan}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Image
                                            style={styles.imagegiao1phan}
                                            source={{
                                                uri: 'ic_main_giao1phan'
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <View style={styles.vieweclipse2}>
                                        <Text style={styles.text2}>2</Text>
                                    </View>
                                </View>
                                <Text style={styles.textgiao1phan}>
                                    Giao 1 phần
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.viewall}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Image
                                            style={styles.imageall}
                                            source={{
                                                uri: 'ic_main_all'
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <View style={styles.vieweclipse11}>
                                        <Text style={styles.text11}>11</Text>
                                    </View>
                                </View>
                                <Text style={styles.textall}>Sửa đơn</Text>
                            </View>
                        </View>
                        <View style={styles.viewgiaotiep}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.imageall}
                                        source={{
                                            uri: 'ic_main_giaotiep'
                                        }}
                                    />
                                </TouchableOpacity>
                                <View style={styles.vieweclipse5}>
                                    <Text style={styles.text5}>5</Text>
                                </View>
                            </View>
                            <Text style={styles.textgiaotiep}>Giao Tiếp</Text>
                        </View>
                        <View style={styles.viewgiaogap}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.imagegiaogap}
                                        source={{
                                            uri: 'ic_main_giaogap'
                                        }}
                                    />
                                </TouchableOpacity>
                                <View style={styles.vieweclipse4}>
                                    <Text style={styles.text4}>4</Text>
                                </View>
                            </View>
                            <Text style={styles.textgiaogap}>Giao Gấp</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewline} />
            </SafeAreaView>
        );
    };
    _rowRenderer = (type, item) => {
        console.log('item : ', item);

        switch (type) {
            case 'Row':
                return (
                    <View
                        style={{
                            width: '100%'
                        }}>
                        <TouchableOpacity
                            style={styles.touchcontent}
                            onPress={() => Alert.alert('Hello')}>
                            <View style={styles.viewfirst}>
                                <Image
                                    style={styles.imagecolor}
                                    source={{ uri: item.imagecolor }}
                                />
                                <Text style={styles.textids}>
                                    {item.textid}
                                </Text>
                                <Text style={styles.textstores}>
                                    {item.textstore}
                                </Text>
                                <View style={styles.viewerro}>
                                    <Image
                                        style={styles.imageerro}
                                        source={{ uri: item.imageerro }}
                                    />
                                    <Text style={styles.textstatuss}>
                                        {item.textstatus}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.viewcontent}>
                                <Text style={styles.texttimedates}>
                                    {item.texttimedate}
                                </Text>
                                <Text style={styles.texterro}>
                                    {item.texterro}
                                </Text>
                                <View style={styles.viewtextinfo}>
                                    <Text>
                                        {
                                            <Text style={styles.textnames}>
                                                {item.textname}
                                            </Text>
                                        }{' '}
                                        - {''}
                                        <Text style={styles.textaddresss}>
                                            {item.textaddress}
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.viewliness} />
                        <View style={styles.viewmenuorder}>
                            <TouchableOpacity style={styles.touch}>
                                <Image
                                    style={styles.imagecall}
                                    source={{ uri: item.imagecall }}
                                />
                                <Text style={styles.texttelephone}>
                                    Gọi điện
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.viewlines} />
                            <TouchableOpacity
                                style={styles.touch}
                                onPress={() =>
                                    navigation.navigate('InboxComponent')
                                }>
                                <Image
                                    style={styles.imagesms}
                                    source={{ uri: item.imagesms }}
                                />
                                <Text style={styles.textsms}>
                                    {item.textsms}
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.viewlines} />
                            <TouchableOpacity
                                style={{ height: 37, flexDirection: 'row' }}>
                                <Image
                                    style={styles.imagestatuss}
                                    source={{ uri: item.imagestatus }}
                                />
                                <Text style={styles.textsmsthanhcong}>
                                    Thành công
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.viewlines} />
                            <TouchableOpacity
                                style={{ height: 37, flexDirection: 'row' }}>
                                <Image
                                    style={styles.imagestatuss}
                                    source={{ uri: item.imagechuyen }}
                                />
                                <Text style={styles.textsmsthanhcong}>
                                    {item.textchuyen}
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.viewlineend} />
                        </View>
                        <View style={styles.viewlineend} />
                    </View>
                );
            default:
                return null;
        }
    };
    getVisibleDriverData = () => {
        const _dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });
        const dataProvider = _dataProvider.cloneWithRows(dataOder);
        return dataProvider;
    };
    incomeComponent = () => {
        return (
            <SafeAreaView>
                <Image
                    style={styles.imagerectange}
                    source={{ uri: 'ic_main_imagerectange' }}
                />
                <View style={styles.viewincoms}>
                    <View style={styles.viewthunhap}>
                        <Text>
                            {
                                <Text style={styles.textthunhaps}>
                                    Thu Nhập :{' '}
                                </Text>
                            }
                            {<Text style={styles.textVnd}>4,595,670đ</Text>}
                        </Text>
                        <Text style={styles.textday}>Hôm nay</Text>
                        <TouchableOpacity style={styles.touchday}>
                            <Image
                                style={styles.imageday}
                                source={{ uri: 'ic_main_history' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewthuoctinh}>
                        <Text style={styles.textthucthi}>Thực thi</Text>
                        <Text style={styles.textneucogang}>Nếu cố gắng</Text>
                    </View>
                    <View style={styles.viewthulaogao}>
                        <View style={styles.viewcolorthulao} />
                        <Text style={styles.textthulaogiao}>Thù lao giao</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textbill}>981 bill</Text>
                            <Text style={styles.textvnds}>4,595 tr</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.text5bill}>+5 bill</Text>
                            <Text style={styles.text100k}>+100 k</Text>
                        </View>
                    </View>
                    <View style={styles.viewthulaogao}>
                        <View style={styles.viewcolorthulaonnhan} />
                        <Text style={styles.textthulaogiao}>Thù lao nhận</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.text0bill}>0 bill</Text>
                            <Text style={styles.text0tr}>0 tr</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.text0k}>+0 k</Text>
                            <Text style={styles.text0bills}>+0 bill</Text>
                        </View>
                    </View>
                    <View style={styles.viewthulaogao}>
                        <View style={styles.viewcolorsuport} />
                        <Text style={styles.textthulaogiao}>Thù lao nhận</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textkm}>20km</Text>
                            <Text style={styles.texttr}>20 tr</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textkms}>+0 km</Text>
                            <Text style={styles.textk}>+0 k</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    };
    bottomComponent = () => {
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}>
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
                            source={{ uri: 'ic_main_bottomindividual' }}
                        />
                        <Text style={styles.textbootomthongbao}>Cá nhân</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        const data = this.getVisibleDriverData();
        return (
            <View style={{ flex: 1 }}>
                <this.HeaderComponent />
                <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    <this.BorderComponent />
                    <this.orderprocessingComponent />
                    <View
                        style={{
                            flex: 1,
                            minHeight: 1
                        }}>
                        <RecyclerListView
                            layoutProvider={this.getLayoutProvider()}
                            dataProvider={data}
                            rowRenderer={this._rowRenderer}
                            canChangeSize={true}
                            forceNonDeterministicRendering={true}
                        />
                    </View>
                    <this.incomeComponent />
                </ScrollView>
                <this.bottomComponent />
            </View>
        );
    }
}
