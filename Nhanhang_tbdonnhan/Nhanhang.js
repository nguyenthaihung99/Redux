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
import Datatitle from './dataflatlisttitle';
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
                    source={require('./Icon/ic_nhanhang_back.png')}
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
                    <Text style={styles.textnhapdoanhthu}>Nhập doanh thu</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
function TitleContentFirstComponent() {
    return (
        <View style={styles.viewcontenttitle}>
            <Text style={styles.texttitlefirst}>Người gửi - người nhận</Text>
            <TouchableOpacity style={styles.touchxuong}>
                <Image
                    style={styles.imagexuong}
                    source={require('./Icon/ic_nhanhang_xuong.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
function BorderFirstComponent() {
    return (
        <View style={styles.viewborderfirst}>
            <View>
                <Text style={styles.textiddonhang}>Mã đơn hàng</Text>
                <View style={styles.viewinput}>
                    <TextInput
                        style={styles.textinputidonhang}
                        placeholder="Mã đơn hàng"
                        maxLength={30}
                    />
                </View>
                <Image
                    style={styles.imageQrblack}
                    source={require('./Icon/ic_nhanhang_Qrblack.png')}
                />
                <TouchableOpacity style={styles.touchQr}>
                    <Image
                        style={styles.imageQrcolor}
                        source={require('./Icon/ic_nhanhang_Qrcolor.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.viewnguoigui}>
                <View>
                    <Text style={styles.textiddonhang}>Người gửi</Text>
                    <View>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.textinputidonhang}
                                placeholder="Số điện thoại"
                                maxLength={10}
                                keyboardType="numeric"
                            />
                        </View>
                        <Image
                            style={styles.imagetelephone}
                            source={require('./Icon/ic_nhanhang_telephone.png')}
                        />
                        <TouchableOpacity style={styles.touchdanhba}>
                            <Image
                                style={styles.imagedanhba}
                                source={require('./Icon/ic_nhanhang_danhba.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewhoten}>
                    <View>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.textinputhoten}
                                placeholder="Họ tên"
                                maxLength={40}
                                // keyboardType="numeric"
                            />
                        </View>
                        <Image
                            style={styles.imagehoten}
                            source={require('./Icon/ic_nhanhang_hoten.png')}
                        />
                    </View>
                </View>
                <View style={styles.viewdiachi}>
                    <View>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.textinputhoten}
                                placeholder="Địa chỉ"
                                maxLength={60}
                                // keyboardType="numeric"
                            />
                        </View>
                        <Image
                            style={styles.imagehoten}
                            source={require('./Icon/ic_nhanhang_map.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.viewnguoinhan}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textnguoinhan}>Người nhận</Text>
                    <TouchableOpacity style={styles.click}>
                        <View style={styles.viewclick} />
                    </TouchableOpacity>
                    <Text style={styles.textguiquocte}>Gửi quốc tế</Text>
                </View>
                <View>
                    <View style={styles.viewinput}>
                        <TextInput
                            style={styles.textinputidonhang}
                            placeholder="0372145951"
                            maxLength={10}
                            keyboardType="numeric"
                        />
                    </View>
                    <Image
                        style={styles.imagetelephone}
                        source={require('./Icon/ic_nhanhang_telephone.png')}
                    />
                    <TouchableOpacity style={styles.touchdanhba}>
                        <Image
                            style={styles.imagedanhba}
                            source={require('./Icon/ic_nhanhang_danhba.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewhoten}>
                    <View>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.textinputhoten}
                                placeholder="Họ tên"
                                maxLength={40}
                                // keyboardType="numeric"
                            />
                        </View>
                        <Image
                            style={styles.imagehoten}
                            source={require('./Icon/ic_nhanhang_hoten.png')}
                        />
                    </View>
                </View>
                <View style={styles.viewaddress}>
                    <View style={styles.viewcity}>
                        <TextInput
                            style={styles.textcity}
                            placeholder="Hà Nội"
                            maxLength={20}
                        />
                        <TouchableOpacity style={styles.touchaddress}>
                            <Image
                                style={styles.imageaddress}
                                source={require('./Icon/ic_nhanhang_fillfullblack.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewquan}>
                        <TextInput
                            style={styles.textcity}
                            placeholder="Đống Đa"
                            maxLength={20}
                        />
                        <TouchableOpacity style={styles.touchaddress}>
                            <Image
                                style={styles.imageaddress}
                                source={require('./Icon/ic_nhanhang_fillfullblack.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewquan}>
                        <TextInput
                            style={styles.textcity}
                            placeholder="Láng Hạ"
                            maxLength={20}
                        />
                        <TouchableOpacity style={styles.touchaddress}>
                            <Image
                                style={styles.imageaddress}
                                source={require('./Icon/ic_nhanhang_fillfullblack.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewthonxa}>
                    <View style={styles.textinputthonxa}>
                        <TextInput
                            style={styles.textthonxa}
                            placeholder="Đường/thôn xóm"
                            maxLength={40}
                        />
                        <TouchableOpacity style={styles.touchaddress}>
                            <Image
                                style={styles.imageaddress}
                                source={require('./Icon/ic_nhanhang_fillfullblack.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewsonha}>
                        <TextInput
                            style={styles.textthonxa}
                            placeholder="Số nhà"
                            maxLength={40}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.viewdiachiKH}>
                <View style={{ marginTop: 2, flexDirection: 'row' }}>
                    <Image
                        style={styles.imagemap}
                        source={require('./Icon/ic_nhanhang_mapcolor.png')}
                    />
                    <Text style={styles.textdiachikhiin}>Địa chỉ khi in</Text>
                    <TouchableOpacity style={styles.touchxuongcolor}>
                        <Image
                            style={styles.imagexuongcolor}
                            source={require('./Icon/ic_nhanhang_fillfullcolor.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchclick2}>
                        <View style={styles.viewclick2} />
                    </TouchableOpacity>
                    <Text style={styles.textbuucuc}>Nhận tại bưu cục</Text>
                </View>
                <Text style={styles.textaddress}>
                    Số 123 Đường Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Tp. Hà
                    Nội
                </Text>
            </View>
        </View>
    );
}
function BoderSecondComponent() {
    return (
        <View style={styles.viewbordersecond}>
            <Text style={styles.texttitlesecond}>Hàng hóa - dịch vụ</Text>
            <View style={styles.viewbordersecondcontent}>
                <View style={styles.viewmotagoihang}>
                    <Text style={styles.textmota}>Mô tả gói hàng</Text>
                    <TouchableOpacity style={styles.touchgoiy}>
                        <Image
                            style={styles.imagegoiy}
                            source={require('./Icon/ic_nhanhang_goiy.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchthu}>
                        <View style={styles.viewthu}>
                            <Text style={styles.textthu}>Thư</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchhang}>
                        <View>
                            <Text style={styles.texthang}>Hàng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchkien}>
                        <View>
                            <Text style={styles.textkien}>Kiện</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewbordersecond2}>
                <View style={styles.viewsoluong}>
                    <TextInput
                        style={styles.textsoluong}
                        placeholder="Số lượng, chủng loại (VD: 3, áo)"
                        maxLength={12}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.viewgiatri}>
                        <TextInput
                            style={styles.textgiatri}
                            placeholder="Giá trị hàng"
                            maxLength={13}
                            keyboardType="numeric"
                        />
                        <Image
                            style={styles.imagegiatri}
                            source={require('./Icon/ic_nhanhang_giatri.png')}
                        />
                    </View>
                    <View style={styles.viewtrongluong}>
                        <TextInput
                            style={styles.textgiatri}
                            placeholder="Trọng lượng"
                            maxLength={12}
                            keyboardType="numeric"
                        />
                        <Image
                            style={styles.imagegiatri}
                            source={require('./Icon/ic_nhanhang_trongluong.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.viewbordersecond3}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textkichthuoc}>
                        Nhập kích thước hàng hóa
                    </Text>
                    <TouchableOpacity style={styles.touchngang}>
                        <Image
                            style={styles.imagengang}
                            source={require('../yourProfile/IconProfile/ic_profile_ngang.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewline} />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.touchclickthuho}>
                            <View style={styles.viewclickthuho} />
                        </TouchableOpacity>
                        <Text style={styles.textthuho}>
                            Thu hộ giá trị hàng
                        </Text>
                        <TouchableOpacity style={styles.touchgoiy}>
                            <Image
                                style={styles.imagegoiy}
                                source={require('./Icon/ic_nhanhang_goiy.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.viewinputthuho}>
                            <TextInput
                                style={styles.textthienthuho}
                                placeholder="Tiền thu hộ"
                                maxLength={12}
                                keyboardType="numeric"
                            />
                            <Image
                                style={styles.imagegiatri}
                                source={require('./Icon/ic_nhanhang_tienthuho.png')}
                            />
                            <Text style={styles.textd}>đ</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewline} />
                <View style={styles.viewdichvu}>
                    <Text style={styles.textdichvu}>Dịch vụ</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.touchbay}>
                            <View style={styles.viewbay} />
                        </TouchableOpacity>
                        <Text style={styles.textbay}>Bay</Text>
                        <TouchableOpacity style={styles.touchbo}>
                            <View style={styles.viewbo} />
                        </TouchableOpacity>
                        <Text style={styles.textbay}>Bộ</Text>
                        <TouchableOpacity>
                            <Text style={styles.textkhac}>Khác</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Text style={styles.textdukien}>Dự kiến giao hàng</Text>
                        <TouchableOpacity style={styles.touchgoiy2}>
                            <Image
                                style={styles.imagegoiy2}
                                source={require('./Icon/ic_nhanhang_goiy.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textdate}> 0 ngày</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Text style={styles.textcuocphi}>Cước phí</Text>
                        <Text style={styles.text0d}>0 đ</Text>
                    </View>
                </View>
                <View style={styles.viewline} />
                <View style={styles.viewdichvuadd}>
                    <Text style={styles.textdichvu}>Dịch vụ cộng thêm</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.touchgiatricao}>
                            <View style={styles.viewgiatricao}>
                                <Text style={styles.textgiatricao}>
                                    Hàng giá trị cao
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchbaohiem}>
                            <View style={styles.viewbaohiem}>
                                <Text style={styles.textbaohiem}>Bảo hiểm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchbaohiem}>
                            <View style={styles.viewbaohiem}>
                                <Text style={styles.textbaohiem}>Báo phát</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textthem}>Thêm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewline} />
                <View style={styles.viewpicturehh}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textdichvu}>
                            Chụp nội dung hàng gửi
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.textdelete}>Xóa tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.viewpictureone}>
                            <Image
                                style={styles.imagepicture}
                                source={require('./Icon/ic_nhanhang_picture.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewpicturetwo}>
                            <Text style={styles.text1}>1</Text>
                            <Text style={styles.textsugest}>
                                Chụp tối thiểu 2 ảnh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewpicturetwo}>
                            <Text style={styles.text1}>2</Text>
                            <Text style={styles.textsugest}>
                                Chụp tối thiểu 2 ảnh
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewlineend} />
            </View>
        </View>
    );
}
function BorderthirdComponent() {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.texttitlethird}>Thông tin chung</Text>
                <TouchableOpacity style={styles.touchlen}>
                    <Image
                        style={styles.imagelen}
                        source={require('./Icon/ic_nhanhang_len.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.viewinfo}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textpeople}>Người trả tiền cước</Text>
                    <Text style={styles.textnguoigui}>Người gửi</Text>
                    <TouchableOpacity style={styles.touchpen}>
                        <Image
                            style={styles.imagepen}
                            source={require('./Icon/ic_nhanhang_pen.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textpeople}>Thời gian phát</Text>
                    <Text style={styles.textdatetime}>Cả ngày</Text>
                    <TouchableOpacity style={styles.touchpen}>
                        <Image
                            style={styles.imagepen}
                            source={require('./Icon/ic_nhanhang_pen.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textpeople}>Ghi chú</Text>
                    <Text style={styles.textcontent}>Không cho xem hàng</Text>
                    <TouchableOpacity style={styles.touchpen}>
                        <Image
                            style={styles.imagepen}
                            source={require('./Icon/ic_nhanhang_pen.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textpeople}>Cước phí</Text>
                    <Text style={styles.textvalues}>0 đ</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textpeople}>Tổng cước</Text>
                    <TouchableOpacity style={styles.touchgoiytotal}>
                        <Image
                            style={styles.imagegoiy}
                            source={require('./Icon/ic_nhanhang_goiy.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textvaluestotal}>0 đ</Text>
                </View>
            </View>
        </View>
    );
}
function BottomComponent() {
    return (
        <View style={styles.viewbottom1}>
            <TouchableOpacity style={styles.viewbottom}>
                <Text style={styles.textnhapdoanhthus}>Nhập doanh thu</Text>
            </TouchableOpacity>
        </View>
    );
}
export default function NhanhangComponent() {
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent />
            <ScrollView
                style={{
                    flex: 1,
                    showsVerticalScrollIndicator: false,
                    showsHorizontalScrollIndicator: false
                }}>
                <TitleComponent />
                <TitleBorderComponent />
                <TitleContentFirstComponent />
                <BorderFirstComponent />
                <BoderSecondComponent />
                <BorderthirdComponent />
            </ScrollView>
            <BottomComponent />
        </View>
    );
}
