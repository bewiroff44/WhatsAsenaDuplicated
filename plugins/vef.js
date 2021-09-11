/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const con = require('../config')

//Desc
const TRvefdesc = "Türkçe ses efektlerini gönderir."
const TRvefneed = "*Herhangi bir efekt ismi girmen gerekiyor*"


Asena.addCommand({pattern: 'vef ?(.*)', fromMe: true, desc: TRvefdesc}, (async (message, match) => {

    if (match[1] === "") return await message.client.sendMessage(message.jid, TRvefneed, MessageType.text);

    if (match[1] === 'noluyo' || match[1] === 'noluyo lan' || match[1] === 'noluyo dayı') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5899986614486043330.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'yavas' || match[1] === 'yavaş' || match[1] === 'yavas git') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5900017439466326353.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'yasam' || match[1] === 'yasam masam' || match[1] === 'yaşam') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5888542571046635589.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'hadsiz' || match[1] === 'hadsız' || match[1] === 'degerli zaman' || match[1] === 'degerli zamanimi') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5888542571046635588.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
     }
     else if (match[1] === 'yasam' || match[1] === 'yasam masam' || match[1] === 'yaşam') {
     
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5888542571046635589.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'kavdesim' || match[1] === 'helikoptev' || match[1] === 'kavdesim helikopter' || match[1] === 'Kardesim  helikopter') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_6328749021276743278.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'kardeslik' || match[1] === 'kardes' || match[1] === 'aykut kardes' || match[1] === 'kardeslik varken') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5888542571046635559.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'yalan' || match[1] === 'namik kemal' || match[1] === 'namik' || match[1] === 'namık') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5888542571046635537.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'bursa' || match[1] === 'bursa cocugu' || match[1] === 'bursa çocuğu' || match[1] === 'heryerde') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5877665063858342094.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'etmiyem' || match[1] === 'hakkimi' || match[1] === 'hakkımı' || match[1] === 'helal') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5888542571046635579.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'allah ya' || match[1] === 'geldi' || match[1] === 'allah' || match[1] === 'geldi allah') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_5778381886879434926.ogg"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'fehleleruy' || match[1] === 'ferid' || match[1] === 'ferid fehleleriy' || match[1] === 'biz') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_590001212322142423.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'mehemmed deniz' || match[1] === 'allahverdi' || match[1] === 'atam balasi' || match[1] === 'deniz') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_2382481247982384328.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'seni hic alakadar etmez' || match[1] === 'memati' || match[1] === 'alakadar' || match[1] === 'alakdar etmez') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_12642137980342789.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'oh no' || match[1] === 'no' || match[1] === 'nononono' || match[1] === 'oh') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_28498461152782937363628.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'adam ya' || match[1] === 'geldi' || match[1] === 'geldi adam ' || match[1] === 'adam ya geldi adam') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_438923831237685432134578.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'asena' || match[1] === 'yaktin beni asena' || match[1] === 'yaktın beni asena ' || match[1] === 'Asena') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_42222222222222222222222222.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'napim' || match[1] === 'napım' || match[1] === '11' || match[1] === '222') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/ses/4_3333333333333333333333333333.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else {
        await message.client.sendMessage(
            message.jid, 
            '```Bulunamadı! Varolan Liste:```\n\n$onun bunun / bende türküm\n$hadsiz / hadsız\n$yasam / yasam masam\n$yavas / yavas git\n$noluyo / noluyo lan\n$kardeslik / kardes\n$yalan / namik kemal\n$bursa cocugu / bursa\n$hakkimi / helal\n$allah ya / geldi/\n$/fehleleruy/ biz\n$/mehemmed deniz/allahverdi/atam balasi/deniz\n$/seni hic alakadar etmez/memati/alakadar/alakdar etmez\n$/kavdesim/ kavdesim helikopter\n$adam ya/geldi adam/ geldi\n$asena/yaktin beni asena/yaktın beni  asena/Asena\n$napım/napim',
            MessageType.text
        )
    }
}));
