import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstmainpage from './Main/Firstmainpage';
import HomeScreen from './Bottom/Sms';
import Notification from './Notification/notification';
import Yourprofile from './yourProfile/YourProfile';
import SmsComponent from './Sms/Sms';
import Secondmainpage from './Main/Secondmainpage';
import InboxComponent from './Inbox/Inbox';
import Nhanhang_ChonhanComponent from './Nhanhang_chonhan/Nhanhang_chonhan';
import Giaohang from './Giaohang/giaohang';
import KhaithacdenComponent from './Khaithacden/khaithacden';
const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="YourProfile">
                <Stack.Screen
                    name="Firstmainpage"
                    component={Firstmainpage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Nhanhang_ChonhanComponent"
                    component={Nhanhang_ChonhanComponent}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Giaohang"
                    component={Giaohang}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="KhaithacdenComponent"
                    component={KhaithacdenComponent}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="InboxComponent"
                    component={InboxComponent}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SmsComponent"
                    component={SmsComponent}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Yourprofile"
                    component={Yourprofile}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Secondmainpage"
                    component={Secondmainpage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
