'use strict'

const serviceFactory = require('../serviceFactory')
const { apis } = require('../constants/index')

const getGithubUser = () => {
    const client = serviceFactory.getApiClients[apis.GITHUB]

    try {
        const user = client.getUser()

        console.log("ASDSADASDSAD")
        console.log(user)
    } catch (error) {
        
    }
}

module.exports = {
    getGithubUser
}