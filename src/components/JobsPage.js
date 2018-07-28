import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import {View, StatusBar, StyleSheet} from 'react-native'
import JobLists from "./ListJobs"

class JobsPage extends Component {
    static navigationOptions = {
        title: 'Jobs',
        headerStyle: {
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            color: '#fff'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <JobLists/>
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