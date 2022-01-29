const TelegramApi  = require('node-telegram-bot-api')

const request = require('request')

const token = '5110146510:AAHLVJl-xIEIiZNG7cLKEN9eBZA0b_DsXvY'

const bot = new TelegramApi(token, {polling: true})

bot.onText(/\/start/, async (msg) =>{
    console.log(msg)

})