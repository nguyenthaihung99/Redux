import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './styles';

export default function BorderComponent() {
    return (
        <SafeAreaView style={{ flexDirection: 'column' }}>
            <View style={styles.viewmenufirst}>
                <View style={styles.viewnhanhang}>
                    <TouchableOpacity style={styles.touchnhanhang}>
                        <Image
                            style={styles.imagenhanhang}
                            source={{ uri: 'ic_main_nhanhang' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textnhanhang}>Nhận hàng</Text>
                </View>
                <View style={styles.viewkhaithacdi}>
                    <TouchableOpacity style={styles.touchkhaithacdi}>
                        <Image
                            style={styles.imagekhaithacdi}
                            source={{ uri: 'ic_main_khaithac' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textkhaithacdi}>Khai thác đi</Text>
                </View>
                <View style={styles.viewkhailaixenhan}>
                    <TouchableOpacity style={styles.touchlaixenhan}>
                        <Image
                            style={styles.imagelaixenhan}
                            source={{ uri: 'ic_main_laixenhan' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textlaixenhan}>Lái xe nhận</Text>
                </View>
                <View style={styles.viewbangiaoden}>
                    <TouchableOpacity style={styles.touchbangiaoden}>
                        <Image
                            style={styles.imagebangiaoden}
                            source={{ uri: 'ic_main_bangiaoden' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textbangiaoden}>Bàn giao đến</Text>
                </View>
            </View>
            <View style={styles.viewmenusecond}>
                <View style={styles.viewkhaithacden}>
                    <TouchableOpacity style={styles.touchkhaithacden}>
                        <Image
                            style={styles.imagekhaithacden}
                            source={{ uri: 'ic_main_khaithacden' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textkhaithacden}>Khai thác đến</Text>
                </View>
                <View style={styles.viewgiaohang}>
                    <TouchableOpacity style={styles.touchgiaohang}>
                        <Image
                            style={styles.imagegiaohang}
                            source={{ uri: 'ic_main_giaohang' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textgiaohang}>Giao hàng</Text>
                </View>
                <View style={styles.viewquetton}>
                    <TouchableOpacity style={styles.touchquetton}>
                        <Image
                            style={styles.imagequetton}
                            source={{ uri: 'ic_main_quetton' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textquetton}>Quét tồn</Text>
                </View>
                <View style={styles.viewkhac}>
                    <TouchableOpacity style={styles.touchkhac}>
                        <Image
                            style={styles.imagekhac}
                            source={{ uri: 'ic_main_khac' }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textkhac}>Khác</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.touchmenukhac}>
                    <Image
                        style={styles.imagemenukhac}
                        source={{ uri: 'ic_main_ngang' }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
