import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import Favourites from './Favourites';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Favourites: { screen: Favourites }
}, {initialRouteName: 'Home'})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
