import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SmsComponent from './Sms/Sms';
import InboxComponent from './Inbox/Inbox';
const Stack = createNativeStackNavigator();
function Sms() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SmsComponent">
                <Stack.Screen
                    name="SmsComponent"
                    component={SmsComponent}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Sms;
