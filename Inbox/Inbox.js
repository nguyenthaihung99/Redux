import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function HearderComponent() {
    const navigation = useNavigation();
    return (
        <View>
            <Image
                style={styles.imagehearder}
                source={require('./Icon_inbox/ic_inbox_topbg.png')}
            />
            <Text style={styles.textiduser}>1689645205790</Text>
            <TouchableOpacity
                style={styles.touchback}
                onPress={() => navigation.goBack('Firstmainpage')}>
                <Image
                    style={styles.imageback}
                    source={require('./Icon_inbox/ic_inbox_back.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
function BordercontentinboxComponent() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.touchprofileKH}>
                    <Image
                        style={styles.imageavt}
                        source={require('./Icon_inbox/ic_inbox_avt.png')}
                    />
                </TouchableOpacity>
                <View>
                    <View style={styles.viewinboxfirst}>
                        <Text style={styles.textcontentfirst}>
                            em chào anh ạ
                        </Text>
                    </View>
                    <View style={styles.viewinboxsecond}>
                        <Text style={styles.textcontentfirst}>
                            bao giờ anh đến lấy hàng
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewinput}>
                <TextInput
                    style={styles.textinputt}
                    placeholder="Enter password"
                />
            </View>
        </View>
    );
}
export default function InboxComponent() {
    return (
        <View>
            <ScrollView>
                <HearderComponent />
                <BordercontentinboxComponent />
            </ScrollView>
        </View>
    );
}
