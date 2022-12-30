// Owner number
global.owner = '6281998903280'
// Owner name
global.owner_name = 'ArdhiRahma'
// Database name (Default: database)
global.database = 'database'
// Maximum upload file size limit (Default : 100 MB)
global.max_upload = 100
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 4
// User Limitation (Default : 25)
global.limit = 45
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '94', '94', '212']
// Put target jid to forward friends story
global.forwards = global.owner + '@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))(process.env.API_KEY)
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Timezone (Default : Asia/Jakarta)
global.timezone = 'Asia/Jakarta'
// Bot version
global.version = '2.2.2',
// Bot name
global.botname = `© reika-bot`
// Footer text
global.footer = 'This bot powered by Kyura.'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Proses Bro...'),
   invalid: Func.texted('bold', 'URL nya Invalid bro!'),
   wrong: Func.texted('bold', 'Salah format itu bro!'),
   getdata: Func.texted('bold', 'Scraping metadata . . .'),
   fail: Func.texted('bold', 'Can\'t get metadata!'),
   error: Func.texted('bold', 'Error occurred!'),
   errorF: Func.texted('bold', 'Sorry this feature is in error.'),
   premium: Func.texted('bold', 'gabisa bro, cuma pengguna premium'),
   owner: Func.texted('bold', 'Fitur ini cuma buat owner bro.'),
   god: Func.texted('bold', 'This command only for Master'),
   group: Func.texted('bold', 'ga bisa bro, ini fitur khusus di grup.'),
   botAdmin: Func.texted('bold', 'gabisa bro, soalnya bot ini belum jadi admin'),
   admin: Func.texted('bold', 'cuma admin doang yang boleh bro.'),
   private: Func.texted('bold', 'pake fitur ini di chat pribadi bro.')
})
