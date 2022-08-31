import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    imagetopbg: {
        width: '100%',
        height: 160
    },
    imageavt: {
        marginTop: 66,
        marginLeft: 22,
        width: 76,
        height: 76,
        position: 'absolute'
    },
    textname: {
        marginTop: 65,
        marginLeft: 116,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '700',
        fontSize: 21,
        color: '#FFFFFF'
    },
    textidnv: {
        marginTop: 2,
        marginLeft: 116,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF'
    },
    textdanhgia: {
        marginLeft: 116,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF'
    },
    imagestar: {
        width: 15,
        height: 15,
        marginLeft: 7,
        marginTop: 3
    },
    textstar: {
        marginLeft: 4,
        width: 22,
        height: 24,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 15,
        color: 'rgba(255, 209, 92, 1)'
    },
    viewborderprofile: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    imageupdateinfo: {
        marginTop: 12,
        marginLeft: 16,
        width: 32,
        height: 32
    },
    textupdateinfo: {
        marginTop: 16,
        marginLeft: 16,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 15,
        color: 'rgba(68, 73, 77, 1)'
    },
    imagengang: {
        marginTop: 16,
        marginLeft: 343,
        width: 24,
        height: 24,
        position: 'absolute'
    },
    viewline: {
        marginLeft: 64,
        width: '100%',
        height: 1,
        backgroundColor: '#E5E5E5'
    },
    viewtitelintroduce: {
        marginTop: 8,
        width: '100%',
        height: 32,
        backgroundColor: 'rgba(242, 242, 242, 1)'
    },
    texttitleintroduce: {
        marginTop: 8,
        marginLeft: 12,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        fontSize: 12,
        color: 'rgba(130, 130, 130, 1)'
    },
    viewintroduce: {
        width: 375,
        height: 56,
        flexDirection: 'row'
    },
    viewsignout: {
        marginTop: 8,
        width: '100%',
        height: 56,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    viewbottom: {
        width: windowWidth,
        height: 56,
        marginTop: 2,
        flexDirection: 'row'
    },
    viewbottommain: {
        flexDirection: 'column'
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
    textyourprofile: {
        width: 75,
        height: 17,
        marginLeft: 12,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '500',
        color: 'rgba(238, 0, 51, 1)'
    }
});
export default styles;
