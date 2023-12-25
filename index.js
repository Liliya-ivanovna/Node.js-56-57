const TelegramApi =require('node-telegram-bot-api');

const token='6489917983:AAFLEIiiG1EXdXUSagWd3ZsF88g2vEtX3mI';

const bot = new TelegramApi(token, {polling:true})

bot.on('message', msg=>{
    const text= msg.text;
    const chatId= msg.chat.id;
    if (text === '/start'){
        bot.sendSticker(chatId, "")
        bot.sendMessage(chatId, 'Привіт, як ти?')
    }
   
})
