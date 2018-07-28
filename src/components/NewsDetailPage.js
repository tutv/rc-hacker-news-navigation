import React, {Component} from 'react'
import NewsDetail from "./NewsDetail"

class NewsDetailPage extends Component {
    render() {
        const itemId = this.props.navigation.getParam('id')

        return (
            <NewsDetail id={itemId}/>
        )
    }
}

export default NewsDetailPage