//═══════[© 2022 𝐉𝐈𝐌𝐁𝐑𝐔 𝐯3.]════════\\
// 𝕄𝕀𝕂ℍ𝔸𝕀𝔼𝕃 𝕆𝔽𝔽𝕀ℂ𝔸𝕃

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\


global.owner = process.env.OWNER_NUMBER || '' 
global.pemilik = process.env.CONTACT_NUMBER || ''
global.premium = process.env.PREMIUM_NUMBER || ''
global.pengguna = process.env.USER_NAME || ''
global.botnma = process.env.BOT_NAME || ''
global.ownernma = process.env.OWNER_NAME || ''
global.packname = process.env.PACKAGE_NAME || ''
global.author = process.env.AUTHOR_NAME || ''
global.sessionName = 'session'
global.prefa = ['#','!','/'] //prefix 
global.sp = '⭔' //design
function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 1000 //free user limit
}
global.thumb = fs.readFileSync('./Media/Jimbru.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
