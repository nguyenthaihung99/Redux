import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import styles from './styles';

export default function HeaderComponent() {
    return (
        <SafeAreaView>
            <View style={styles.viewtop}>
                <View style={styles.viewprofile}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.imageavt}
                            source={{ uri: 'ic_main_avt' }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textname}>
                                Nguyễn Xuân Thành
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textaddress}>
                                    hung0103 •
                                </Text>
                                <Text style={styles.text4header}>4.5</Text>
                                <Image
                                    style={styles.imagestar}
                                    source={{ uri: 'ic_main_star' }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.viewpay}>
                    <Image
                        style={styles.imagepay}
                        source={{ uri: 'ic_main_imagepay' }}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.textsurplus}>14,940,000 đ</Text>
                        <Text style={styles.textviettelpay}>ViettelPay</Text>
                    </View>
                    <TouchableOpacity style={styles.touchadd}>
                        <Image
                            style={styles.imageadd}
                            source={{ uri: 'ic_main_add' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewmenu} />
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        marginTop: 140
                    }}>
                    <View style={styles.viewincome}>
                        <Image
                            style={styles.imagethunhap}
                            source={{ uri: 'ic_main_thunhap' }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textsodu}>14,940,000 đ</Text>
                            <Text style={styles.textthunhap}>Thu nhập</Text>
                        </View>
                        <TouchableOpacity style={styles.touchngang}>
                            <Image
                                style={styles.imagengang}
                                source={{ uri: 'ic_main_ngang' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewkpi}>
                        <Image
                            style={styles.imagekpi}
                            source={{ uri: 'ic_main_kpi' }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textsodu}>66/100</Text>
                            <Text style={styles.textthunhap}>
                                KPI giao hàng
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.touchngang}>
                            <Image
                                style={styles.imagengang}
                                source={{ uri: 'ic_main_ngang' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
