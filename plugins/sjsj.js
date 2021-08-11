const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'sj', fromMe: true}, (async (message, match) => {

    if (message.reply_message === false) return await message.sendMessage('```Lütfen bir mesaja yanıt verin!```');

    await message.client.sendMessage(message.jid, '' + '@' + message.reply_message.jid.split('@')[0] + ' ```Bekle Güleyim 😄```', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });
    await new Promise(r => setTimeout(r, 2500));
    await message.sendMessage('┈╭━━━━━━━━━━━╮┈\n┈┃╭━━━╮┊╭━━━╮┃┈\n╭┫┃┈▇┈┃┊┃┈▇┈┃┣╮\n┃┃╰━━━╯┊╰━━━╯┃┃\n╰┫╭━╮╰━━━╯╭━╮┣╯\n┈┃┃┣┳┳┳┳┳┳┳┫┃┃┈\n┈┃┃╰┻┻┻┻┻┻┻╯┃┃┈\n┈╰━━━━━━━━━━━╯┈');
    
}));
