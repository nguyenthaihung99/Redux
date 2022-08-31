import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    imagetop: {
        width: '100%',
        height: 70
    },
    textheader: {
        position: 'absolute',
        marginTop: 33,
        marginLeft: 150,
        width: 88,
        height: 23,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '600',
        fontSize: 18,
        color: 'rgba(255, 255, 255, 1)'
    },
    viewdanhdau: {
        width: '100%',
        height: 40,
        marginTop: 75,
        flexDirection: 'row'
    },
    texttime: {
        width: 59,
        height: 24,
        marginTop: 10,
        marginLeft: 16,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(68, 73, 77, 1)'
    },
    touchdanhdau: {
        marginTop: 14,
        width: 99,
        height: 18,
        marginLeft: 205
    },
    textdanhdau: {
        width: 99,
        height: 18,

        color: 'rgba(59, 124, 236, 1)',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500'
    },

    viewborder: {
        marginTop: 8,
        width: '100%'
        // backgroundColor: 'red'
    },
    imageviettel: {
        width: 48,
        height: 48,
        marginTop: 9,
        marginLeft: 17
    },
    texttitle: {
        marginLeft: 13,
        marginTop: 8,
        width: 240,
        height: 20,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600',
        color: '#44494D',
        lineHeight: 20
    },
    textcontent: {
        width: 290,
        height: 36,
        marginTop: 3,
        marginLeft: 13,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '500',
        color: '#959494',
        lineHeight: 20
    },
    viewline: {
        marginTop: 15,
        width: '100%',
        height: 0.3,
        backgroundColor: '#959494'
    },
    textdate: {
        width: 30,
        height: 15,
        marginTop: 10,
        marginLeft: 8,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 10,
        fontWeight: '500',
        color: '#8A8A8F',
        lineHeight: 18
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
        fontWeight: '500',
        color: '#EE0033'
    },
    textbootomprofile: {
        width: 75,
        height: 17,
        marginLeft: 12,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '500'
    }
});
export default styles;
