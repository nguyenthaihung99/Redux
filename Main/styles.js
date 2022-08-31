import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    viewtop: {
        width: windowWidth,
        height: 206,
        backgroundColor: '#EE0033'
    },
    viewprofile: {
        width: 200,
        height: 40,
        marginTop: 20,
        marginLeft: 16
    },
    imageavt: {
        width: 42,
        height: 42
    },
    textname: {
        marginLeft: 9,
        marginTop: 2,
        color: '#FFFFFF',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '700'
    },
    textaddress: {
        marginLeft: 9,
        color: '#FFFFFF',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500'
    },
    text4header: {
        marginLeft: 4,
        color: 'rgba(255, 209, 92, 1)',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500'
    },
    imagestar: {
        marginLeft: 3,
        width: 14,
        height: 14
    },
    viewpay: {
        width: 363,
        height: 60,
        backgroundColor: '#FFFFFF',
        marginTop: 19,
        marginLeft: 16,
        borderRadius: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(225, 225, 225, 1)'
    },
    imagepay: {
        width: 28,
        height: 28,
        marginTop: 16,
        marginLeft: 16
    },
    textsurplus: {
        marginTop: 12,
        marginLeft: 10,
        width: 107,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 20,
        color: '#EE0033'
    },
    textviettelpay: {
        marginLeft: 10,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        color: 'rgba(149, 148, 148, 1)'
    },
    touchadd: {
        marginTop: 18,
        marginLeft: 160,
        width: 24,
        height: 24
    },
    imageadd: {
        width: 24,
        height: 24
    },
    viewincome: {
        marginTop: 8,
        marginLeft: 16,
        width: 178,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(225, 225, 225, 1)'
    },
    imagethunhap: {
        width: 32,
        height: 32,
        marginTop: 14,
        marginLeft: 8
    },
    textsodu: {
        marginTop: 12,
        marginLeft: 8,
        width: 107,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 20,
        color: 'rgba(68, 73, 77, 1)'
    },
    textthunhap: {
        marginLeft: 10,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        color: 'rgba(149, 148, 148, 1)'
    },
    touchngang: {
        marginTop: 24,
        marginLeft: -1,
        width: 8,
        height: 13
    },
    imagengang: {
        width: 8,
        height: 13
    },
    viewkpi: {
        marginTop: 8,
        marginLeft: 7,
        width: 178,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(225, 225, 225, 1)'
    },
    imagekpi: {
        width: 32,
        height: 32,
        marginTop: 14,
        marginLeft: 8
    },
    viewmenu: {
        width: windowWidth,
        height: 276,
        marginTop: 30,
        backgroundColor: '#FFFFFF'
    },
    viewmenufirst: {
        flexDirection: 'row'
    },
    viewnhanhang: {
        flexDirection: 'column',
        marginLeft: -2
    },
    touchnhanhang: {
        marginTop: 20,
        marginLeft: 29,
        width: 48,
        height: 48
    },
    imagenhanhang: {
        width: 48,
        height: 48
    },
    textnhanhang: {
        marginLeft: 22,
        marginTop: 8,
        color: '#091E42',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        width: 70,
        textAlign: 'center'
    },
    viewkhaithacdi: {
        flexDirection: 'column'
    },
    touchkhaithacdi: {
        marginTop: 20,
        marginLeft: 35,
        width: 48,
        height: 48
    },
    imagekhaithacdi: {
        width: 48,
        height: 48
    },
    textkhaithacdi: {
        marginLeft: 25,
        marginTop: 8,
        width: 70,
        color: '#091E42',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center'
    },
    viewkhailaixenhan: {
        flexDirection: 'column'
    },
    touchlaixenhan: {
        marginTop: 20,
        marginLeft: 35,
        width: 48,
        height: 48
    },
    imagelaixenhan: {
        width: 48,
        height: 48
    },
    textlaixenhan: {
        marginLeft: 28,
        marginTop: 8,
        color: '#091E42',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        width: 70,
        textAlign: 'center'
    },
    viewbangiaoden: {
        flexDirection: 'column'
    },
    touchbangiaoden: {
        marginTop: 20,
        marginLeft: 30,
        width: 48,
        height: 48
    },
    imagebangiaoden: {
        width: 48,
        height: 48
    },
    textbangiaoden: {
        marginLeft: 21,
        marginTop: 8,
        color: '#091E42',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        width: 70,
        textAlign: 'center'
    },
    viewmenusecond: {
        flexDirection: 'row'
    },
    viewkhaithacden: {
        flexDirection: 'column',
        marginLeft: -2
    },
    touchkhaithacden: {
        marginTop: 34,
        marginLeft: 35,
        width: 48,
        height: 48
    },
    imagekhaithacden: {
        width: 48,
        height: 48
    },
    textkhaithacden: {
        marginLeft: 22,
        marginTop: 8,
        color: '#091E42',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        width: 70,
        textAlign: 'center'
    },
    viewgiaohang: {
        flexDirection: 'column'
    },
    touchgiaohang: {
        marginTop: 34,
        marginLeft: 35,
        width: 48,
        height: 48
    },
    imagegiaohang: {
        width: 48,
        height: 48
    },
    textgiaohang: {
        marginLeft: 23,
        marginTop: 8,
        color: '#091E42',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        width: 70,
        textAlign: 'center'
    },
    viewquetton: {
        flexDirection: 'column'
    },
    touchquetton: {
        marginTop: 34,
        marginLeft: 35,
        width: 48,
        height: 48
    },
    imagequetton: {
        width: 48,
        height: 48
    },
    textquetton: {
        marginLeft: 24,
        marginTop: 8,
        color: '#091E42',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        width: 70,
        textAlign: 'center'
    },
    viewkhac: {
        flexDirection: 'column'
    },
    touchkhac: {
        marginTop: 34,
        marginLeft: 35,
        width: 48,
        height: 48
    },
    imagekhac: {
        width: 48,
        height: 48
    },
    textkhac: {
        marginLeft: 26,
        marginTop: 8,
        color: '#091E42',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        width: 70,
        textAlign: 'center'
    },
    touchmenukhac: {
        marginTop: -113,
        marginLeft: 370,
        width: 20,
        height: 20
    },
    imagekhacsecond: {
        width: 48,
        height: 48
    },
    touchkhacsecond: {
        marginTop: -113,
        marginLeft: 8,
        width: 13,
        height: 18
    },
    imagemenukhac: {
        width: 8,
        height: 13
    },
    vieworderprocessing: {
        width: windowWidth,
        marginTop: 10
    },
    textdonhang: {
        marginTop: 16,
        marginLeft: 15,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 17,
        fontWeight: '700',
        color: 'rgba(68, 73, 77, 1)'
    },
    imagexuly: {
        marginTop: 17,
        marginLeft: 2,
        width: 24,
        height: 24
    },
    viewgiao1phan: {
        marginTop: 25,
        marginLeft: 35,
        flexDirection: 'column'
    },
    imagegiao1phan: {
        width: 50,
        height: 33
    },
    textgiao1phan: {
        marginTop: 12,
        marginLeft: -9,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 12,
        color: 'rgba(68, 73, 77, 1)'
    },
    vieweclipse2: {
        width: 15,
        height: 15,
        marginLeft: -7,
        marginTop: -12,
        borderRadius: 7.5,
        backgroundColor: 'rgba(242, 153, 74, 1)'
    },
    text2: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 9,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 4.5,
        marginTop: 1
    },
    viewall: {
        marginTop: 23,
        marginLeft: 50
    },
    imageall: {
        marginTop: 2,
        width: 27,
        height: 35
    },
    textall: {
        marginTop: 12,
        marginLeft: -9,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 12,
        color: 'rgba(68, 73, 77, 1)'
    },
    text11: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 9,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 2.5,
        marginTop: 1
    },
    vieweclipse11: {
        width: 15,
        height: 15,
        marginLeft: -7,
        marginTop: -12,
        borderRadius: 7.5,
        backgroundColor: '#EE0033'
    },
    viewgiaotiep: {
        marginLeft: 50,
        marginTop: 23,
        width: 70,
        height: 70
    },
    vieweclipse5: {
        width: 15,
        height: 15,
        marginLeft: -7,
        marginTop: -12,
        borderRadius: 7.5,
        backgroundColor: 'rgba(47, 128, 237, 1)'
    },
    text5: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 9,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 4,
        marginTop: 1
    },
    textgiaotiep: {
        marginTop: 10,
        marginLeft: -9,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 12,
        color: 'rgba(68, 73, 77, 1)'
    },
    viewgiaogap: {
        marginLeft: 15,
        marginTop: 23,
        width: 70,
        height: 70
    },
    imagegiaogap: {
        width: 36,
        height: 36
    },
    vieweclipse4: {
        width: 15,
        height: 15,
        marginLeft: -7,
        marginTop: -12,
        borderRadius: 7.5,
        backgroundColor: 'rgba(227, 59, 59, 1)'
    },
    text4: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 9,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 1)',
        marginLeft: 4.5,
        marginTop: 1
    },
    textgiaogap: {
        marginTop: 10,
        marginLeft: -2,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 12,
        color: 'rgba(68, 73, 77, 1)'
    },
    viewline: {
        marginTop: 17,
        backgroundColor: 'rgba(232, 232, 232, 1)',
        width: windowWidth,
        height: 1
    },
    viewliness: {
        marginTop: 1,
        backgroundColor: 'rgba(232, 232, 232, 1)',
        width: '100%',
        height: 1
    },
    viewfirst: {
        marginTop: 12,
        marginLeft: 15,
        flexDirection: 'row'
    },
    imagecolor: {
        marginTop: 4,
        marginLeft: 5,
        width: 12,
        height: 12
    },
    textids: {
        marginTop: 0.5,
        width: 77,
        marginLeft: 8,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '700'
    },
    textstores: {
        marginLeft: 15,
        marginTop: 0.2,
        width: 99,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        color: 'rgba(59, 124, 236, 1)'
    },
    viewerro: {
        width: 94,
        height: 22,
        borderRadius: 15,
        marginLeft: 45,
        marginTop: -5,
        position: 'relative'
    },
    imageerro: {
        width: 94,
        height: 22
    },
    textstatuss: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 1)',
        marginTop: 1,
        marginLeft: 6,
        position: 'absolute'
    },
    viewcontent: {
        flexDirection: 'column',
        marginTop: 11,
        marginLeft: 15
    },
    texttimedates: {
        width: 321,
        height: 18,
        marginLeft: 4,
        color: 'rgba(68, 73, 77, 1)',
        fontFamily: 'PS PE BeauSans Pro',
        fontSize: 13,
        fontWeight: '500'
    },
    texterro: {
        width: 321,
        height: 18,
        marginLeft: 4,
        marginTop: 4,
        fontFamily: 'PS PE BeauSans Pro',
        fontSize: 13,
        color: 'rgba(68, 73, 77, 1)',
        fontWeight: '500'
    },
    textnames: {
        marginTop: 4,
        fontFamily: 'PS PE BeauSans Pro',
        fontWeight: '700',
        fontSize: 13,
        color: 'rgba(68, 73, 77, 1)'
    },
    textaddresss: {
        marginTop: 4,
        fontFamily: 'PS PE BeauSans Pro',
        fontWeight: '500',
        fontSize: 13,
        color: 'rgba(68, 73, 77, 1)'
    },
    viewtextinfo: {
        marginLeft: 4,
        width: 347,
        height: 37,
        marginTop: 4
    },
    viewmenuorder: {
        flexDirection: 'row'
    },
    touch: {
        width: 88,
        height: 37,
        flexDirection: 'row'
    },
    imagecall: {
        width: 24,
        height: 24,
        marginTop: 8,
        marginLeft: 8
    },
    texttelephone: {
        marginTop: 12,
        marginLeft: 2,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 12,
        fontWeight: '500'
    },
    viewlines: {
        width: 1,
        height: 38,
        backgroundColor: 'rgba(216, 216, 216, 1)'
    },
    viewlineend: {
        backgroundColor: 'rgba(232, 232, 232, 1)',
        width: '100%',
        height: 1
    },
    imagesms: {
        width: 24,
        height: 24,
        marginTop: 8,
        marginLeft: 8
    },
    textsms: {
        width: 47,
        marginTop: 12,
        marginLeft: 2,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 12,
        fontWeight: '500'
    },
    imagestatuss: {
        width: 24,
        height: 24,
        marginTop: 8,
        marginLeft: 8
    },
    textsmsthanhcong: {
        width: 74,
        marginTop: 12,
        marginLeft: 2,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 12,
        fontWeight: '500'
    },
    imagerectange: {
        width: '100%',
        height: 150,
        marginTop: 4
    },
    viewincoms: {
        marginTop: 4,
        width: windowWidth,
        height: 232,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column'
    },
    viewthunhap: {
        marginTop: 16,
        width: 363,
        height: 24,
        marginLeft: 16,
        flexDirection: 'row'
    },
    textthunhaps: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '700',
        color: 'black'
    },
    textVnd: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(238, 0, 51, 1)'
    },
    textday: {
        marginTop: 2,
        marginLeft: 104,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        color: 'rgba(68, 73, 77, 1)'
    },
    touchday: {
        width: 24,
        height: 24,
        marginLeft: 4,
        marginTop: 1
    },
    imageday: {
        width: 24,
        height: 24
    },
    viewthuoctinh: {
        width: windowWidth,
        height: 30,
        marginTop: 16,
        flexDirection: 'row'
    },
    textthucthi: {
        marginLeft: 164,
        marginTop: 6,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600',
        color: 'rgba(68, 73, 77, 1)'
    },
    textneucogang: {
        marginLeft: 46,
        marginTop: 6,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600',
        color: 'rgba(68, 73, 77, 1)'
    },
    viewthulaogao: {
        width: windowWidth,
        height: 48,
        borderWidth: 0.2,
        borderColor: '#D3D3D3',
        flexDirection: 'row'
    },
    viewcolorthulao: {
        width: 14,
        marginTop: 8,
        marginLeft: 16,
        height: 14,
        borderRadius: 3,
        backgroundColor: 'rgba(59, 124, 236, 1)'
    },
    textthulaogiao: {
        width: 75,
        marginTop: 6,
        marginLeft: 9,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600'
    },
    textbill: {
        width: 47,
        marginTop: 6,
        marginLeft: 52,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600'
    },
    textvnds: {
        width: 49,
        marginLeft: 50,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '300'
    },
    text5bill: {
        width: 47,
        marginTop: 6,
        marginLeft: 83,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600'
    },
    text100k: {
        width: 49,
        marginLeft: 80,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '300'
    },
    viewcolorthulaonnhan: {
        width: 14,
        marginTop: 8,
        marginLeft: 16,
        height: 14,
        borderRadius: 3,
        backgroundColor: 'rgba(246, 175, 57, 1)'
    },
    text0bill: {
        width: 31,
        marginTop: 6,
        marginLeft: 64,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600'
    },
    text0tr: {
        width: 22,
        marginLeft: 70,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '300'
    },
    text0k: {
        width: 47,
        marginTop: 6,
        marginLeft: 97,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600'
    },
    text0bills: {
        width: 49,
        marginLeft: 86,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '300'
    },
    viewcolorsuport: {
        width: 14,
        marginTop: 8,
        marginLeft: 16,
        height: 14,
        borderRadius: 3,
        backgroundColor: 'rgba(227, 59, 59, 1)'
    },
    textkm: {
        width: 35,
        marginTop: 6,
        marginLeft: 55,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600'
    },
    texttr: {
        width: 30,
        marginLeft: 60,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '300'
    },
    textkms: {
        width: 39,
        marginLeft: 83,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600'
    },
    textk: {
        width: 26,
        marginLeft: 96,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '300'
    },
    viewbottom: {
        width: windowWidth,
        height: 56,
        marginTop: 2,
        flexDirection: 'row'
    },
    viewbottommain: {
        flexDirection: 'column'
        //  backgroundColor: 'red'
    },
    imagemain: {
        width: 30,
        height: 25,
        marginTop: 10,
        marginLeft: 25
    },
    textmain: {
        width: 75,
        height: 17,
        marginLeft: 10,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '500'
    },
    imagebottomsms: {
        width: 30,
        height: 25,
        marginTop: 10,
        marginLeft: 25
    },
    textbottomsms: {
        width: 75,
        height: 17,
        marginLeft: 12,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '500'
    },
    imagemains: {
        width: 50,
        height: 50,
        marginTop: 2
    },
    imagenotification: {
        width: 30,
        height: 25,
        marginTop: 10,
        marginLeft: 26
    },
    imagebottomthongbao: {
        width: 30,
        height: 25,
        marginTop: 10,
        marginLeft: 30
    },
    imagebottomprofile: {
        width: 30,
        height: 25,
        marginTop: 10,
        marginLeft: 28
    },
    textbootomthongbao: {
        width: 75,
        height: 17,
        marginLeft: 12,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '500'
    },
    touchcontent: {
        width: '100%',
        marginBottom: 10
    }
});
export default styles;
