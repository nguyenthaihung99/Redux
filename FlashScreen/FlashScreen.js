import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground,
    View
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function FlashScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                style={styles.imagebackground}
                source={{ uri: 'ic_flashscreen_bg' }}
            />
            <View style={{ flexDirection: 'column' }}>
                <Image
                    style={styles.imageapp}
                    source={{ uri: 'ic_flashscreen_app' }}
                />
                <Text style={styles.textVTman}>VTMan</Text>
            </View>
            <View style={styles.viewcontent}>
                <Text style={styles.textcontent1}>Nhanh</Text>
                <Text style={styles.textcontent2}>Trung Thực</Text>
                <Text style={styles.textcontent3}>Thân Thiện</Text>
                <Text style={styles.textcontent4}>Sáng Tạo</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    imagebackground: {
        width: windowWidth,
        height: windowHeight - 35,
        position: 'absolute'
    },
    imageapp: {
        width: 115,
        height: 111,
        marginTop: 218,
        marginLeft: 148
    },
    textVTman: {
        marginLeft: 147,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 36,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 1)'
    },
    viewcontent: {
        marginTop: 54,
        marginLeft: 44,
        width: 306,
        height: 135
    },
    textcontent1: {
        marginLeft: 48,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 18,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 1)'
    },
    textcontent2: {
        marginTop: 32,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 18,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 1)'
    },
    textcontent3: {
        marginTop: -39,
        marginLeft: 203,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 18,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 1)'
    },
    textcontent4: {
        marginTop: 46,
        marginLeft: 160,
        fontFamily: 'FS PF BeauSans Pro',
        fontSize: 18,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 1)'
    }
});
