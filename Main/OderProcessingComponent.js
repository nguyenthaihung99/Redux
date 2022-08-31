import React from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './styles';

export default function orderprocessingComponent() {
    return (
        <SafeAreaView>
            <View style={styles.vieworderprocessing}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textdonhang}>Đơn hàng cần xử lý</Text>
                    <Image
                        style={styles.imagexuly}
                        source={{ uri: 'ic_main_imagexuly' }}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.viewgiao1phan}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.imagegiao1phan}
                                        source={{
                                            uri: 'ic_main_giao1phan'
                                        }}
                                    />
                                </TouchableOpacity>
                                <View style={styles.vieweclipse2}>
                                    <Text style={styles.text2}>2</Text>
                                </View>
                            </View>
                            <Text style={styles.textgiao1phan}>
                                Giao 1 phần
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.viewall}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.imageall}
                                        source={{
                                            uri: 'ic_main_all'
                                        }}
                                    />
                                </TouchableOpacity>
                                <View style={styles.vieweclipse11}>
                                    <Text style={styles.text11}>11</Text>
                                </View>
                            </View>
                            <Text style={styles.textall}>Sửa đơn</Text>
                        </View>
                    </View>
                    <View style={styles.viewgiaotiep}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageall}
                                    source={{
                                        uri: 'ic_main_giaotiep'
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={styles.vieweclipse5}>
                                <Text style={styles.text5}>5</Text>
                            </View>
                        </View>
                        <Text style={styles.textgiaotiep}>Giao Tiếp</Text>
                    </View>
                    <View style={styles.viewgiaogap}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imagegiaogap}
                                    source={{
                                        uri: 'ic_main_giaogap'
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={styles.vieweclipse4}>
                                <Text style={styles.text4}>4</Text>
                            </View>
                        </View>
                        <Text style={styles.textgiaogap}>Giao Gấp</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewline} />
        </SafeAreaView>
    );
}
