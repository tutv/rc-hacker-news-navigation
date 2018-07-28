import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation'

class HomePage extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#ff6600'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home page</Text>
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