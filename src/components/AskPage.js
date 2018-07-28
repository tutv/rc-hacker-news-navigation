import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {createStackNavigator} from "react-navigation"

class AskPage extends Component {
    static navigationOptions = {
        title: 'Ask'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Ask page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
})

export default createStackNavigator(
    {
        Init: {
            screen: AskPage
        }
    },
    {
        initialRouteName: 'Init',
    }
)