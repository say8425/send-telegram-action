const core = require('@actions/core')
const axios = require('axios')
const telegramUrl = `https://api.telegram.org/bot635365494:${core.getInput('telegram_key')}/sendMessage`

async function postTelegram() {
  try {
    const response = await axios.post(telegramUrl, {
      chat_id: core.getInput('chat_id'),
      text: core.getInput('text')
    })
    core.setOutput('status', response.data.ok)
    core.setOutput('sent_at', new Date(response.data.result.date))
  } catch (error) {
    core.setFailed(error)
  }
}

postTelegram()
