import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import moment from 'moment'
import {getNewsDetail} from "../services/APIServices"

class NewsItem extends PureComponent {
    state = {
        news: {},
        loading: false
    }

    _mounted = false

    componentDidMount() {
        const {index} = this.state
        setTimeout(() => {
            if (!this._mounted) return
            this._fetchDetail()
        }, index * 1000 || 0)

        this._mounted = true
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            this._fetchDetail()
        }
    }

    componentWillUnmount() {
        this._mounted = true
    }

    _fetchDetail = () => {
        const {id} = this.props

        this.setState({
            loading: true
        })

        return getNewsDetail(id)
            .then(result => {
                if (!this._mounted) return

                this.setState({
                    news: result ? result : {},
                    loading: false
                })
            })
            .catch(error => {
                if (!this._mounted) return
                console.error('Fetch error', error)

                this.setState({loading: false})
            })
    }

    _handlePressNews = () => {
        this.props.onClick && this.props.onClick(this.props.id)
    }

    render() {
        const {index} = this.props
        const {news, loading} = this.state

        const score = news.score || 0
        const pointText = score > 1 ? 'points' : 'point'
        const timeAgo = moment(news.time * 1000).fromNow()

        return (
            <TouchableOpacity onPress={this._handlePressNews}>
                <View style={styles.container}>
                    <View style={styles.left}>
                        <Text style={styles.index}>{index + 1}.</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>
                            {
                                loading ? 'Loading...' : news.title
                            }
                        </Text>
                        {
                            !!news && Object.keys(news).length &&
                            <Text style={styles.meta}>{news.score || 0} {pointText} {timeAgo}</Text>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

NewsItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        minHeight: 30,
    },

    left: {
        marginRight: 10
    },

    right: {},

    index: {
        color: '#828282',
        fontSize: 14,
        minWidth: 15,
        textAlign: 'right'
    },

    title: {
        color: '#000',
        fontSize: 14,
        paddingRight: 20,
        flex: 1,
        flexWrap: 'wrap'
    },

    meta: {
        color: '#828282',
        fontSize: 12
    }
})

export default NewsItem