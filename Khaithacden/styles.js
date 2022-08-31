import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    viewtopbg: {
        width: '100%',
        height: 70,
        backgroundColor: '#EE0033'
    },
    texttitle: {
        marginTop: 33,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 18,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center'
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
        width: '100%',
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    texttitles: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600',
        width: 75,
        textAlign: 'center'
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
        marginLeft: 30,
        marginTop: 2,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        height: 24,
        fontWeight: '500',
        color: '#44494D'
    },
    touchboloc: {
        width: 77,
        height: 24,
        marginTop: 10,
        marginLeft: 85,
        flexDirection: 'row'
    },
    imageboloc: {
        width: 24,
        height: 24,
        marginTop: 2,
        marginLeft: 2
    },
    viewborder: {
        marginTop: 8,
        width: windowWidth,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column'
    },
    textnamedonhang: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 12,
        marginLeft: 16,
        color: 'rgba(238, 0, 51, 1)',
        height: 24
    },
    imagemap: {
        width: 24,
        height: 24,
        marginTop: 8,
        marginLeft: 16
    },
    textkhuvuc: {
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 9,
        marginLeft: 8,
        color: 'rgba(68, 73, 77, 1)',
        height: 24
    }
});
export default styles;
