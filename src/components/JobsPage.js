import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import {View, Text, StyleSheet} from 'react-native'

class JobsPage extends Component {
    static navigationOptions = {
        title: 'Jobs',
        headerStyle: {
            backgroundColor: '#ff6600'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Jobs page</Text>
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
            screen: JobsPage
        }
    },
    {
        initialRouteName: 'Init',
    }
)