/**
   * Create By Volter Store
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

// Other
global.owner = ['19563020750']
global.ownernomer = "19563020750"
global.premium = ['19563020750','12232080470','6287723814311','6289610145000']
global.packname = 'Created By Rolter'
global.author = 'Botz'
global.sessionName = 'rolterdev'
global.jumhal = '100000000000000'
global.prefa = ['','!','.','#','&']
global.sp = 'Volter Storee'
global.mess = {
    success: '*_DONE ... ✅_*',
    admin: '*_FITUR KHUSUS ADMIN GROUP ❗_*',
    botAdmin: '*_BOTZ HARUS MENJADI ADMIN TERLEBIH DAHULU ❗_*',
    premime: '*_FITUR KHUSUS USER PREM , MAU DAFTAR ? KETIK #owner ❗_*',
    owner: '*_FITUR KHUSUS OWNER BOTZ ❗_*',
    group: '*_FITUR DIGUNAKAN KHUSUS GROUP❗_*',
    private: '*_FITUR DIGUNAKAN KHUSUS PRIVATE ❗_*',
    bot: '*_FITUR KHUSUS PENGGUNA NOMOR BOTZ ❗_*',
    wait: '*_[❗] SEDANG DIPROSES_*',
    endLimit: '*_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_*',
}
global.limitawal = {
    premium: "Unlimited",
    free: 5
}
global.thumb = fs.readFileSync('./image/rolter.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})