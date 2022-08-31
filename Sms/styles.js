import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    viewtopbg: {
        width: '100%',
        height: 70
    },
    texttitle: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 33,
        marginLeft: 156,
        position: 'absolute',
        color: 'rgba(255, 255, 255, 1)'
    },
    imageback: {
        width: 12,
        height: 20,
        marginTop: 34,
        marginLeft: 16
    },
    viewnewsms: {
        width: 363,
        height: 46,
        marginLeft: 16,
        marginTop: 8,
        flexDirection: 'row'
    },
    imageavt: {
        width: 46,
        height: 46,
        marginLeft: 16
    },
    textiduser: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 16,
        color: 'rgba(68, 73, 77, 1)'
    },
    textcontent: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 16,
        marginTop: 4,
        color: ' rgba(149, 148, 148, 1)',
        width: 242
    },
    texttime: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        width: 35,
        height: 18,
        fontWeight: '500',
        marginLeft: 16,
        marginTop: 4,
        color: ' rgba(149, 148, 148, 1)'
    },
    viewline: {
        width: 363,
        height: 0.5,
        backgroundColor: 'rgba(149, 148, 148, 1)',
        marginLeft: 16,
        marginTop: 10
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
        fontWeight: '500',
        color: 'rgba(238, 0, 51, 1)'
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
        fontWeight: '500'
    }
});
export default styles;
