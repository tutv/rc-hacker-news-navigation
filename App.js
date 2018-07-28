import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'
import {Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomePage from "./src/components/HomePage"
import JobsPage from "./src/components/JobsPage"
import AskPage from "./src/components/AskPage"

const iconMap = {
    Home: 'ios-home',
    Jobs: 'ios-laptop',
    Ask: 'ios-help'
}

export default createBottomTabNavigator({
    Home: HomePage,
    Jobs: JobsPage,
    Ask: AskPage
}, {
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state
            const iconName = iconMap[routeName] || 'ios-information'

            if (routeName === 'Home') {
                return <Image
                    style={{width: 15, height: 15}}
                    source={{uri: 'https://news.ycombinator.com/y18.gif'}}/>
            }

            return <Ionicons name={iconName} size={25} color={tintColor}/>;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
})