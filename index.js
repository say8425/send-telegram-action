const core = require('@actions/core')
const axios = require('axios')
const telegramUrl = `https://api.telegram.org/bot635365494:${core.getInput('telegram_key')}/sendMessage`

async function postTelegram () {
  try {
    const response = await axios.post(telegramUrl, {
      chat_id: core.getInput('chat_id'),
      text: core.getInput('text')
    })
    console.log(response.data.ok)
    console.log(new Date(response.data.result.date))
  } catch (error) {
    return Promise.reject(JSON.stringify(error.response.data))
  }
}

postTelegram().catch(error => {
  core.setFailed(error)
})
