import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Datatitle from './datatitle';
import Datainfodonhang from './datainfodonhang';
import {
    RecyclerListView,
    DataProvider,
    LayoutProvider
} from 'recyclerlistview';

function HeaderComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.viewtopbg}>
            <Text style={styles.texttitle}>Giao hàng</Text>
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
                    <Text style={styles.texttitles}>
                        {item.title}
                        <Text> ({item.tatus})</Text>
                    </Text>
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
            <View style={styles.viewsearch}>
                <TextInput
                    style={styles.textsearch}
                    placeholder="Nhận nhanh bưu gửi"
                    maxLength={12}
                />
                <TouchableOpacity style={styles.touchsearch}>
                    <Image
                        style={styles.imagesearch}
                        source={require('../Nhanhang_chonhan/Icon/ic_nhanhang_chonhan_search.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchQR}>
                    <Image
                        style={styles.imageQR}
                        source={require('../Nhanhang_tbdonnhan/Icon/ic_nhanhang_Qrblack.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textinfokienhang}>15 danh sách</Text>
                <TouchableOpacity style={styles.touchxuong}>
                    <Image
                        style={styles.imagexuong}
                        source={require('./Icon/ic_giaohang_datetime.png')}
                    />
                    <Text style={styles.texttime}>21/05 - 23/06</Text>
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
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.imagesoluong}
                            source={item.imagedatetime}
                        />
                        <Text style={styles.textsoluong}>
                            {item.textdatetime}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.imagesoluong}
                            source={item.imagegiatri}
                        />
                        <Text style={styles.textsoluong}>
                            {item.texttienthuho}
                            <Text style={styles.textgiatri}>
                                {item.textgiatri}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.viewlinefull} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{
                                width: '100%',
                                flexDirection: 'row'
                            }}>
                            <Image
                                style={styles.imagenhannhanh}
                                source={item.imagenhannhanh}
                            />
                            <Text style={styles.textnhannhanh}>
                                {item.textxacnhan}
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
export default function Giaohang() {
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
        </View>
    );
}
