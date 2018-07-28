import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet} from 'react-native'
import {getNewsDetail} from "../services/APIServices"
import moment from 'moment'

class NewsDetail extends Component {
    state = {
        news: {},
        loading: false
    }

    componentDidMount() {
        this._fetchDetail()
    }

    _fetchDetail = () => {
        this.setState({loading: true})

        getNewsDetail(this.props.id)
            .then(response => {
                this.setState({
                    loading: false,
                    news: response
                })
            })
            .catch(error => {
                console.error(error)

                this.setState({loading: false})
            })
    }

    render() {
        const {news, loading} = this.state

        console.log(news)

        const score = news.score || 0
        const pointText = score > 1 ? 'points' : 'point'
        const timeAgo = moment(news.time * 1000).fromNow()

        return (
            <View style={styles.container}>
                {
                    loading ? <Text>Loading....</Text> :
                        <View style={styles.wrapper}>
                            <Text style={styles.title}>{news.title}</Text>

                            <View style={styles.meta}>
                                <Text style={styles.metaText}>{score} {pointText} {timeAgo}</Text>
                            </View>
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },

    wrapper: {
        flexDirection: 'column',
        width: '100%'
    },

    title: {
        fontSize: 16,
        marginBottom: 5
    },

    meta: {},

    metaText: {
        color: '#828282',
        fontSize: 12
    }
})

NewsDetail.propTypes = {
    id: PropTypes.number,
}

export default NewsDetail