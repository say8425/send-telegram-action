const core = require('@actions/core')
const axios = require('axios')
const telegramUrl = `https://api.telegram.org/bot635365494:${core.getInput('telegram_key')}/sendMessage`

axios.post(telegramUrl, {
  chat_id: core.getInput('chat_id'),
  text: core.getInput('text')
}).then(response => {
  core.setOutput('status', response.data.ok)
  core.setOutput('sent_at', new Date(response.data.result.date.toTimeString()))
}).catch(error => {
  core.setFailed(error)
})
