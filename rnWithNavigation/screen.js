import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Setting from './Setting';
import ModalPage from './ModalPage';
import DetailPage from './DetailPage';
import Chat from './Chat';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('belajarRn.Login', () => Login);
    Navigation.registerComponent('belajarRn.Register', () => Register);
    Navigation.registerComponent('belajarRn.Home', () => Home);
    Navigation.registerComponent('belajarRn.Setting', () => Setting);
    Navigation.registerComponent('belajarRn.ModalPage', () => ModalPage);
    Navigation.registerComponent('belajarRn.DetailPage', () => DetailPage);
    Navigation.registerComponent('belajarRn.Chat', () => Chat);
}