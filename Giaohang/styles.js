import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    viewtopbg: {
        width: '100%',
        height: 70,
        backgroundColor: '#EE0033'
    },
    texttitle: {
        marginLeft: 153,
        marginTop: 33,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 18,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 1)'
    },
    touchback: {
        width: 25,
        height: 25,
        marginTop: 36,
        marginLeft: 16,
        position: 'absolute'
    },
    imageback: {
        width: 12,
        height: 20
    },
    viewtitle: {
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    texttitles: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600'
    },
    touchviewchonhan: {
        marginTop: 12,
        marginLeft: 14,
        width: 96,
        height: 32
    },
    viewchonhan: {
        width: 96,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(238, 0, 51, 1)'
    },
    textchonhan: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        width: 96,
        fontFamily: '600'
    },
    touchdahen: {
        marginTop: 12,
        marginLeft: 20,
        width: 81,
        height: 32
    },
    viewdahen: {
        width: 81,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FFFFFF'
    },
    textdahen: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontFamily: '600'
    },
    touchnhapdoanhthu: {
        marginTop: 12,
        marginLeft: 20,
        width: 144,
        height: 32
    },
    viewnhapdoanhthu: {
        width: 144,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FFFFFF'
    },
    textnhapdoanhthu: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontFamily: '600'
    },
    viewsearch: {
        width: 363,
        height: 36,
        marginTop: 11,
        marginLeft: 16,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'rgba(209, 209, 209, 1)',
        borderRadius: 6
    },
    touchsearch: {
        width: 24,
        height: 24,
        position: 'absolute',
        marginTop: 6,
        marginLeft: 8
    },
    imagesearch: {
        width: 24,
        height: 24
    },
    textsearch: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 40,
        marginTop: -2
        //  color: 'rgba(204, 204, 204, 1)'
    },
    touchQR: {
        width: 32,
        height: 32,
        marginLeft: 327,
        marginTop: 2,
        position: 'absolute'
    },
    imageQR: {
        width: 32,
        height: 32
    },
    textinfokienhang: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 17,
        fontWeight: '600',
        marginLeft: 16,
        marginTop: 13,
        color: 'rgba(68, 73, 77, 1)'
    },
    texttime: {
        marginLeft: 8,
        marginTop: 2,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        height: 24,
        width: 99,
        fontWeight: '500',
        color: '#44494D'
    },
    touchxuong: {
        width: 84,
        flexDirection: 'row',
        height: 24,
        marginTop: 8,
        marginLeft: 132
    },
    imagexuong: {
        width: 24,
        height: 24,
        marginLeft: 5
    },
    viewborder: {
        backgroundColor: '#FFFFFF',
        width: windowWidth,
        flexDirection: 'column',
        marginTop: 8
    },
    touchcheck: {
        width: 24,
        height: 24,
        marginLeft: 16,
        marginTop: 12
    },
    imagecheck: {
        width: 24,
        height: 24
    },
    textstore: {
        marginTop: 12,
        marginLeft: 16,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 24,
        color: 'rgba(238, 0, 51, 1)',
        width: 224,
        height: 24
    },
    touchsms: {
        width: 24,
        height: 24,
        marginLeft: 83,
        marginTop: 12
    },
    image: {
        width: 24,
        height: 24
    },
    touchcall: {
        width: 24,
        height: 24,
        marginLeft: 7,
        marginTop: 12
    },
    imagediachi: {
        width: 24,
        height: 24,
        marginLeft: 16,
        marginTop: 10
    },
    textdiachi: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 8,
        marginLeft: 13.5,
        width: 333,
        color: 'rgba(59, 124, 236, 1)'
    },
    imagesoluong: {
        marginTop: 8,
        marginLeft: 16,
        width: 24,
        height: 24
    },
    textsoluong: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 13,
        marginTop: 8,
        color: 'rgba(68, 73, 77, 1)'
    },
    textgiatri: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 13,
        marginTop: 8,
        color: 'rgba(68, 171, 74, 1)'
    },
    imagenhannhanh: {
        width: 24,
        height: 24,
        marginTop: 10,
        marginLeft: 155
    },
    textnhannhanh: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 13,
        fontWeight: '600',
        color: 'rgba(102, 102, 102, 1)',
        marginTop: 13,
        height: 18,
        textAlign: 'center'
    },
    viewlinefull: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(216, 216, 216, 1)',
        marginTop: 16
    },
    viewlineend: {
        width: '100%',
        marginTop: 13,
        backgroundColor: 'rgba(216, 216, 216, 1)'
    },
    viewbottom: {
        width: '100%',
        height: 58,
        backgroundColor: '#FFFFFF'
    },
    viewbntgoiy: {
        //flex: 1,
        width: 363,
        height: 42,
        marginTop: 8,
        marginLeft: 16,
        backgroundColor: 'rgba(238, 0, 51, 1)',
        borderRadius: 4
    },
    textbnt: {
        textAlign: 'center',
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 9,
        color: 'rgba(255, 255, 255, 1)'
    }
});
export default styles;
