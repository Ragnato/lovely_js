import { Octokit } from 'octokit'
import configHelper from '../helper/config.js'

const octokit = new Octokit({ 
  auth: configHelper.getGithubToken(),
})

const getUser = async () => {
    return await octokit.request('GET /user', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
}


const githubClient = {
    getUser
}

export default githubClient