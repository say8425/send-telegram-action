const core = require('@actions/core')
const axios = require('axios')
const telegramUrl = 'https://api.telegram.org/bot635365494:AAGZnt0iG5d8SlIslO9bRXoiEHl4rEyHyLw/sendMessage'

async function postTelegram () {
  try {
    const response = await axios.post(telegramUrl, {
      chat_id: '-344041454',
      text: '-344041454'
    })
    // core.setOutput('status', response.data.ok)
    // core.setOutput('sent_at', new Date(response.data.result.date).toTimeString())
  } catch (error) {
    // core.setFailed(error)
  }
}

postTelegram()
