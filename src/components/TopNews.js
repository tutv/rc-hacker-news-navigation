import React, {Component} from 'react'
import {View, Text, ScrollView, RefreshControl, FlatList, StyleSheet} from 'react-native'
import NewsItem from "./NewsItem"

class TopNews extends Component {
    state = {
        news: [],
        error: '',
        loading: false
    }

    _mounted = false

    componentDidMount() {
        this._mounted = true
        this._fetchListNews()
    }

    componentWillUnmount() {
        this._mounted = false
    }

    _fetchListNews = () => {
        this.setState({loading: true})
        console.log('fetching...')

        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then(result => {
                if (!this._mounted) return

                this.setState({
                    loading: false,
                    news: Array.isArray(result) ? result : [],
                    error: ''
                })
            })
            .catch(error => {
                if (!this._mounted) return
                const message = error.message || 'Fetch list news failed'

                this.setState({
                    error: message,
                    loading: false
                })
            })
    }

    _handleRefresh = () => {
        this._fetchListNews()
    }

    _getDataNews = () => {
        const {news} = this.state

        return news.map((id, index) => ({
            key: id + '',
            id,
            index
        }))
    }

    render() {
        const {error, loading} = this.state
        const dataNews = this._getDataNews()

        return (
            <View style={styles.container}>
                {
                    !!error ? <Text>{error}</Text> :
                        <FlatList
                            initialNumToRender={12}
                            refreshControl={
                                <RefreshControl
                                    refreshing={loading}
                                    onRefresh={this._handleRefresh}/>
                            }
                            data={dataNews}
                            renderItem={({item}) => {
                                const {id, index} = item

                                return <NewsItem index={index} id={id}/>
                            }}
                        />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#f6f6ef',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default TopNews