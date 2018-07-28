import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import {View, StyleSheet} from 'react-native'
import JobLists from "./ListJobs"

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