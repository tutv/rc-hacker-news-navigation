import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import TopNews from "./TopNews"

class HomePage extends Component {
    static navigationOptions = {
        title: 'News',
        headerStyle: {
            backgroundColor: '#ff6600'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TopNews/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
})

export default createStackNavigator(
    {
        Home: {
            screen: HomePage
        }
    },
    {
        initialRouteName: 'Home',
    }
)