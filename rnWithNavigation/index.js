import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screen';
console.disableYellowBox = true
registerScreens();

// start the app
Navigation.startTabBasedApp({
    tabs: [
    {
        label: 'Home',
        screen: 'belajarRn.Home', // this is a registered name for a screen
        icon: require('./img/menu_home.png'),
        title: 'Home'
    },
    {
        label: 'Chat',
        screen: 'belajarRn.Chat',
        icon: require('./img/menu_settings.png'),
        title: 'Chat Page'
    },
    {
        label: 'Setting',
        screen: 'belajarRn.Setting',
        icon: require('./img/menu_settings.png'),
        title: 'Setting'
    }
    ]
});

// Navigation.startSingleScreenApp({
//     screen: {
//       screen: 'belajarRn.Login', 
//       title: 'Halaman Login', 
//     },
// });

// export const rootPage = () => {
//     // start the app
//     Navigation.startTabBasedApp({
//         tabs: [
//         {
//             label: 'Home',
//             screen: 'belajarRn.Home', // this is a registered name for a screen
//             icon: require('./img/menu_home.png'),
//             title: 'Home'
//         },
//         {
//             label: 'Setting',
//             screen: 'belajarRn.Setting',
//             icon: require('./img/menu_settings.png'),
//             title: 'Setting'
//         }
//         ]
//   });
// }