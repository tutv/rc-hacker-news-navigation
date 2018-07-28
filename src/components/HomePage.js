import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import TopNews from "./TopNews"
import NewsDetailPage from "./NewsDetailPage"

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
                <TopNews navigation={this.props.navigation}/>
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
        },
        News: {
            screen: NewsDetailPage
        }
    },
    {
        initialRouteName: 'Home',
    }
)