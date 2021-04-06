const fetchConfig = {
    method: 'GET',
    headers: {
        'x-api-key': 'MjUOMDk5'
    }
};

const getImage = () => {
    return fetch(`https://api.thecatapi.com/v1/images/search`, fetchConfig)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            const image = {
                url: res[0] ? res[0].url : '',
                id: res[0] ? res[0].id : '',
            };
            return image;
        })
        .catch(error => {
        })
};

const addList = (url, id) => {
    const list = {
        url,
        id,
    };
    return list;
};

export default {
    getImage,
    addList
};