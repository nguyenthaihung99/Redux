/**
 * @format
 */
import { AppRegistry } from 'react-native';
import FlashScreen from './FlashScreen/FlashScreen';
import login1 from './Login/Login1';
import { name as appName } from './app.json';
import Firstmainpage from './Main/Firstmainpage';
import navigators from './Bottom/Main';
import Bottomapp from './Bottom/yourProfile';
import HomeScreen from './Bottom/Sms';
import App from './App';
import HearderComponent from './Notification/notification';
import YourProfile from './yourProfile/YourProfile';
import SmsComponent from './Sms/Sms';
import Notification from './Notification/notification';
import Secondmainpgae from './Main/Secondmainpage';
import InboxComponent from './Inbox/Inbox';
import Sms from './Sms';
import Giaohang from './Giaohang/giaohang';
import KhaithacdenComponent from './Khaithacden/khaithacden';
import Reduxs from './ReduxCounter/Hzzz';
AppRegistry.registerComponent(appName, () => Reduxs);
