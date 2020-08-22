import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Forget from '../screens/forget';
import Drawer from '../screens/drawer';
import Lifecycle from '../screens/lifecycle';

const App_Stack = createStackNavigator({
    Home: {
        screen: Home
        
    },
    Details: {
        screen: Details
    },
    Forget: {
        screen: Forget
    },
    Drawer: {
        screen: Drawer
       
    },
    Lifecycle: {
        screen: Lifecycle
       
    },
},
{
    defaultNavigationOptions: () =>({
     headerShown: false,
     headerBackground: () => (
         <Image source={require('../../assets/images/iot.jpg')}
        />
     )
    }),
}
);
export default createAppContainer(
    App_Stack
);
