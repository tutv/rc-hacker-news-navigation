import React, {Component} from 'react'
import NewsDetail from "./NewsDetail"

class NewsDetailPage extends Component {
    static navigationOptions = {
        title: 'News',
        headerStyle: {
            backgroundColor: '#ff6600'
        },
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