const core = require('@actions/core')
const axios = require('axios')
const telegramUrl = `https://api.telegram.org/bot635365494:${core.getInput('telegram_key')}/sendMessage`

axios.get('telegramUrl', {
  chat_id: core.getInput('chat_id'),
  text: core.getInput('text')
}).then(response => {
  core.setOutput('status', response.ok)
  core.setOutput('sent_at', new Date(response.result.date))
}).catch(error => {
  core.setFailed(error)
})
