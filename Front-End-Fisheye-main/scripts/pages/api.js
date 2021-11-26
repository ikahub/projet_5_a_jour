class userApi {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        //super(url)
        this._url = url
    }

    async getUsers() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }
}

