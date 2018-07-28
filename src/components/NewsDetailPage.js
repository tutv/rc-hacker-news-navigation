import React, {Component} from 'react'
import NewsDetail from "./NewsDetail"

class NewsDetailPage extends Component {
    static navigationOptions = {
        title: 'Detail',
        headerStyle: {
            backgroundColor: '#ff6600'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }

    render() {
        const itemId = this.props.navigation.getParam('id')

        return (
            <NewsDetail id={itemId}/>
        )
    }
}

export default NewsDetailPage