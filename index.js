const TelegramApi =require('node-telegram-bot-api');

const token='6489917983:AAFLEIiiG1EXdXUSagWd3ZsF88g2vEtX3mI';

const bot = new TelegramApi(token, {polling:true})

bot.on('message',async msg=>{
    const text= msg.text;
    const chatId= msg.chat.id;
    if (text === '/start'){
       await bot.sendSticker(chatId,"https://i.pinimg.com/564x/db/32/c3/db32c3b3912b53cd4ed7216a31540caa.jpg")
        await bot.sendMessage(chatId, 'Привіт, як ти?')
    }
})
