export const getListNews = () => {
    return fetch('https://hacker-news.firebaseio.com/v0/beststories.json')
        .then(response => response.json())
}

export const getListJobs = () => {
    return fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
        .then(response => response.json())
}

export const getListAsk = () => {
    return fetch('https://hacker-news.firebaseio.com/v0/askstories.json')
        .then(response => response.json())
}

export const getNewsDetail = id => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(response => response.json())
}