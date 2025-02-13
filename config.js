require("./lib/module")

// SETTING KONTAK
global.owner = "6283177670384"
global.ownername = "𝙈𝙚𝙭𝙯𝙓𝘿"
global.nomorbot = "6283177670384"
global.namaCreator = "𝙈𝙚𝙭𝙯𝙓𝘿"
global.Dec = "𝙈𝙚𝙭𝙯𝙓𝘿"
global.autoJoin = false
global.antilink = false

// THUMBNAIL (BEBAS GANTI)
global.imageurl = 'https://files.catbox.moe/g5rfy0.jpg'
global.channel = 'https://whatsapp.com/channel/0029VapvXEWFHWq9X70T730Q'

// STICKER
global.packname = "𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2"
global.author = "🧃 𝕵𝖚𝖎𝖈𝖊 𝕯. 𝖂𝖗𝖑𝖉 🧃"
global.jumlah = "5"


















// RESPON BOT
global.onlyprem = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*𝖢𝗆𝖽 for prem users or 𝖩𝗎𝗂𝖼𝖾 𝖣. 𝖶𝗋𝗅𝖽 members and you're not ❌*`
global.onlyown = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*𝖢𝗆𝖽 is only for my 𝘰𝘸𝘯𝘦𝘳 😌*`
global.onlygroup = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*𝖢𝗆𝖽 is only for groups 🥲*`
global.onlyadmin = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*𝖢𝗆𝖽 is only for admin 🥱*`
global.notext = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*Where's the text? 🧐*`
global.noadmin = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*𝖡𝗈𝗍 is not admin need it first 🥺*`
global.succes = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*𝖣𝗈𝗇𝖾 executing command 😁*`
global.invalid = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*𝘔𝘢𝘴𝘶𝘬𝘬𝘢𝘯 𝘯𝘰𝘮𝘰𝘳 𝘺𝘢𝘯𝘨 𝘷𝘢𝘭𝘪𝘥*`
global.bugrespon = `\`[ 🕸️ ] 𝙈𝙚𝙭𝙯𝙓𝘿 𝐗 𝐂𝐑𝐀𝐒𝐇 𝐕2\` \n*Successfully sending bugq to victim confirmation ✅*`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})