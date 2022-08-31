import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
    Alert
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Datatitle from './datatitle';
import {
    RecyclerListView,
    DataProvider,
    LayoutProvider
} from 'recyclerlistview';
import Datakhaithacden from './datakhaithacden';

function HeaderComponent() {
    const navigation = useNavigation();
    return (
        <View style={styles.viewtopbg}>
            <Text style={styles.texttitle}>Khai thác đến</Text>
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
            <View style={styles.viewsearch}>
                <TextInput
                    style={styles.textsearch}
                    placeholder="Mã chuyến xe"
                    maxLength={12}
                />
                <TouchableOpacity style={styles.touchsearch}>
                    <Image
                        style={styles.imagesearch}
                        source={require('../Nhanhang_chonhan/Icon/ic_nhanhang_chonhan_search.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textinfokienhang}>
                    30 tải / 12 kiện / 500 kg
                </Text>
                <TouchableOpacity style={styles.touchboloc}>
                    <Text style={styles.texttime}>Bộ lọc</Text>
                    <Image
                        style={styles.imageboloc}
                        source={require('./Icon/ic_khaithacden_boloc.png')}
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
//=========================================
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
    const dataProvider = _dataProvider.cloneWithRows(Datakhaithacden);
    return dataProvider;
}
function BorderComponent(type, item) {
    switch (type) {
        case 'Row':
            return (
                <View style={styles.viewborder}>
                    <TouchableOpacity
                        onPress={() =>
                            Alert.alert('Hú alo', 'Đây là đơn hàng của Ship')
                        }>
                        <Text style={styles.textnamedonhang}>
                            {item.textnamedonhang}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.imagemap}
                                source={item.imagemap}
                            />
                            <Text style={styles.textkhuvuc}>
                                {item.textkhuvuc}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.imagemap}
                                source={item.imagesoluong}
                            />
                            <Text style={styles.textkhuvuc}>
                                {item.textsoluong}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.imagemap}
                                source={item.imagetrongluong}
                            />
                            <Text style={styles.textkhuvuc}>
                                {item.texttrongluong}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.imagemap}
                                source={item.imagetimedate}
                            />
                            <Text style={styles.textkhuvuc}>
                                {item.textdatetime}
                            </Text>
                        </View>
                        <View
                            style={{ width: '100%', height: 1, marginTop: 12 }}
                        />
                    </TouchableOpacity>
                </View>
            );

        default:
            return null;
    }
}
export default function KhaithacdenComponent() {
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
                    rowRenderer={BorderComponent}
                    canChangeSize={true}
                    forceNonDeterministicRendering={true}
                />
            </View>
        </View>
    );
}
