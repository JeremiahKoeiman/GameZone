import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone'
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#242424',
        headerStyle: {
            backgroundColor: '#bababa',
            height: 60
        }
    }
})

export default createAppContainer(homeStack)
