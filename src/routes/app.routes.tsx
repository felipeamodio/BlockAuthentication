import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Settings" component={Settings} />
        </Navigator>
    )
}