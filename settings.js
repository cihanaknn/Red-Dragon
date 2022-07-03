//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `CihansBotTR🇹🇷 Sorunsuz Çalışıyor! İnsta:cihan_aknn
` //Costomize Alive Message (type your message in `` )

global.owner = ['+12403248506'] //Owner number in aive msg
global.premium = ['+12403248506'] //Owner Number info
global.ownernomer = '+12403248506' //Owner Number <<<

global.ownername = '〆𝙲𝚒𝚑𝚊𝚗𝚂𝚒𝚗𝚜' //Owner Name
global.botname = '〆𝙲𝚒𝚑𝚊𝚗𝚜𝚋𝚘𝚝' //Bot Name

global.button = '⚪İnstagram' //Costomize A Button Name In Alive Message
global.btnurl = 'https://instagram.com/cihan_aknn' //Change Your Button's URL

global.region = 'Turkiye' //Country Region

global.packname = '〆𝙲𝚒𝚑𝚊𝚗𝚜𝚋𝚘𝚝' //Bot Pacage Name
global.author = '〆𝙲𝚒𝚑𝚊𝚗𝚂𝚒𝚗𝚜' //Author Name
global.prefa = ['.'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_cihanAkın.' //In list menu
global.chatbotpre = 'false'  // Chat bot true/false


global.ig = 'https://github.com/cihanaknn' //Github Account!

global.mess = { // cOSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Başarılı ✅',
    admin: 'Yanlızca Adminler Kullanabilir!😉',
    botAdmin: 'Botu Admin yapmamışsın Aşk olsun😥',
    owner: 'Sadece Sahip kullanabilir!😉',
    group: 'Bu komut sadece Gruplarda kullanılabilir!',
    private: 'Bu komut sadece DM de kullanılabilir!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Hata!! Api Anahtarının Süresi Dolmuş olabilir🤔',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
