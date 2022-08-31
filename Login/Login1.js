import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
export default function login1() {
    return (
        <SafeAreaView>
            <Image
                style={styles.imagecover}
                source={{ uri: 'ic_login_lgcover' }}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    imagecover: {
        width: windowWidth,
        height: 167
    }
});
function Bottommain() {
    const HomeScrenn = () => {
        return <SafeAreaView></SafeAreaView>;
    };
}
