import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './styles';

export default function incomeComponent() {
    return (
        <SafeAreaView>
            <Image
                style={styles.imagerectange}
                source={{ uri: 'ic_main_imagerectange' }}
            />
            <View style={styles.viewincoms}>
                <View style={styles.viewthunhap}>
                    <Text>
                        {<Text style={styles.textthunhaps}>Thu Nhập : </Text>}
                        {<Text style={styles.textVnd}>4,595,670đ</Text>}
                    </Text>
                    <Text style={styles.textday}>Hôm nay</Text>
                    <TouchableOpacity style={styles.touchday}>
                        <Image
                            style={styles.imageday}
                            source={{ uri: 'ic_main_history' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewthuoctinh}>
                    <Text style={styles.textthucthi}>Thực thi</Text>
                    <Text style={styles.textneucogang}>Nếu cố gắng</Text>
                </View>
                <View style={styles.viewthulaogao}>
                    <View style={styles.viewcolorthulao} />
                    <Text style={styles.textthulaogiao}>Thù lao giao</Text>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.textbill}>981 bill</Text>
                        <Text style={styles.textvnds}>4,595 tr</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text5bill}>+5 bill</Text>
                        <Text style={styles.text100k}>+100 k</Text>
                    </View>
                </View>
                <View style={styles.viewthulaogao}>
                    <View style={styles.viewcolorthulaonnhan} />
                    <Text style={styles.textthulaogiao}>Thù lao nhận</Text>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text0bill}>0 bill</Text>
                        <Text style={styles.text0tr}>0 tr</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text0k}>+0 k</Text>
                        <Text style={styles.text0bills}>+0 bill</Text>
                    </View>
                </View>
                <View style={styles.viewthulaogao}>
                    <View style={styles.viewcolorsuport} />
                    <Text style={styles.textthulaogiao}>Thù lao nhận</Text>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.textkm}>20km</Text>
                        <Text style={styles.texttr}>20 tr</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.textkms}>+0 km</Text>
                        <Text style={styles.textk}>+0 k</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
