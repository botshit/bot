/*
* Tambahin nama author lah
* Author MhankBarBar, Farhan
* Tambahin ya Cape Gan ngefix² Yg Ga work
* Jan numpang nama doank
- What's New?
* New Features
*/
// SE VOCÊ ESTIVER MUDANDO CUIDADOSAMENTE O TRABALHO, PODE DAR ERRADO ALGUMAS MUDANCA
// DAN YG NYURI TANPA KASIH CREDIT INGAT BRO LU SAMPAH
const {
  WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

const fs = require("fs")
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()

const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
let {
instagram, yt, groupLink
} = setting

const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { bahasa, help, donasi, limitend, limitcount, bottt } = require('./Fxc7/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:𝑽𝑰𝑵𝑰 𝑶𝑷𝑹𝑬𝑺𝑺𝑶𝑹\n'
            + 'ORG:𝑩𝑶𝑻 𝑶𝑷𝑹𝑬𝑺𝑺𝑶𝑹;\n'
            + 'TEL;type=CELL;type=VOICE;waid=35932540387:+359 32 540 387\n'
            + 'END:VCARD'
       
const vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:𝑽𝑰𝑵𝑰 𝑶𝑷𝑹𝑬𝑺𝑺𝑶𝑹\n'
            + 'ORG:𝑩𝑶𝑻 𝑶𝑷𝑹𝑬𝑺𝑺𝑶𝑹;\n'
            + 'TEL;type=CELL;type=VOICE;waid=5519999516507:+5519999516507\n'
            + 'END:VCARD'

prefix = "!"
name = "𝑩𝑶𝑻 𝑶𝑷𝑹𝑬𝑺𝑺𝑶𝑹"
rdaftar = "𝑶𝑩𝑹𝑰𝑮𝑨𝑫𝑶 𝑷𝑶𝑹 𝑽𝑰𝑹𝑨 𝑴𝑰𝑵𝑯𝑨 𝑵𝑶𝑽𝑨 𝑷𝑼𝑻𝑰𝑵𝑯𝑨 🥰"
rmenu = "𝑷𝑨𝑹𝑨 𝑫𝑬 𝑴𝑬 𝑪𝑯𝑨𝑴𝑨𝑹 𝑫𝑬𝑺𝑮𝑹𝑨𝑪𝑨𝑨𝑨"
botinfo = "𝑸𝑼𝑨𝑳𝑸𝑼𝑬𝑹 𝑫𝑼𝑽𝑰𝑫𝑨 𝑪𝑯𝑨𝑴𝑨𝑹 𝑷𝑽"
limitt = 999999999
memberLimit = 2
ban = []
premium = ["5519999516507@s.whatsapp.net","558799810290@s.whatsapp.net"]


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const denz = new WAConnection()
	denz.logger.level = 'warn'
	console.log(banner.string)
	denz.on('qr', () => {
		console.log(color('[','red'), color('!','yellow'), color(']','red'), color(' Scan the qr code above', 'green'))
	})

	fs.existsSync('./Fxc7.json') && denz.loadAuthInfo('./Fxc7.json')
	denz.on('connecting', () => {
		start('2', '𝐴𝑃𝑅𝐸𝑁𝐷𝐸𝑁𝐷𝑂 𝑁𝑂𝑉𝑂𝑆 𝑃𝐴𝐿𝐴𝑉𝑅𝑂𝐸𝑆 𝑆𝑂 𝑈𝑀 𝑀𝑂𝑀𝐸𝑁𝑇𝑂...')
	})
	denz.on('open', () => {
		success('2', '𝑃𝑅𝑂𝑁𝑇𝑂 𝑃𝐴𝐿𝐴𝑉𝑅𝑂𝐸𝑆 𝐷𝐸𝐶𝑂𝑅𝐴𝐷𝑂𝑆 ')
	})
	await denz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Fxc7.json', JSON.stringify(denz.base64EncodedAuthInfo(), null, '\t'))

	denz.on('group-participants-update', async (anu) => {
		const mdata = await denz.groupMetadata(anu.jid)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					denz.sendMessage(mdata.id, '𝑽𝑨𝑰 𝑪𝑶𝑴𝑷𝑹𝑨 𝑼𝑴 𝑪𝑯𝑰𝑷 𝒁𝑬 𝑻𝑹𝑨𝑽𝑰𝑵𝑯𝑨 𝑫𝑶 𝑪𝑹𝑳𝑯', MessageType.text)
					setTimeout(async function () {
						denz.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝑶𝑳𝑨𝑨 @${num.split('@')[0]}👋\n𝑽𝑶𝑪𝑬 𝑨𝑪𝑨𝑩𝑨𝑹 𝑫𝑬 𝑽𝑰𝑹𝑨 𝑴𝑬𝑼 𝑬𝑺𝑪𝑹𝑨𝑽𝑶 𝑶𝑩𝑬𝑫𝑬𝑪𝑨  𝑷𝑨𝑹𝑨 𝑵 𝑺𝑬𝑹 𝑪𝑯𝑰𝑪𝑶𝑻𝑬𝑨𝑫𝑶*${mdata.subject}*\n\n ─
\n𝑨𝑶 𝑬𝑵𝑻𝑹𝑨 𝑴𝑨𝑵𝑫𝑨 𝑻𝑹𝑬𝑺 𝑺𝑯𝑰𝑻𝑷𝑶𝑺𝑻𝑬𝑹 
\n𝑵𝑨𝑶 𝑷𝑬𝑹𝑴𝑰𝑻𝑰𝑴𝑶𝑺 𝑹𝑨𝑪𝑰𝑺𝑴𝑶𝑺 
\n𝑷𝑨𝑹𝑨 𝑬𝑽𝑰𝑻𝑨 𝑶 𝑹𝑨𝑪𝑰𝑺𝑴𝑶 𝑻𝑩𝑴 𝑵 𝑷𝑬𝑹𝑴𝑰𝑻𝑰𝑴𝑶𝑺 𝑵𝑬𝑮𝑹𝑶𝑺 
\n𝑵𝑨𝑶 𝑷𝑬𝑹𝑴𝑰𝑻𝑰𝑴𝑶𝑺 𝑶 𝑴𝑨𝑿𝑰𝑴𝑶𝑺 
\n𝑷𝑨𝑹𝑨 𝑬𝑽𝑰𝑻𝑨𝑹 𝑰𝑺𝑺𝑶  𝑵𝑨𝑶 𝑷𝑬𝑹𝑴𝑰𝑻𝑰𝑴𝑶𝑺 𝑴𝑼𝑳𝑯𝑬𝑹𝑬𝑺 
\n𝑬 𝑷𝑹𝑶𝑰𝑩𝑰𝑫𝑶 𝑿𝑬𝑵𝑶𝑭𝑰𝑳𝑰𝑨 
\n𝑷𝑨𝑹𝑨 𝑬𝑽𝑰𝑻𝑨𝑹 𝑰𝑺𝑺𝑶 𝑬𝑺𝑻𝑨𝑹 𝑷𝑹𝑶𝑰𝑩𝑰𝑫𝑶 𝑩𝑨𝑰𝑨𝑵𝑶𝑺 𝑬́ 𝑺𝑼𝑳𝑰𝑺𝑻𝑨𝑺 
\n𝑬 𝑷𝑹𝑶𝑰𝑩𝑰𝑫𝑶 𝑮𝑶𝑹𝑬 𝑫𝑬 𝑸𝑼𝑨𝑳𝑸𝑼𝑬𝑹 𝑻𝑰𝑷𝑶 
\n𝑬 𝑷𝑹𝑶𝑰𝑩𝑰𝑫𝑶 𝑷𝑶𝑹𝑵𝑶 𝑨 𝑵𝑨𝑶 𝑺𝑬𝑹 𝑫𝑨𝑺 𝑴𝑬𝑰𝑨 𝑵𝑶𝑰𝑻𝑬 𝑨𝑺 𝑫𝑼𝑨𝑺 𝑫𝑨 𝑴𝑨𝑵𝑯𝑨
\n𝑫𝑰𝑮𝑰𝑻𝑬${prefix}daftar 𝑷𝑨𝑹𝑨 𝑨𝑪𝑬𝑰𝑻𝑨𝑹 𝑶𝑺 𝑻𝑬𝑹𝑴𝑶𝑺`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promover') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝑶𝑷𝑨 𝑴𝑨𝑰𝑺 𝑼𝑴 𝑬𝑵𝑻𝑹𝑶𝑼 𝑷𝑹𝑨 𝑭𝑴𝑳 🎉\n@${num.split('@')[0]} 𝑴𝑬𝑪𝑯𝑬𝑼 𝑪𝑶𝑴 𝑬𝑳𝑬 𝑬́ 𝑩𝑨𝑵`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'rebaixar') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝑷𝑬𝑹𝑫𝑬𝑼 𝑶 𝑪𝑨𝑹𝑮𝑶 𝑪𝑶𝑴  𝑺𝑼𝑪𝑬𝑺𝑺𝑶𝑹\n@${num.split('@')[0]} 𝑷𝑶𝑫𝑬 𝑳𝑰𝑿𝑨𝑹 𝑬𝑺𝑺𝑨 𝑷𝑼𝑹𝑰𝑵𝑯𝑨 𝑵𝑨𝑶 𝑬́ 𝑴𝑨𝑰𝑺 𝑫𝑶 𝑩𝑶𝑵𝑫𝑬 `
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝑴𝑨𝑰𝑆 𝑼𝑴 𝑪𝑶𝑹𝑵𝑶 𝑬𝑿𝑷𝑼𝑳𝑺𝑶 👉🏾@${num.split('@')[0]}👋\n𝑬𝑺𝑷𝑬𝑹𝑶 𝑸𝑼𝑬 𝑺𝑬𝑱𝑨 𝑭𝑬𝑳𝑰𝒁 𝑳𝑨 𝑵𝑶 𝑰𝑵𝑭𝑬𝑹𝑵𝑶 ♥️`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	})

		denz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	denz.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const DnsBot = ["0@s.whatsapp.net"] // ubah aja gapapa
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = denz.contacts[nameReq] != undefined ? denz.contacts[nameReq].vname || denz.contacts[nameReq].notify : undefined

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const isCmd = body.startsWith(prefix)
			denz.chatRead(from)
			

			mess = {
				wait: '𝐸𝑆𝑃𝐸𝑅𝐴 𝐶𝐴𝐿𝐴𝐷𝑂 𝐶𝐴𝐷𝐸𝐿𝐴',
				success: '𝑃𝑅𝑂𝑇𝐼𝑁𝐻𝑂 !!! 𝐴𝐺𝑅 𝐷𝐴 𝑈𝑀𝐴 𝑆𝑈𝐺𝐴𝐷𝐴',
				error: {
					stick: '𝐸𝑅𝑅𝑂 𝐴𝑂 𝑀𝑈𝐷𝐴 𝐼𝑀𝐴𝐺𝐸𝑀 𝑃𝐴𝑅𝐴 𝐹𝐼𝐺𝑈𝑅𝐼𝑁𝐻𝐴',
					Iv: '𝐿𝐼𝑁𝐾 𝐼𝑁𝑉𝐴𝐿𝐼𝐷𝑂 !! 𝐶𝑂𝐿𝑂𝐶𝐴 𝐶𝐸𝑅𝑇𝑂 𝑃𝑂𝑅𝑅𝐴'
				},
				only: {
					group: '𝑄𝑈𝐴𝐿 𝐹𝑂𝐼 𝐹𝐼𝐿𝐻𝐴 𝐷𝐴 𝑃𝑈𝑇𝐴 𝑉𝐴𝐼 𝐹𝐼𝐶𝐴 𝐸𝑁𝐶𝐻𝐸𝑁𝐷𝑂 𝑂 𝑆𝐴𝐶𝑂 𝑁𝑂 𝑃𝑉 𝐴𝐺𝑅 ?',
					benned: '𝑉𝑂𝐶𝐸 𝐹𝑂𝐼 𝐵𝐴𝑁𝐼𝐷𝑂 𝐷𝐸𝑆𝐺𝑅𝐴𝐶̧𝐴 𝑃𝐴𝑅𝐴 𝐷𝐸 𝑇𝐸𝑁𝑇𝐴!! 𝑃𝐸𝐷𝐸 𝑃𝐴𝑅𝐴 𝑂 𝑀𝐸𝑈 𝐷𝑂𝑁𝑂 ',
					ownerG: '𝑉𝑂𝐶𝐸 𝐴𝐶𝐻𝐴 𝑄𝑈𝐸 𝑇𝐸𝑀 𝑃𝑂𝐷𝐸𝑅 𝑆𝑂𝐵𝑅𝐸 𝑀𝐼𝑀 ? 𝐻𝐴𝐻𝐴𝐻𝐴',
					ownerB: '𝑄𝑈𝐴𝐿 𝐹𝑂𝐼 𝑀𝐸𝑈 𝑃𝐴𝑇𝑅𝐴𝑂 ? 𝑉𝑂𝐶𝐸 𝑁𝐴𝑂 𝐸́ 𝑁𝐼𝑁𝐺𝑈𝐸𝑀 𝑆𝐸𝑈 𝐵𝑂𝑆𝑇𝐴 !! 𝐻𝐴𝐻𝐴𝐻𝐴 ',
					premium: '𝐷𝐴 𝑈𝑀𝐴 𝑆𝑈𝐺𝐴𝐷𝐼𝑁𝐻𝐴 𝑄𝑈𝐸 𝐸𝑈 𝐿𝐼𝐵𝐸𝑅𝑂 𝐾𝐴𝐾𝐴𝐾𝐴',
					userB: `𝑂𝐼𝐼𝐼 *${pushname2}*, 𝑃𝐴𝑅𝐴 𝐹𝐴𝑍𝐸𝑅 𝐼𝑆𝑆𝑂 𝐸 𝑉𝐼𝑅𝐴 𝑀𝐸𝑈 𝐶𝐸𝑅𝑉𝑂 𝐷𝐼𝐺𝐼𝑇𝐸 \n*${prefix}daftar*`,
					admin: '𝑄𝑈𝐴𝐿 𝐹𝑂𝐼 𝑀𝐸𝑈 𝑃𝐴𝑇𝑅𝐴𝑂 ? 𝑉𝑂𝐶𝐸 𝑁𝐴𝑂 𝐸́ 𝑁𝐼𝑁𝐺𝑈𝐸𝑀 𝑆𝐸𝑈 𝐵𝑂𝑆𝑇𝐴 !! 𝐻𝐴𝐻𝐴𝐻𝐴',
					Badmin: '𝐴𝐿𝐴 𝑂 𝐶𝐴𝑅𝐴 𝑄𝑈𝐸 𝑀𝐸 𝑈𝑆𝐴 𝐸́ 𝑁𝐸𝑀 𝐴𝐷𝑀 𝑀𝐸 𝐷𝐴𝑅 !! 𝐶𝐴𝐷𝐴 𝐶𝑂𝐼𝑆𝐴 𝐸𝑀 😂',
					publikG: `𝐵𝑂𝑇 𝑇𝐴 𝑃𝑅𝐼𝑉𝐴𝐷𝑂 𝐶𝑈𝑆𝐴𝑂 \n𝑃𝐸𝐷𝐸 𝑃𝐴𝑅𝐴 𝑂  𝑃𝐴𝑇𝑅𝐴𝑂 𝐿𝐼𝐵𝐸𝑅𝐴 \n*${prefix}infobot*`
				}
			}

			const botNumber = denz.user.jid
			const ownerNumber = ["5519999516507@s.whatsapp.net","5516997810851@s.whatsapp.net","5513997146024@s.whatsapp.net"] // owner number ubah aja
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await denz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await denz.chats.all()
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isPublic = isGroup ? publik.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				denz.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				denz.sendMessage(hehe, teks, text)
	        }
				const sendPtt = (teks) => {
		    denz.sendMessage(from, audio, mp3, {quoted:mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			denz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? denz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        denz.sendMessage(from, limitcount(limitCounts), text, { quoted : mek})
                    }
                                }
                        if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberLimit) {
					    denz.sendMessage(from, `𝑁𝐸𝑀 𝐹𝑈𝑁𝐷𝐸𝑁𝐷𝑂 𝑄𝑈𝐸 𝐸𝑁𝑇𝑅𝑂 𝑁𝐸𝑆𝑆𝐸 𝐺𝑅𝑈𝑃𝑂 ${groupMetadata.subject} 𝑁𝐴𝑂 𝐴𝑇𝐸𝑁𝐷𝐸 𝑀𝐸𝑈𝑆 𝑅𝐸𝑄𝑈𝐼𝑆𝐼𝑇𝑂𝑆\n\n 𝑀𝐸𝑁𝐵𝑅𝑂𝑆 𝑀𝐼𝑁𝐼𝑀𝑂𝑆 ${memberLimit}*`, text)
					setTimeout( () => {
                            denz.groupLeave(from)
                            }, 100)
		setTimeout( () => {
		denz.updatePresence(from, Presence.composing)
					}, 10)
		setTimeout( () => {
		reply(`𝑉𝑂𝑈 𝐹𝐼𝐶𝐴 𝑁𝐸𝑆𝑆𝐸 𝐺𝑅𝑈𝑃𝑂 𝐹𝐴𝐿𝐼𝐷𝑂 𝑁𝐸𝑀 𝐴 𝑃𝐴𝑈 ${groupMetadata.subject}*`)
		}, 0)
		}
					
		       } catch (err) { console.error(err)  }
 	 
 
        }
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    denz.sendMessage(from, limitend(pushname2), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        if (bad.includes(messagesLink)) {
        denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/kasar.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (adminNumber.includes(messagesLink)){
        	hasil = `        ────────────────
𝐸𝐼𝐼 ${pushname2} 𝐷𝐼𝐺𝐼𝑇𝐴 𝐼𝑆𝑆𝑂 𝐴𝑄𝑈𝐼 𝐶𝐻𝐴𝑅𝐴 😎${prefix}menu*
        ────────────────`
denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "ketik #menu kak", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
}
		if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*${pushname2} 𝑉𝑂𝐶𝐸 𝐸́ 𝑈𝑀 𝐴𝐷𝑀 𝐸𝑇𝑇 𝐸𝑆𝑇𝐴𝑅 𝑃𝐸𝑅𝐷𝑂𝐴𝐷𝑂`)
		denz.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`𝐸𝐿𝐼𝑀𝐼𝑁𝐴𝐷𝑂 𝐻𝐸𝐻𝐸𝐻𝐸`)
		}, 100)
		setTimeout( () => {
		denz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`𝑄𝑈𝐴𝐿 𝐹𝑂𝐼 𝑃𝑂𝑅𝑅𝐴 𝑁𝐴𝑂 𝐶𝐻𝐼𝑁𝐺𝐴\n𝑉𝐴𝐶𝐼𝐿𝑂𝑈 𝐸𝑀 *${pushname2} 𝑉𝑂𝐶𝐸 𝑆𝐸𝑅𝐴 𝐸𝑋𝑃𝑈𝐿𝑆𝑂 𝐼𝑀𝐸𝐷𝐼𝐴𝑇𝐴𝑀𝐸𝑁𝑇𝐸 𝐷𝑂 𝐺𝑅𝑈𝑃𝑂 ${groupMetadata.subject}*`)
		}, 0)
		}
		
     	   if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

                switch(command) {
					case 'antifake':
					try {
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝐷𝐼𝐺𝐼𝑇𝐴 𝑂𝑁 𝑃𝑅𝐴 𝐴𝑇𝐼𝑉𝐴 𝐵𝐼𝑋𝑈 𝐵𝑈𝑅𝑅𝑂')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('𝑀𝐸 𝐷𝐸𝐼𝑋𝐴 𝑄𝑈𝐼𝐸𝑇𝑂 𝑃𝑂𝑅𝑅𝐴 !! 𝑄𝑈𝐸 𝐴𝑇𝐼𝑉𝐴 𝑀𝐴𝐼𝑆 𝑂𝑄 ?')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('𝑅𝐸𝐶𝑈𝑅𝑆𝑂 𝐴𝑁𝑇𝐼𝐹𝐴𝐾𝐸 𝐴𝑇𝐼𝑉𝐴𝐷𝑂 ✊🏾🍆 ')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('𝐴𝑁𝑇𝐼𝐹𝐴𝐾𝐸 𝐷𝐸𝑆𝐴𝑇𝐼𝑉𝐴𝐷𝑂 ✊🏾🍆💦')
					} else {
						reply('𝑉𝑂𝑈 𝐹𝐴𝐿𝐴 𝑆𝑂 𝑈𝑀𝐴 𝑉𝐸𝑍 𝑉𝐼𝑈! 1 𝐴𝑇𝐼𝑉𝐴, 0 𝐷𝐸𝑆𝐴𝑇𝐼𝑉𝐴 ')
					}
					} catch {
						reply('𝑁𝐴𝑂 𝐷𝐸𝑈 𝐶𝐸𝑅𝑇𝑂 ! 𝑀𝐴𝑆 𝐴 𝐶𝑈𝐿𝑃𝐴 𝐹𝑂𝐼 𝑆𝑈𝐴 𝑇𝐸𝑁𝑇𝐴 𝐷𝑁𝑉 ! ')
					}
                break
				case 'menu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				dmenu = ` 𝑩𝑶𝑻 𝑶𝑷𝑹𝑬𝑺𝑺𝑶𝑹
				
				
🤡 𝑴𝑬 𝑪𝑯𝑨𝑴𝑨 𝑵𝑶 𝑾𝑯𝑨𝑻𝑺 𝑸𝑼𝑬𝑹𝑶 𝑯𝑨𝑰𝑷 🥵
🤡 𝑽𝑰𝑵𝑰𝑪𝑰𝑶𝑺 𝑺𝑰𝑳𝑽𝑨 🐒
🤡  wa.me/+5519999516507

🤡 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪̧𝑨𝑶 𝑫𝑶 𝑩𝑶𝑻 𝑵𝑬 𝑷𝑨𝑬 🥵
 
🤡 𝑬𝑫𝑰𝑻𝑨𝑫𝑶 𝑷𝑶𝑹: 𝑽𝑰𝑵𝑰 𝑶 𝑶𝑷𝑹𝑬𝑺𝑺𝑶𝑹
🤡𝑷𝑹𝑬𝑭𝑰𝑿𝑶: ${prefix}
🤡𝑪𝑶𝑹𝑵𝑶𝑺 𝑪𝑨𝑫𝑨𝑺𝑻𝑹𝑨𝑫𝑶𝑺: ${user.length}

              𝑳𝑰𝑿𝑶 𝑸𝑼𝑬 𝑴𝑬 𝑬𝑵𝑪𝑶𝑴𝑶𝑫𝑨
🤡𝑵𝑶𝑴𝑬 𝑫𝑨 𝑷𝑼𝑻𝑰𝑵𝑯𝑨: ${pushname2}
🤡𝑳𝑰𝑴𝑰𝑻𝑬: ${limitt}
🤡𝑳𝑰𝑴𝑰𝑻𝑬: √

          𝑩𝑶𝑻 𝑶𝑷𝑹𝑬𝑺𝑺𝑶𝑹 
🤡  ${prefix} 𝑰𝑵𝑭𝑶 [informações do bot ]
🤡  ${prefix} 𝑫𝑶𝑵𝑶 [dono do bot]
🤡  ${prefix}𝐶𝑂𝑂𝑊𝑁𝐸𝑅 [sócio]
🤡  ${prefix}𝑆𝑃𝐸𝐸𝐷 [minha velocidade]
🤡  ${prefix}𝐷𝐴𝐹𝑇𝐴𝑅 [se cadastrar]
🤡  ${prefix}𝐿𝐼𝑀𝐼𝑇 [limite disponível]
🤡  ${prefix}𝑇𝑂𝑇𝐴𝐿𝑈𝑆𝐸𝑅 [total de usuarios]
🤡  ${prefix}𝐵𝐿𝑂𝐶𝐾𝐿𝐼𝑆𝑇 [usuarios bloqueados]
🤡  ${prefix}𝐵𝐴𝑁𝐿𝐼𝑆𝑇 [pessoas banidas para usar o bot]
🤡  ${prefix}𝐵𝐴𝐻𝐴𝑆𝐴 [lista de indioma para !tt]
            
            𝑂𝑃𝐶̧𝑂̃𝐸𝑆 𝑁𝑂𝑉𝐴𝑆 
͏͏͏͏͏͏͏͏͏͏͏͏͏͏
🤡 ${prefix}ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ
🤡 ${prefix}ᴄᴏᴠɪᴅɪɴᴅᴏ
🤡 ${prefix}ᴄᴏᴠɪᴅɢʟᴏʙᴀʟ
🤡 ${prefix}ɪɴғᴏɢᴇᴍᴘᴀ
🤡 ${prefix}ʀᴀɴᴅᴏᴍᴡᴘ
🤡 ${prefix}ɢᴀʙᴜᴛ
🤡 ${prefix}ϙᴜᴏᴛᴇᴍᴜꜱʟɪᴍ
🤡 ${prefix}ʙᴀᴛᴛʟᴇғɪᴇʟᴅ
🤡 ${prefix}ᴘᴜʙɢʟᴏɢᴏ
🤡 ${prefix}ʙᴜᴛᴛᴇʀғʟʏ
🤡 ${prefix}ᴋᴏᴅᴇᴘᴏꜱ
🤡 ${prefix}ʟᴀᴄᴀᴋɪᴘ
🤡 ${prefix}ᴅᴋᴀꜱɪᴀ
🤡 ${prefix}ᴄᴇᴋʀᴇꜱɪᴊɴᴇ
🤡 ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
🤡 ${prefix}ɪɴғᴏғɪʟᴍ
🤡 ${prefix}ɪɴғᴏɪʟᴍ2
🤡 ${prefix}ʟᴋ21
🤡 ${prefix}ᴅᴏᴀʜᴀʀɪᴀɴ
🤡 ${prefix}ɴɪᴀᴛꜱʜᴏʟᴀᴛ
🤡 ${prefix}ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
🤡 ${prefix}ᴋɪꜱᴀʜɴᴀʙɪ
🤡 ${prefix}ᴛᴀʜʟɪʟ
🤡 ${prefix}ᴀʏᴀᴛᴋᴜʀꜱɪ
🤡 ${prefix}ʜᴀᴅɪᴛꜱ
🤡 ${prefix}ʟɪᴘᴜᴛᴀɴ6
🤡 ${prefix}ᴄɴɴɴᴇᴡꜱ
🤡 ${prefix}ʀᴇᴘᴜʙʟɪᴋᴀ
🤡 ${prefix}ᴛᴇᴍᴘᴏɴᴇᴡꜱ
🤡 ${prefix}ᴋᴜᴍᴘᴀʀᴀɴɴᴇᴡꜱ
🤡 ${prefix}ʟᴀᴢʏᴍᴇᴅɪᴀ
🤡 ${prefix}ᴍᴀɴɢᴀ
🤡 ${prefix}ᴋᴜꜱᴏɴɪᴍᴇ
🤡 ${prefix}ᴄᴏᴜᴘʟᴇꜱʜɪᴘ
🤡 ${prefix}ᴛᴏᴘᴀɴɪᴍᴇ
🤡 ${prefix}ʏᴜʀɪ
🤡 ${prefix}ᴘᴜꜱꜱʏ
🤡 ${prefix}ɴᴇᴋᴏɴɪᴍᴇ
🤡 ${prefix}ʙᴀᴋᴀ
🤡 ${prefix}ʙʟᴏᴡᴊᴏʙ
🤡 ${prefix}ʟᴇᴡᴅ
🤡 ${prefix}ᴡᴀɪғᴜ
🤡 ${prefix}ᴇʀᴏʏᴜʀɪ
🤡 ${prefix}ʜᴜɢ
🤡 ${prefix}ᴀᴡᴏᴏ
🤡 ${prefix}ʟɪᴄᴋ
🤡 ${prefix}ᴋɪꜱꜱ
🤡 ${prefix}ꜱᴍᴜɢ
🤡 ${prefix}ᴄᴜᴅᴅʟᴇ
🤡 ${prefix}ʙᴜʟʟʏ
🤡 ${prefix}ꜱʜɪɴᴏʙᴜ
🤡 ${prefix}ᴍᴇɢᴜᴍɪɴ
🤡 ${prefix}ʙʟᴜꜱʜ
🤡 ${prefix}ʜɪɢʜғɪᴠᴇ
🤡 ${prefix}ʜᴀɴᴅʜᴏʟᴅ
🤡 ${prefix}ꜱᴍɪʟᴇ
🤡 ${prefix}ɢʟᴏᴍᴘ
🤡 ${prefix}ᴄʀɪɴɢᴇ
🤡 ${prefix}ʜᴇɴᴛᴀɪᴘɪᴄᴛ
╙───々
͏͏͏͏͏͏͏͏͏͏͏͏͏͏╓───「 *_ᴍᴇᴅɪᴀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
║❏ ${prefix}ᴏᴄʀ
║❏ ${prefix}ɪᴍɢ2ᴜʀʟ
║❏ ${prefix}ᴛᴏᴍᴘ3
║❏ ${prefix}ɪɢꜱᴛᴀʟᴋ
║❏ ${prefix}ɪɴꜱᴛᴀᴠɪᴅ
║❏ ${prefix}ɪɴꜱᴛᴀɪᴍɢ
║❏ ${prefix}ɪɴꜱᴛᴀꜱᴛᴏʀʏ 
║❏ ${prefix}ᴘʟᴀʏᴍᴘ3
║❏ ${prefix}ғʙ 
║❏ ${prefix}ꜱɴᴀᴄᴋ 
║❏ ${prefix}ʏᴛᴍᴘ3
║❏ ${prefix}ʏᴛᴍᴘ4
║❏ ${prefix}ᴊᴏᴏx
║❏ ${prefix}ɪɴғᴏᴀʟᴀᴍᴀᴛ 
║❏ ${prefix}ᴘʟᴀʏꜱᴛᴏʀᴇ
║❏ ${prefix}ꜱᴍᴜʟᴇ
║❏ ${prefix}ꜱꜱᴡᴇʙ
║❏ ${prefix}ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
║❏ ${prefix}ᴜʀʟ2ɪᴍɢ
║❏ ${prefix}ᴛᴏɪᴍɢ
║❏ ${prefix}ᴛɪᴋᴛᴏᴋ
║❏ ${prefix}ғᴏᴛᴏᴛɪᴋᴛᴏᴋ
║❏ ${prefix}ᴋʙʙɪ
║❏ ${prefix}ᴡᴀɪᴛ
║❏ ${prefix}ᴊᴀᴅᴡᴀʟᴛᴠ 
║❏ ${prefix}ᴊᴀᴅᴡᴀʟᴛᴠɴᴏᴡ
║❏ ${prefix}ᴊᴀᴅᴡᴀʟʙᴏʟᴀ
║❏ ${prefix}ʟɪʀɪᴋ 
║❏ ${prefix}ᴄʜᴏʀᴅ 
║❏ ${prefix}ᴡɪᴋɪ 
║❏ ${prefix}ʙʀᴀɪɴʟʏ 
║❏ ${prefix}ʀᴇꜱᴇᴘᴍᴀꜱᴀᴋᴀɴ 
║❏ ${prefix}ʙᴇʀɪᴛᴀʜᴏᴀx
║❏ ${prefix}ᴍᴀᴘ 
║❏ ${prefix}ғɪʟᴍ 
║❏ ${prefix}ᴊᴀʀᴀᴋ
║❏ ${prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ
║❏ ${prefix}sʜᴏᴘᴇᴇ
║❏ ${prefix}ɪɴғᴏɢᴇᴍᴘᴀ
║❏ ${prefix}ɪɴғᴏɴᴏᴍᴏʀ
║❏ ${prefix}ᴀᴘᴋᴘᴜʀᴇ
║❏ ${prefix}ᴍᴏᴅᴅʀᴏɪᴅ
║❏ ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
║❏ ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ
║❏ ${prefix}ɪɴғᴏᴄᴜᴀᴄᴀ 
║❏ ${prefix}ᴊᴀᴍᴅᴜɴɪᴀ 
║❏ ${prefix}ᴛʀᴇɴᴅᴛᴡɪᴛ
║❏ ${prefix}ɢᴏᴏɢʟᴇ
╙───々
╓───「 *_ᴋᴇʀᴀɴɢ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴀᴘᴀᴋᴀʜ
║❏ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
║❏ ${prefix}ʙɪꜱᴀᴋᴀʜ
║❏ ${prefix}ʀᴀᴛᴇ
║❏ ${prefix}ᴡᴀᴛᴀᴋ
║❏ ${prefix}ʜᴏʙʙʏ
║❏ ${prefix}ᴛʀᴜᴛʜ
║❏ ${prefix}ᴅᴀʀᴇ
║❏ ${prefix}ғᴀᴋᴛᴀ
╙───々
╓───「 *_ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴛʀɪɢɢᴇʀ
║❏ ${prefix}ᴡᴀsᴛᴇᴅ
║❏ ${prefix}ɢᴀʏ
║❏ ${prefix}ꜱᴛɪᴋᴇʀ
║❏ ${prefix}ғɪɢ
║❏ ${prefix}ɴᴀɴɢɪꜱ
║❏ ${prefix}ᴘᴇʟᴜᴋ
║❏ ${prefix}ᴄɪᴜᴍ
║❏ ${prefix}ɴɢᴇᴡᴇ
╙───々
╓───「 *_ᴀᴜᴅɪᴏ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɢᴇᴍᴜᴋ
║❏ ${prefix}ᴛᴜᴘᴀɪ
║❏ ${prefix}ʙᴀꜱꜱ
║❏ ${prefix}ꜱʟᴏᴡ
║❏ ${prefix}ғᴀꜱᴛ
║❏ ${prefix}ᴛᴛꜱ
╙───々
╓───「 *_ɪᴍᴀɢᴇ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɢᴛᴀᴠ
║❏ ${prefix}ᴅʀᴀᴡɪɴɢ
║❏ ${prefix}ʀᴀɪɴᴅʀᴏᴘ
║❏ ${prefix}ɴɪɢʜᴛʙᴇᴀᴄʜ
║❏ ${prefix}ꜱᴋᴇᴛᴄʜ
║❏ ${prefix}ᴡᴀɴᴛᴇᴅ
║❏ ${prefix}ʟᴀᴘᴛᴏᴘ
║❏ ${prefix}ʟɪɴᴇᴘʜᴏᴛᴏ
║❏ ${prefix}ᴄʀᴏꜱꜱɢᴜɴ
╙───々
╓───「 *_ᴅᴜɢᴇᴍ ᴍᴇɴᴜ_* 」
║❏ ɪʀɪ
║❏ ᴛᴀᴘɪ
║❏ ʏᴏᴜʀ
║❏ ᴀᴡᴀʏ
║❏ ʙᴏᴍᴀ
║❏ ɴᴜᴍᴀ
║❏ ʀᴜʟᴇs
║❏ ɢᴀʀᴏx
║❏ ᴍᴀɢɪᴄ
║❏ ᴍᴇɴʏᴜᴋᴀɪᴋᴜ
╙───々
╓───「 *_ᴀɴɪᴍᴇ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɴᴇᴋᴏ
║❏ ${prefix}ʟᴏʟɪ
║❏ ${prefix}ᴡɪʙᴜ
║❏ ${prefix}ʜᴜꜱʙᴜ
║❏ ${prefix}ɴᴇᴏɴɪᴍᴇ
║❏ ${prefix}ɴᴀʀᴜᴛᴏ
║❏ ${prefix}ᴍɪɴᴀᴛᴏ
║❏ ${prefix}ʙᴏʀᴜᴛᴏ
║❏ ${prefix}ʜɪɴᴀᴛᴀ
║❏ ${prefix}ꜱᴀᴋᴜʀᴀ
║❏ ${prefix}ꜱᴀꜱᴜᴋᴇ
║❏ ${prefix}ᴛᴏᴜᴋᴀᴄʜᴀɴ
║❏ ${prefix}ʀɪᴢᴇ
║❏ ${prefix}ᴀᴋɪʀᴀ
║❏ ${prefix}ɪᴛᴏʀɪ
║❏ ${prefix}ᴋᴜʀᴜᴍɪ
║❏ ${prefix}ᴍɪᴋᴜ
║❏ ${prefix}ᴀɴɪᴍᴇ
╙───々
╓───「 *_ɢʀᴜᴘᴏ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɢᴀɴᴛᴇɴɢ
║❏ ${prefix}ᴀɴᴛɪғᴀᴋᴇ 1/0
║❏ ${prefix}ʙᴇʙᴀɴ
║❏ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
║❏ ${prefix}ᴄʟᴏꜱᴇᴛɪᴍᴇ
║❏ ${prefix}ᴍᴏᴅᴇᴀɴɪᴍᴇ 
║❏ ${prefix}ᴀɴᴛɪʟɪɴᴋ
║❏ ${prefix}ᴀɴᴛɪᴘᴀʟᴀᴠʀᴀᴏ
║❏ ${prefix}ʟɪsᴛᴘᴀʟᴀᴠʀᴀ
║❏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ
║❏ ${prefix}ɢʀᴜᴘ
║❏ ${prefix}ᴏᴡɴᴇʀɢʀᴜᴘ
║❏ ${prefix}ꜱᴇᴛᴘᴘ
║❏ ${prefix}ɪɴғᴏɢᴄ
║❏ ${prefix}ᴀᴅᴅ
║❏ ${prefix}ʀᴇᴍᴏᴠᴇʀ 
║❏ ${prefix}ᴋɪᴄᴋᴛɪᴍᴇ 
║❏ ${prefix}𝑃𝑅𝑂𝑀𝑂𝑇𝐸
║❏ ${prefix}𝐷𝐸𝑀𝑂𝑇𝐸
║❏ ${prefix}ꜱᴇᴛɴᴀᴍᴇ
║❏ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
║❏ ${prefix}ɢʀᴜᴘ
║❏ ${prefix}ᴛᴀɢᴍᴇ
║❏ ${prefix}ʜɪᴅᴇᴛᴀɢ
║❏ ${prefix}ᴍᴀʀᴄᴀʀᴛᴏᴅᴏs
║❏ ${prefix}ᴍᴇɴᴛɪᴏɴᴀʟʟ
║❏ ${prefix}ᴊᴀᴅɪᴀɴ
║❏ ${prefix}ғɪᴛɴᴀʜ
║❏ ${prefix}ʟɪꜱᴛᴀᴅᴍɪɴ
║❏ ${prefix}ɴꜱғᴡ
║❏ ${prefix}ꜱɪᴍɪʜ
╙───々
╓───「 *_ᴄʀɪᴀᴅᴏʀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ϙᴜᴏᴛᴇᴍᴀᴋᴇʀ
║❏ ${prefix}ᴛᴀʜᴛᴀ
║❏ ${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ
║❏ ${prefix}8ʙɪᴛ
║❏ ${prefix}ɢʟᴏᴡɴᴇᴏɴ
║❏ ${prefix}ɢꜱᴜɢɢᴇꜱᴛ
║❏ ${prefix}ᴄᴀɴᴅʟᴇᴍᴜɢ
║❏ ${prefix}ʟᴏᴠᴇᴍꜱꜱ
║❏ ${prefix}ᴍᴜɢғʟᴏᴡᴇʀ
║❏ ${prefix}ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ
║❏ ${prefix}ᴘᴀᴘᴇʀɢʟᴀꜱꜱ
║❏ ${prefix}ʀᴏᴍᴀɴᴄᴇ
║❏ ${prefix}ꜱʜᴀᴅᴏᴡ
║❏ ${prefix}ɢʟɪᴛᴄʜ
║❏ ${prefix}ᴄᴏғғᴇ
║❏ ${prefix}ᴄᴀɴᴅʏ
║❏ ${prefix}ʜᴘᴏᴛᴛᴇʀ
║❏ ${prefix}ᴡᴏᴏᴅʙʟᴏᴄᴋ
║❏ ${prefix}ɢᴀʟᴀxᴛᴇxᴛ
║❏ ${prefix}ɢᴀʟᴀxsᴛʏʟᴇ
║❏ ${prefix}ʙᴘɪɴᴋ
║❏ ${prefix}ᴘᴜᴘʏᴄᴜᴛᴇ
║❏ ${prefix}ʜᴏʟᴏɢʀᴀᴍ
║❏ ${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ
╙───々
╓───「 *_ᴅɪᴠᴇʀsᴀᴏ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɴᴜʟɪꜱ
║❏ ${prefix}ɴᴜʟɪꜱ2
║❏ ${prefix}ꜱʟɪᴅᴇ
║❏ ${prefix}ᴀɴᴊɪɴɢ
║❏ ${prefix}ᴋᴜᴄɪɴɢ
║❏ ${prefix}ᴄʏʙᴇʀᴘᴜɴᴋ
║❏ ${prefix}ᴛᴇꜱᴛɪᴍᴇ
║❏ ${prefix}ᴢᴏᴅɪᴀᴋ
║❏ ${prefix}ʜɪʟɪʜ
║❏ ${prefix}ᴄᴇᴄᴀɴ
║❏ ${prefix}ᴄᴏɢᴀɴ
║❏ ${prefix}ϙᴜᴏᴛᴇꜱ
║❏ ${prefix}ᴋᴀᴛᴀʙɪᴊᴀᴋ
║❏ ${prefix}ᴅᴀʀᴋᴊᴏᴋᴇꜱ
║❏ ${prefix}ʙᴜᴄɪɴ
║❏ ${prefix}ᴘᴀɴᴛᴜɴ
║❏ ${prefix}ᴋᴀᴛᴀᴅɪʟᴀɴ
║❏ ${prefix}ᴋᴀᴛᴀᴄɪɴᴛᴀ
║❏ ${prefix}ʀᴀɴᴅᴏᴍᴋᴘᴏᴘ
║❏ ${prefix}ʜᴇᴋᴇʀʙᴜᴄɪɴ
║❏ ${prefix}ᴋᴀᴛᴀɪʟʜᴀᴍ
║❏ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ 
║❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
║❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ 
║❏ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ 
║❏ ${prefix}ᴘᴇʀꜱᴇɴɢᴀʏ 
║❏ ${prefix}ᴘʙᴜᴄɪɴ 
║❏ ${prefix}ʙᴘғᴏɴᴛ 
║❏ ${prefix}ᴛᴇxᴛꜱᴛʏʟᴇ 
║❏ ${prefix}ᴍɪᴍᴘɪ
║❏ ${prefix}ʀᴇᴀᴅᴍᴏʀᴇ
║❏ ${prefix}ᴘᴜɪꜱɪɪᴍɢ
║❏ ${prefix}ᴀꜱᴜᴘᴀɴ
║❏ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
║❏ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
║❏ ${prefix}ғᴀᴍɪʟʏ100
║❏ ${prefix}ᴍᴇᴍᴇɪɴᴅᴏ
╙───々
╓───「 *_ꜱᴀɴɢᴇ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴄᴇʀꜱᴇx
║❏ ${prefix}ʀᴀɴᴅᴏᴍʙᴏᴋᴇᴘ
║❏ ${prefix}ᴘᴏʀɴʜᴜʙ
║❏ ${prefix}xᴠɪᴅᴇᴏꜱ
║❏ ${prefix}ɴꜱғᴡʟᴏʟɪ
║❏ ${prefix}ɴꜱғᴡʙʟᴏᴡᴊᴏʙ
║❏ ${prefix}ɴꜱғᴡɴᴇᴋᴏ
║❏ ${prefix}ɴꜱғᴡᴛʀᴀᴘ
║❏ ${prefix}ʜᴇɴᴛᴀɪ
║❏ ${prefix}ɴᴇᴋᴏᴘᴏɪ
╙───々
╓───「 *_ɪꜱʟᴀᴍ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴊᴀᴅᴡᴀʟꜱʜᴏʟᴀᴛ
║❏ ${prefix}ϙᴜʀᴀɴᴀᴜᴅɪᴏ
║❏ ${prefix}ϙᴜʀᴀɴ
║❏ ${prefix}ϙᴜʀᴀɴʟɪꜱᴛ
║❏ ${prefix}ϙᴜʀᴀɴꜱᴜʀᴀʜ 
╙───々
╓───「 *_ᴏᴛʜᴇʀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ʙᴇᴄʀʏᴘᴛ 
║❏ ${prefix}ᴇɴᴄᴏᴅᴇ64
║❏ ${prefix}ᴅᴇᴄᴏᴅᴇ64
║❏ ${prefix}ᴇɴᴄᴏᴅᴇ32
║❏ ${prefix}ᴅᴇᴄᴏᴅᴇ32
║❏ ${prefix}ᴇɴᴄʙɪɴᴀʀʏ 
║❏ ${prefix}ᴅᴇᴄʙɪɴᴀʀʏ 
║❏ ${prefix}ᴇɴᴄᴏᴄᴛᴀʟ 
║❏ ${prefix}ᴅᴇᴄᴏᴄᴛᴀʟ 
║❏ ${prefix}ʜᴀꜱʜɪᴅᴇɴᴛɪғɪᴇʀ 
║❏ ${prefix}ᴅᴏʀᴋɪɴɢ 
║❏ ${prefix}ᴘᴀꜱᴛᴇʙɪɴ 
║❏ ${prefix}ᴛɪɴʏᴜʀʟ 
║❏ ${prefix}ʙɪᴛʟʏ 
╙───々
╓───「 *_ꜱᴘᴀᴍ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ꜱᴘᴀᴍᴄᴀʟʟ 
║❏ ${prefix}ꜱᴘᴀᴍɢᴍᴀɪʟ 
╙───々
╓───「 *_ᴅᴏɴᴏ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
║❏ ${prefix}ʀᴇᴍᴏᴠᴇᴘʀᴇᴍ
║❏ ${prefix}ᴀᴅᴅᴘᴀʟᴀᴠʀᴀ
║❏ ${prefix}ᴅᴇʟᴘᴀʟᴀᴠʀᴀ
║❏ ${prefix}ᴀᴅᴅʙᴜᴄɪɴ
║❏ ${prefix}ᴀᴅᴅᴀᴜᴅɪᴏ
║❏ ${prefix}ᴀᴅᴅꜱᴛɪᴄᴋᴇʀ
║❏ ${prefix}ꜱᴇᴛᴍᴇᴍʟɪᴍɪᴛ
║❏ ${prefix}ʀᴇꜱᴇᴛʟɪᴍɪᴛ
║❏ ${prefix}ꜱᴇᴛʟɪᴍɪᴛ
║❏ ${prefix}ꜱᴇᴛʀᴇᴘʟʏ
║❏ ${prefix}ꜱᴇᴛᴘʀᴇғɪx
║❏ ${prefix}ꜱᴇᴛɴᴀᴍᴇʙᴏᴛ
║❏ ${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ
║❏ ${prefix}ʙᴄ
║❏ ${prefix}ʙᴄɢᴄ
║❏ ${prefix}ʙᴀɴ
║❏ ${prefix}ᴜɴʙᴀɴ
║❏ ${prefix}ʙʟᴏᴄᴋ
║❏ ${prefix}ᴜɴʙʟᴏᴄᴋ
║❏ ${prefix}ᴄʟᴇᴀʀᴀʟʟ
║❏ ${prefix}ᴅᴇʟᴇᴛᴇ
║❏ ${prefix}ᴄʟᴏɴᴇ
║❏ ${prefix}ʟᴇᴀᴠᴇ
╙───々
     𝐵𝑂𝑇 𝑂𝑃𝑅𝐸𝑆𝑆𝑂𝑅
𝐸𝑆𝑆𝐴 𝑉𝐸𝑅𝑆𝐴𝑂 𝐸 𝐴𝑃𝐸𝑁𝐴𝑆 𝑃𝐴𝑅𝐴 𝑇𝐸𝑆𝑇𝐸 !!
𝑁𝐴𝑂 𝐸́ 𝑈𝑀𝐴 𝑉𝐸𝑅𝑆𝐴𝑂 𝑂𝐹𝐼𝐶𝐼𝐴𝐿 !!`
brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
denz.sendMessage(from, dmenu, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "verificado por lorde screamo:v cuidado com algumas mudanças #TIOCAFE", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')}}}})
denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 	    
            break
            case 'help':
brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
denz.sendMessage(from, help(name), text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "@denssptraa", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
    	    break
            case 'fig':
				case 'stiker':
				case 'sticker':
				case 'gifsticker':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				case 'sticker':
				case 's':
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						if (isLimit(sender)) return reply(limitend(pushname2))
						reply(mess.wait)
						const ran= getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "nih ajg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						const ran= getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`\`\`\`Gagal, pada saat mengkonversi ${tipe} ke stiker\`\`\``)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "nih ajg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('𝐸𝑅𝑅𝑂 𝑇𝐸𝑁𝑇𝐸 𝐷𝑁𝑉 𝑀𝐴𝐼𝑆 𝑇𝐴𝑅𝐷𝐸')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "nih ajg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
							})
						})
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					await limitAdd(sender) 
					break 
					case 'shopee':
                      if (isBanned) return reply(mess.only.benned)
			        if (!isUser) return reply(mess.only.userB)
			    hmml3 = await fetchJson(`https://pencarikode.xyz/api/shopee?search=${body.slice(8)}&apikey=pais`)
                     buffer = await getBuffer(`https://e.top4top.io/p_1886uvsdz0.jpg`)
                     hasilbg3 = `*Nama* : *_${hmml3.result[0].nama}_*\n*Harga* : *_${hmml3.result[0].harga}_*\n*Terjual* : *_${hmml3.result[0].terjual}_*\n*Tempat* : *_${hmml3.result[0].lokasi}_*\n*Link* : *_${hmml3.result[0].link_produk}_*\n*Deskripsi* : *_${hmml3.result[0].deskripsi}_**Nama* : *_${hmml3.result[1].nama}_*\n*Harga* : *_${hmml3.result[1].harga}_*\n*Terjual* : *_${hmml3.result[1].terjual}_*\n*Tempat* : *_${hmml3.result[1].lokasi}_*\n*Link* : *_${hmml3.result[1].link_produk}_*\n*Deskripsi* : *_${hmml3.result[1].deskripsi}_*`
                    denz.sendMessage(from, buffer, image, {quoted: mek, caption: hasilbg3})
                    await limitAdd(sender)
                    break
                    case 'jadwalbola':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Kick Off* : ${i.kickoff}\n❏ *Pertandingan* : ${i.pertandingan}\n❏ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
// newmenu
case 'igpost': 				
				if (args.length < 1) return reply('𝐶𝐴𝐷𝐸 𝑂 𝑈𝑅𝑙 ?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('ini bukan url instagram anjim')
				ige = body.slice(8)
                                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/ig?url=${args[0]}&apikey=onlyonedeveloper`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
                                denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }})
				break
		case 'covidglobal': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=onlyonedeveloper`)
				teks = `➸ *Total Cases* : ${anu.result.totalCases}\n*➸ Recovered :* ${anu.result.recovered}\n*➸ Deaths :* ${anu.result.deaths}\n*➸ Active Cases :* ${anu.result.activeCases}\n*➸ Closed Cases :* ${anu.result.closedCases}\n*➸ Last Update :* ${anu.result.lastUpdate}`
				denz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'hadits': 
				if (args.length < 1) return reply(`kitab + nomor nya mana om? contoh: hadits muslim|116`)
				ct = body.slice(8)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hadits?kitab=${ll1}&nomor=${ll2}&apikey=onlyonedeveloper`)
				teks = `➸ *Name Hadits* : ${anu.result.data.name}\n*➸ Number Hadits :* ${anu.result.data.contents.number}\n*➸ Arab :* ${anu.result.data.contents.arab}\n*➸ Latin :* ${anu.result.data.contents.id}`
				denz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'github': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/github?user=${body.slice(8)}&apikey=onlyonedeveloper`)
				buffer7 = await getBuffer(anu.result.avatar_url)
				teks = `*HASIL*\n\n*➸ ID :* ${anu.result.id}\n*➸ Node ID :* ${anu.result.node_id}\n*➸ Gravatar ID :* ${anu.result.gravatar_id}\n*➸ Url :* ${anu.result.html_url}\n*➸ Type :* ${anu.result.type}\n*➸ Site Admin :* ${anu.result.site_admin}\n*➸ Name :* ${anu.result.name}\n*➸ Company :* ${anu.result.company}\n*➸ Blog :* ${anu.result.blog}\n*➸ Location :* ${anu.result.location}\n*➸ Email :* ${anu.result.email}\n*➸ Bio  :* ${anu.result.bio}\n*➸ Twitter Username :* ${anu.result.twitter_username}\n*➸ Public Repo :* ${anu.result.public_repos}\n*➸ Public Gists :* ${anu.result.public_gists}\n*➸ Followers :* ${anu.result.followers}\n*➸ Following :* ${anu.result.following}\n*➸ Create At :* ${anu.result.created_at}\n*➸ Update At :* ${anu.result.updated_at}`
				denz.sendMessage(from, buffer7, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: teks})
				break
				case 'lacakip': 
				if (args.length < 1) return reply(`ip nya mana bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/iplookup?ip=${body.slice(9)}&apikey=onlyonedeveloper`)
				teks = `➸ *ip* : ${anu.result.ip}\n*➸ Country :* ${anu.result.country}\n*➸ Region :* ${anu.result.region}\n*➸ Latitude :* ${anu.result.latitude}\n*➸ Longtitude :* ${anu.result.longtitude}\n*➸ Timezone :* ${anu.result.timezone}\n*➸ Org :* ${anu.result.org}\n*➸ As :* ${anu.result.as}\n*➸ City :* ${anu.result.city}\n*➸ Country Code :* ${anu.result.countryCode}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Link GMaps :* ${anu.result.maps}`
				denz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }})
				break
		case 'dkasia': // Update By RzkyO 7 ItsmeikyXSec404
				if (args.length < 1) return reply(`nama drakorasia apaan bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/drakorasia?search=${body.slice(8)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumb)
				hasil = `➸ *Title* : ${anu.result.title}\n*➸ Title Korea :* ${anu.result.titleKr}\n*➸ Year :* ${anu.result.year}\n*➸ Jumlah Episode :* ${anu.result.episode}\n*➸ Genre :* ${anu.result.genre}\n*➸ Durasi :* ${anu.result.duration}\n*➸ Network :* ${anu.result.network}\n*➸ Ringkasan :* ${anu.result.synopsis}\n*➸ Aktor :* ${anu.result.casters}`
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: hasil})
				break
		case 'manga': // Update By RzkyO 7 ItsmeikyXSec404
				if (args.length < 1) return reply(`nama anime nya apaan bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/manga?search=${body.slice(6)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumb)
				hasil = `*Note:* : ${anu.result.note}\n*Title* : ${anu.result.title}\n*Description* : ${anu.result.description}\n*Name* : ${anu.result.name}\n*Type* : ${anu.result.type}\n*Author* : ${anu.result.author}\n*Genre* : ${anu.result.genre}\n*Rating* : ${anu.result.rating}\n*Released* : ${anu.result.released}\n*Status* : ${anu.result.status}`
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: hasil})
				teks = '=================\n'
				for (let i of anu.result.downloads) {
					teks += `*Date* : ${i.date}\n*Download Via* : ${i.title}\n*Link Download* : ${i.link}\n=================\n`
				}
				reply(teks)
				break
		case 'kusonime': 
				if (args.length < 1) return reply(`nama anime nya apaang bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/kusonime?search=${body.slice(9)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumbs)
				hasil = `*Title:* : ${anu.result.title}\n*Title Jp* : ${anu.result.title_jp}\n*Genre* : ${anu.result.genre}\n*Season* : ${anu.result.season}\n*Producer* : ${anu.result.producer}\n*Type* : ${anu.result.type}\n*Total Episode* : ${anu.result.total_episode}\n*Rating* : ${anu.result.score}\n*Durasi* : ${anu.result.duration}\n*Released On* : ${anu.result.released_on}\n*Description* : ${anu.result.description}`
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: hasil})
				break
		case 'cekresijne': 
				if (args.length < 1) return reply(`res nya apaan bwang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/searchresi?courier=jne&awb=${body.slice(11)}&apikey=onlyonedeveloper`)
				hasil = `*Code Resi:* : ${anu.result.data.summary.awb}\n*Courier* : ${anu.result.data.summary.courier}\n*Service* : ${anu.result.data.summary.service}\n*Status* : ${anu.result.data.summary.status}\n*Date* : ${anu.result.data.summary.date}\n*Desc* : ${anu.result.data.summary.desc}\n*Harga* : ${anu.result.data.summary.amount}\n*Berat Barang* : ${anu.result.data.summary.weight}\n*Origin* : ${anu.result.data.detail.origin}\n*Destination* : ${anu.result.data.detail.destination}\n*Shipper* : ${anu.result.data.detail.shipper}\n*Receiver* : ${anu.result.data.detail.receiver}`
				denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'ini hasilnya kak'})
				teks = '=================\n'
				for (let i of anu.result.data.history) {
					teks += `*Date* : ${i.date}\n*Desc History* : ${i.desc}\n*Location* : ${i.location}\n=================\n`
				}
				reply(teks)
				break
				case 'randomwp': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/wallpaper?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'ini fotonya kak'})
				break
		case 'blackpink': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomimage/blackpink?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.result)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'ini fotonya kak'})
				break
		case 'hentaipict': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hentai?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.result)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'ini fotonya kak'})
				break
				case 'gabut': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/gabut?apikey=onlyonedeveloper`)
				hasil = `➸ *Activity* : ${anu.result.activity}\n*➸ Type :* ${anu.result.type}`
				denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'quotemuslim': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomquote/muslim?apikey=onlyonedeveloper`)
				hasil = `*➸ Quote :* ${anu.result.text_id}`
				denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'gombal': 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/katakatagombal?apikey=onlyonedeveloper`, {method: 'get'})
				reply(anu.result.quote)
				break
		case 'kodepos': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				break
		case 'liputan6': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/liputan6?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Date* : ${i.isoDate}\n*Description* : ${i.description}\n=================\n`
				}
				reply(teks)
				break
		case 'cnnnews': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/cnnnews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.contentSnippet}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'republika': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/republika?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'temponews': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/temponews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.content}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'kumparannews': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/kumpurannews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'lazymedia': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari berita apaan bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/lazymedia?search=${body.slice(10)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Author:* : ${i.author}\n*Title* : ${i.title}\n*Tag* : ${i.tag}\n*Time* : ${i.time}\n*Description* : ${i.desc}\n*Key* : ${i.key}\n=================\n`
				}
				reply(teks)
				break
				case 'pubglogo': 
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				ll1 = ct.split("/")[0];
                ll2 = ct.split("/")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=pubg&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'butterfly': 				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro11?text=${ct}&theme=butterfly&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'battlefield': 
				if (args.length < 1) return reply(`textnya mana om?`)					
				ct = body.slice(12)
				ll1 = ct.split("/")[0];
				ll2 = ct.split("/")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'infofilm': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/infofilm?q=${body.slice(10)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Episode* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Views* : ${i.detail.views}\n*Duration* : ${i.detail.duration}\n*Release* : ${i.detail.release}\n*Dscription* : ${i.detail.description}\n=================\n`
				}
				reply(teks)
				break
		case 'infofilm2': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/country/infofilm?search=${body.slice(11)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Quality* : ${i.quality}\n*Movie ID* : ${i.movieId}\n*Trailer* : ${i.detail.trailer}\n*Views* : ${i.detail.views}\n*Genre* : ${i.detail.genre}\n*Director* : ${i.detail.director}\n*Aktor* : ${i.detail.actors}\n*Country* : ${i.detail.country}\n*Duration* : ${i.detail.duration}\n*Release* : ${i.detail.release}\n*Description* : ${i.detail.description}\n=================\n`
				}
				reply(teks)
				break
		case 'lk21': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/lk21?query=${body.slice(5)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Genre* : ${i.genre}\n*Rating* : ${i.rating}\n*Duration* : ${i.duration}\n*Quality* : ${i.quality}\n*Trailer* : ${i.trailer}\n*Watch* : ${i.watch}\n=================\n`
				}
				reply(teks)
				break
// last
                    case 'randomquran':
                case 'quranaudio':
				if (isBanned) return reply(mess.only.benned)   
				 if (!isUser) return reply(mess.only.userB)
				anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
					faktaaa = `*Nama* : *${anu.result.nama}*\n*Arti* : *${anu.result.arti}*\n*Nomor* : *${anu.result.nomor}*\n*Tipe* : *${anu.result.type}*\n*Ayat* : *${anu.result.ayat}*\n*Isi* : *${anu.result.keterangan}*`
					quu = await getBuffer(anu.result.audio)
					denz.sendMessage(from, faktaaa, text, {quoted: mek})
					denz.sendMessage(from, quu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.nama}.mp3`, quoted: mek})
					await limitAdd(sender) 
					break
					case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('𝐸𝑅𝑅𝑂 𝐴𝑂 𝑇𝑅𝐴𝑁𝐹𝑂𝑅𝑀𝐴 𝐹𝐼𝐺𝑈𝑅𝐼𝑁𝐻𝐴 𝐸𝑀 𝐼𝑀𝐴𝐺𝐸𝑀')
						buffer = fs.readFileSync(ran)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: '𝑃𝑅𝑂𝑁𝑇𝐼𝑁𝐻𝑂 '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return denz.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return denz.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						denz.sendMessage(from, `*Sucesso na ativacao Do grupo anti-exclusão!*`, MessageType.text)
					} else if (!isGroup) {
						denz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return denz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						denz.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						denz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return denz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return denz.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 6285928xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					denz.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						denz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						denz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						denz.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						denz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'apkpure':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nome APK* : ${i.title}\n*Link* : ${i.url}\n*Avaliacao* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
            case 'zodiak':
if (args.length < 1) return reply('𝐷𝐼𝐺𝐼𝑇𝐸 𝑂 𝑁𝑂𝑀𝐸 𝐷𝑂 𝑆𝐸𝑈 𝑍𝑂𝐷𝐼𝐴𝐶𝑂')
denz.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
teks = body.slice(8)
try {
data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${VthearApi}`)
hasil = `Zodiak : *${data.result.zodiak}*\nRamalan hari ini : *${data.result.ramalan}*\n${data.result.inspirasi}`
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.wait)
}
break
case 'cyberpunk':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
   denz.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
  case 'katadilan': 	
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'wasted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
denz.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('𝐶𝑂𝐿𝑂𝐶𝐴 𝐹𝑂𝑇𝑂 𝐹𝐷𝑃')
}
break

case 'drawing':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehqe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehqe, image, {quoted:mek})
} else {
  reply('𝑀𝐴𝑅𝑄𝑈𝐸 𝐴 𝐼𝑀𝐴𝐺𝐸𝑀 !')
}
break

case 'gay':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
denz.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('𝐶𝑂𝐿𝑂𝐶𝐴 𝐹𝑂𝑇𝑂 𝐹𝐷𝑃 ')
}
break

case 'nightbeach':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'laptop':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('𝑀𝐴𝑅𝑄𝑈𝐸 𝐴 𝐼𝑀𝐴𝐺𝐸𝑀 !')
}
break

case 'linephoto':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('𝑀𝐴𝑅𝑄𝑈𝐸 𝐴 𝐼𝑀𝐴𝐺𝐸𝑀')
}
break

case 'raindrop':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('𝑀𝐴𝑅𝑄𝑈𝐸 𝐴 𝐼𝑀𝐴𝐺𝐸𝑀')
}
break

case 'sketch':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('𝑀𝐴𝑅𝑄𝑈𝐸 𝐴 𝐼𝑀𝐴𝐺𝐸𝑀')
}
break

case 'crossgun':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  haehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, haehe, image, {quoted:mek})
} else {
  reply('𝑀𝐴𝑅𝑄𝑈𝐸 𝐴 𝐼𝑀𝐴𝐺𝐸𝑀')
}
break


case 'wanted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hsehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 denz.sendMessage(from, hsehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break

case 'gtav':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('𝑀𝐴𝑅𝑄𝑈𝐸 𝐴 𝐼𝑀𝐴𝐺𝐸𝑀')
}
break
case 'cecan':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  tels = body.slice(5)
  denz.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"cewek cantik",
"cewe hijab",
"cute girl",
"cewe rusia cantik",
"cewe jepang cantik",
"cecan indo"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek, caption: `Gimana ?`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
  case 'cogan':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  denz.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek, caption: `Wah ganteng kek gua`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
			case 'jadian':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
					case 'cantik':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
					case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('𝐸𝑅𝑅𝑂𝑅 !')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('𝐸𝑅𝑅𝑂𝑅')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
                  if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await denz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('𝐸𝑅𝑅𝑂𝑅 !')
				uhh = fs.readFileSync(ran)
				denz.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
					case 'ganteng':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `*Yang Paling Ganteng Disini Adalah :* @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
					case 'beban':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const nge = groupMembers
					const tod = groupMembers
					const beb = nge[Math.floor(Math.random() * nge.length)]
					const an = pushname2[Math.floor(Math.random() * tod.length)]
					teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
					membr.push(beb.jid)
					mentions(teks, membr, true)
					break
				case 'brainly':
					if (!isUser) return reply(mess.only.userB)
									
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '───────────────────────\n'
					for (let Y of res.data) {
						teks += `\n 𝐵𝐴𝑅𝐼𝑁𝐿𝑌 \n\n*➸ 𝑃𝐸𝑅𝐺𝑈𝑁𝑇𝐴*\n ${Y.pertanyaan}\n\n*➸ 𝑅𝐸𝑆𝑃𝑂𝑆𝑌𝐴*\n ${Y.jawaban[0].text}\n────────────────────\n`
					}
					denz.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
                await limitAdd(sender)
				break 
				case 'daftar':
					denz.updatePresence(from, Presence.composing)
					if (isUser) return reply('𝐽𝐴 𝐸𝑆𝑇𝐴 𝐶𝐴𝐷𝐴𝑆𝑇𝑅𝐴𝐷𝑂 𝐶𝑂𝑅𝑁𝐼𝑁')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {
					ppimg = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `𝐶𝐴𝐷𝐴𝑆𝑇𝑅𝑂 \`\`\`\n│ 𝑅𝐸𝐺𝐼𝑆𝑇𝑅𝐴𝐷𝑂 𝐶𝑂𝑀 𝐸𝑋𝐼𝑇𝑂 : \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`𝑆𝑂𝐵𝑅𝐸${date} ${time}\`\`\`\n│\`\`\`𝑁𝑂𝑀𝐸 𝐷𝐴 𝑃𝑈𝑇𝐴: ${pushname2}\`\`\`\n│\`\`\`𝑁𝑈𝑀𝐸𝑅𝑂 𝐷𝑂 𝐶𝑂𝑅𝑁𝑂: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`𝑄𝑈𝐴𝑁𝐷𝑂 𝐹𝑂𝑅 𝑀𝐸 𝐸𝑁𝐶𝑂𝑀𝑂𝐷𝐴\`\`\`\n│\`\`\`𝐹𝐴𝑍𝐸𝑅 𝑂 𝐹𝐴𝑉𝑂𝑅 𝐷𝐸 \`\`\`\n│\`\`\`𝐸𝑁𝑉𝐼𝐴 ${prefix}menu\`\`\`\n│\`\`\`\n│𝑄𝑈𝐴𝑁𝑇𝐼𝐷𝐴𝐷𝐸𝑆 𝐷𝐸 𝑃𝐴𝑅𝐴𝑍𝐼𝑇𝐴𝑆 𝑀𝐸 𝑈𝑆𝐴𝑁𝐷𝑂: ${user.length} ! `
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    daftarimg = await getBuffer(ppimg)
					denz.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break 
                    case 'profile':
    				denz.updatePresence(from, Presence.composing)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
    				try {
					profil = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `𝑃𝐸𝑅𝐹𝐼𝐿 \n 𝑁𝑂𝑀𝐸 𝐷𝐴 𝑃𝑈𝑇𝐴: ${pushname2}\n𝑈𝑆𝐴𝑅 𝐷𝐴𝐹𝑇𝐴𝑅\n 𝐿𝐼𝑁𝐾 𝑃𝐴𝑅𝐴 𝑇𝑅𝐴𝑉𝐴 𝐻𝐸𝐻𝐸𝐻𝐸 wa.me/${sender.split("@")[0]}`
					buff = await getBuffer(profil)
					denz.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
				case 'bahasa':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				denz.sendMessage(from, bahasa(prefix), text, {quoted: mek})
				brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				break 
				case 'donakkkksi':
				case 'donkkkkate':
					denz.sendMessage(from, donasi(name), text, {quoted: mek})
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
				case 'info':
					me = denz.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ 𝑁𝑂𝑀𝐸 𝐷𝑂 𝐵𝑂𝑇 : 𝐵𝑂𝑇 𝑂𝑃𝑅𝐸𝑆𝑆𝑂𝑅 \n 𝐷𝑂𝑁𝑂 𝐷𝑂 𝐵𝑂𝑇 : 𝑉𝐼𝑁𝐼𝐶𝐼𝑂𝑆 𝑆𝐼𝐿𝑉𝐴\n 𝑃𝑅𝐸𝐹𝐼𝑋𝑂 : | ${prefix} |\n 𝑇𝑅𝑂𝑋𝐴𝑆 𝐵𝐿𝑂𝑄𝑈𝐸𝐴𝐷𝑂𝑆 : ${blocked.length}\n𝐿𝐼𝐺𝐴𝐷𝑂𝑁𝐷𝐸𝑆𝐷𝐸 : ${kyun(uptime)}\n𝑃𝐴𝑅𝐴𝑍𝐼𝑇𝐴𝑆 𝑀𝐸 𝑈𝑆𝐴𝑁𝐷𝑂 : ${user.length} 𝑈𝑆𝑈𝐴𝑅𝐼𝑂\n 𝐼𝑁𝑆𝑇𝐴 𝐷𝑂 𝑃𝐴𝐸  : 𝑉𝐼𝑁𝐼𝐶𝐼𝑂𝑆\n𝐺𝑅𝑈𝑃𝑂 𝐷𝑂 𝑍𝐴𝑃: https://chat.whatsapp.com/J1ChP0au4pu0gLcFg8GiSP\n𝑃𝐴𝑅𝐶𝐸𝑅𝐼𝐴𝑆  :\n𝑁𝐴𝑍𝐴 𝑂𝐹𝐶:https://chat.whatsapp.com/J1WDSux6aZj1ePH0AiBv69`
					const daca = fs.readFileSync('dnsnew.jpg');
				    denz.sendMessage(from, daca, image, {quoted: mek, caption: teks})
				    brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break 
				case 'totaluser':
					denz.updatePresence(from, Presence.composing) 
									
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `𝑇𝑂𝑇𝐴𝐿 𝐷𝐸 𝑃𝐴𝑅𝐴𝑆𝐼𝑇𝐴𝑆${name}*\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`
					denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					denz.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'ban':
					denz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
					case 'tahta':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}tahta dns`)
tekts = body.slice(7)
reply(mess.wait)
tthha = await getBuffer(`https://api.vhtear.com/hartatahta?text=${tekts}&apikey=${VthearApi}`)
denz.sendMessage(from, tthha, image, {quoted: mek})
await limitAdd(sender)
break
case 'burnpaper':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}burnpaper dns`)
todi = body.slice(11)
reply(mess.wait)
pper = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`)
denz.sendMessage(from, pper, image, {quoted: mek})
await limitAdd(sender)
break
case '8bit':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}8bit dns/bot`)
ds = `${body.slice(6)}`
tex1 = ds.split("/")[0];
tex2 = ds.split("/")[1];
reply(mess.wait)
brikff = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tex1}&text2=${tex2}`, {method: 'get'})
denz.sendMessage(from, brikff, image, {quoted: mek})
await limitAdd(sender)
break
case 'glowneon':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}glowneon dns`)
tekas = body.slice(10)
reply(mess.wait)
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
denz.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
case 'gsuggest':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest dns/bot/wea`)
du = `${body.slice(10)}`
ted1 = du.split("/")[0];
ted2 = du.split("/")[1];
ted3 = du.split("/")[2];
reply(mess.wait)
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
denz.sendMessage(from, sugetg, image, {quoted: mek})
await limitAdd(sender)
break
case 'candlemug':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}candlemug dns`)
ddu = body.slice(11)
reply(mess.wait)
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
denz.sendMessage(from, clmug, image, {quoted: mek})
await limitAdd(sender)
break
case 'lovemss':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}lovemss dns`)
lop = body.slice(9)
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
denz.sendMessage(from, lepms, image, {quoted: mek})
await limitAdd(sender)
break
case 'mugflower':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}mugflower dns`)
mug = body.slice(11)
reply(mess.wait)
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
denz.sendMessage(from, mflowg, image, {quoted: mek})
await limitAdd(sender)
break
case 'narutobanner':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner dns`)
nar = body.slice(14)
reply(mess.wait)
narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
denz.sendMessage(from, narba, image, {quoted: mek})
await limitAdd(sender)
break
case 'paperglass':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}paperglass dns`)
papg = body.slice(12)
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
denz.sendMessage(from, gelas, image, {quoted: mek})
await limitAdd(sender)
break
case 'romance':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}romance dns`)
roce = body.slice(9)
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
denz.sendMessage(from, roma, image, {quoted: mek})
await limitAdd(sender)
break
case 'shadow':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}shadow dns`)
sdow = body.slice(8)
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
denz.sendMessage(from, shan, image, {quoted: mek})
await limitAdd(sender)
break
case 'glitch':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}glitch dns/bot`)
gl = `${body.slice(8)}`
gel1 = gl.split("/")[0];
gel2 = gl.split("/")[1];
reply(mess.wait)
litsh = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, {method: 'get'})
denz.sendMessage(from, litsh, image, {quoted: mek})
await limitAdd(sender)
break
case 'coffe':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}coffe dns`)
kop = body.slice(7)
reply(mess.wait)
ppi = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)
denz.sendMessage(from, ppi, image, {quoted: mek})
await limitAdd(sender)
break
case 'candy':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}candy dns`)
cndy = body.slice(7)
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`)
denz.sendMessage(from, prmen, image, {quoted: mek})
await limitAdd(sender)
break
case 'hpotter':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}hpotter dns`)
hpter = body.slice(9)
reply(mess.wait)
helpter = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`)
denz.sendMessage(from, helpter, image, {quoted: mek})
await limitAdd(sender)
break
case 'woodblock':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}woodblock dns`)
woblk = body.slice(11)
reply(mess.wait)
gblok = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`)
denz.sendMessage(from, gblok, image, {quoted: mek})
await limitAdd(sender)
break
case 'galaxtext':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}galaxtext dns`)
glaktx = body.slice(11)
reply(mess.wait)
galax = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=WEMPYGANSS&text=${glaktx}`)
denz.sendMessage(from, galax, image, {quoted: mek})
await limitAdd(sender)
break
case 'pupycute':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}pupycute dns`)
puki = body.slice(10)
reply(mess.wait)
cute = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=WEMPYGANSS&text=${puki}`)
denz.sendMessage(from, cute, image, {quoted: mek})
await limitAdd(sender)
break
case 'galaxstyle':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}galaxstyle dns`)
gelay = body.slice(12)
reply(mess.wait)
style = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=WEMPYGANSS&text=${gelay}`)
denz.sendMessage(from, style, image, {quoted: mek})
await limitAdd(sender)
break
case 'hologram':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}hologram dns`)
gram = body.slice(10)
reply(mess.wait)
holo = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=WEMPYGANSS&text=${gram}`)
denz.sendMessage(from, holo, image, {quoted: mek})
await limitAdd(sender)
break
case 'metallogo':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}metallogo dns`)
metal = body.slice(11)
reply(mess.wait)
metlog = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=WEMPYGANSS&text=${metal}`)
denz.sendMessage(from, metlog, image, {quoted: mek})
await limitAdd(sender)
break
case 'bpink':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}bpink dns`)
black = body.slice(7)
reply(mess.wait)
pink = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=WEMPYGANSS&text=${black}`)
denz.sendMessage(from, pink, image, {quoted: mek})
await limitAdd(sender)
break
				case 'addprem':
					denz.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Sucesso adicionado ${premium} Ke database User Premium*`)
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Remover com sucesso wa.me/${rprem} Dari User Premium`)
					break
					case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'block':
				 denz.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					denz.blockUser (`${body.slice(7)}@c.us`, "add")
					denz.sendMessage(from, `Pedidos recebidos, bloquear ${body.slice(7)}@c.us`, text)
					break
				case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    denz.blockUser (`${body.slice(9)}@c.us`, "remove")
					denz.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break 
				case 'readmore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('teks nya mana om?')
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					if (args.length < 1) return reply(mess.blank)
					denz.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
				case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				break
					case 'limit':
				var found = false
                    const limidat = JSON.parse(fs.readFileSync('./database/json/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.id === sender) {
                            let limitCounts = limitt - lmt.limit
                            if (limitCounts <= 0) return reply(from,`Limit anda habis`, id)
                            await reply(`*LIMIT ANDA TINGGAL: ${limitCounts}*`)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id : sender, limit : 1 }
                        limit.push(obj);
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(limit, 1));
                        await reply(`LIMIT ANDA ${limitCounts}`)
                    }
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝑆𝑂 𝐹𝑂𝑇𝑂𝑆 𝐼𝑅𝑀𝐴𝑂')
					}
					await limitAdd(sender) 
					break 
					 case 'trigger':
					if (!isUser) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await denz.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                denz.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('𝐹𝐴𝑍 𝐹𝐴𝑉𝑂𝑅 𝐸́ 𝑈𝑆𝐴 𝑈𝑀𝐴 𝐹𝑂𝑇𝑂!')
                                          }
                                             break

				case 'img2url':
			if (!isUser) return reply(mess.only.userB)
							
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  denz.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                .then(data => {
                    var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     denz.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            await limitAdd(sender) 	
            break  

                 case 'kalkulator':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				   				
				   if (isLimit(sender)) return reply(limitend(pushname2))
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    denz.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'dono':
                 denz.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 denz.sendMessage(from, '',text, { quoted: mek} )
                 break
                 case 'coowner':
                 denz.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
                 denz.sendMessage(from, '𝐸𝑆𝑆𝐸 𝐸́ 𝑀𝐸𝑈 𝐷𝑂𝑁𝑂 !',text, { quoted: mek} )
                 break
                case 'fitnah':
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
           				
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("/")[0];
					var target = gh.split("/")[1];
					var bot = gh.split("/")[2];
					denz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break

				case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
				if (isBanned) return reply(mess.only.benned)  
				 				
				if (!isUser) return reply(mess.only.userB)
                denz.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await denz.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(mess.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        denz.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
				case 'trendtwit':
					denz.updatePresence(from, Presence.composing) 
                     if (!isUser) return reply(mess.only.userB)
               				
                     if (isLimit(sender)) return reply(limitend(pushname2))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					reply(mess.wait)
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'testime':
					setTimeout( () => {
					denz.sendMessage(from, 'Waktu habis:v', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '5 Detik lagi', text, {quoted: mek}) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '10 Detik lagi', text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case 'neonime':
					denz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
                    if (!isUser) return reply(mess.only.userB)
              				
                    if (isLimit(sender)) return reply(limitend(pushname2))
                    if (isBanned) return reply(mess.only.benned)
                    if (!isGroup) return reply(mess.only.group)
                    reply(mess.wait)
					teks = '#############################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break   
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
                   if (!isUser) return reply(mess.only.userB)
             				
                   if (isLimit(sender)) return reply(limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'linkgroup':
				case 'linkgp':
				case 'linkgc':
				case 'gruplink':
				case 'grouplink':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await denz.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Grupo *${groupName}*`
				    denz.sendMessage(from, yeh, text, {quoted: mek})
			        break
				case 'hidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(9)
					var group = await denz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					denz.sendMessage(from, options, text)
					break
					case 'gantengcek':
				case 'cekganteng':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					denz.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
				case 'cantikcek':
				case 'cekcantik':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya KakaðŸ‘','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai CantikðŸŠ','70% Hai UkhtyðŸŠ','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum UkhtyðŸŠ','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih SemangatðŸŠ']
					const tik = can[Math.floor(Math.random() * can.length)]
					denz.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
				  case 'ownergrup':
				  case 'ownergroup':
               denz.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           denz.sendMessage(from, options, text, { quoted: mek } )
				break
				case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await denz.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                denz.groupUpdateSubject(from, `${body.slice(9)}`)
                denz.sendMessage(from, `\`\`\`âœ“Alteracao Do Nome Do Grupo Para\`\`\` *${body.slice(9)}*`, text, {quoted: mek})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                denz.groupUpdateDescription(from, `${body.slice(9)}`)
                denz.sendMessage(from, `\`\`\`âœ“Alteracao Da Descricao Do Grupo Com Sucesso\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, {quoted: mek})
                break
				case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return denz.sendMessage(from, `Qual Codigo De Idioma, Mano?\n Se Voce Nao Sabe Codigo Do Idioma, Basta Digitar *${prefix}bahasa*`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return denz.sendMessage(from, 'Cadê o texto, mano?', text, {quoted: mek})
					dtt = body.slice(5)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('O texto é demais mano')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Falhou jovem:(')
							reply(mess.wait)
							denz.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender) 
					break  
				case 'translate':
				case 'translete':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return denz.sendMessage(from, 'Kode Bahasanya???', text, {quoted: mek})
				    if (args.length < 2) return denz.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: mek})
				    ts = body.slice(11)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(mess.wait)
				    translate = `Text Asli: *${body.slice(11)}*\n\nHasil: *${anu.text}*`
				    denz.sendMessage(from, translate, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'ts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return denz.sendMessage(from, 'Kode Bahasanya???', text, {quoted: mek})
				    if (args.length < 2) return denz.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: mek})
				    ts = body.slice(4)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(mess.wait)
				    ts = `Text Asli: *${body.slice(7)}*\n\nHasil: *${anu.text}*`
				    denz.sendMessage(from, ts, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'setpp':
	            if (isBanned) return reply(mess.only.benned)    
	            if (!isUser) return reply(mess.only.userB)
	      				
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await denz.downloadAndSaveMediaMessage(mek)
                    await denz.updateProfilePicture (from, media)
                    reply(mess.wait)
                    reply(`\`\`\`âœ“Alterando Perfis De Grupo Com Sucesso\`\`\` *${groupMetadata.subject}*`)
                    break
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
					apakah = body.slice(1)
					const apakahh = ["Ya","Tidak","Ga tau"]
					const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
					denz.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break 
				case 'rate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					rate = body.slice(1)
					ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
					const te = ratee[Math.floor(Math.random() * ratee.length)]
					denz.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'', text, { quoted: mek })
					break 
				case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					denz.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break 
				case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					hobby = body.slice(1)
					hob =["Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					denz.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break 
				case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					bisakah = body.slice(1)
					const bisakahh = ["Bisa","Tidak Bisa","Ga tau"]
					const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
					denz.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break 
				case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					kapankah = body.slice(1)
					const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
					const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
					denz.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break 
				case 'truth':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, {method: 'get'})
					ttrth = `${anu.Dare}`
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					denz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender) 
					break 
				case 'dare':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
					der = `${anu.Dare}`
					totd = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					denz.sendMessage(from, totd, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender) 
					break 
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                denz.sendMessage(from, `Velocidade: ${latensi.toFixed(4)} _Segundo_`, text, { quoted: mek})
                    break
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)
          				
                if (!isUser) return reply(mess.only.userB)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tag!`,
					contextInfo: { mentionedJid: [nom] }
					}
					denz.sendMessage(from, tag, text, {quoted: mek})
					break
         case 'lirik':
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${body.slice(7)}&apikey=BotWeA`)
				thum = await getBuffer(anu.result.thumb)
				teks = `𝑀𝑈𝑆𝐼𝐶𝐴 𝐸𝑁𝐶𝑂𝑁𝑇𝑅𝐴𝐷𝐴\n\n𝑇𝐼𝑇𝑈𝐿𝑂: ${anu.result.judul}\n𝐴𝐿𝐵𝑈𝑀: ${anu.result.album}\n𝑃𝑈𝐵𝐿𝐼𝐶𝐴𝐷𝑂 𝐸𝑀: ${anu.result.dipublikasi}\n*𝑃𝐿𝐸𝑇𝑅𝐴 𝐷𝐴 𝑀𝑈𝑆𝐼𝐶𝐴 : ${anu.result.lirik}`
				denz.sendMessage(from, thum, image, { quoted : mek, caption: teks })
				break
                case 'repkskskskxxkxnxnznort':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`Yang mau direport apaan? Contoh: #report fitur #hentai error`)
          				
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return denz.sendMessage(from, '𝑇𝐸𝑋𝑇𝑂 𝑀𝑈𝐼𝑇𝑂 𝐿𝑂𝑁𝐺𝑂 𝑀𝐴𝑋𝐼𝑀𝑂 300 𝐶𝐴𝑅𝐴𝐶𝑇𝐸𝑅𝐸𝑆', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    denz.sendMessage('19999516507@s.whatsapp.net', options, text, {quoted: mek})
                    reply('𝑂𝑆 𝑃𝑅𝑂𝐵𝐿𝐸𝑀𝐴𝑆 𝐹𝑂𝑅𝐴𝑀 𝑅𝐸𝐿𝐴𝑇𝐴𝐷𝑂𝑆 𝑃𝐴𝑅𝐴 𝑂 𝐷𝑂𝑁𝑂 𝐷𝑂 𝐵𝑂𝑇, 𝑅𝐸𝐿𝐴𝑇𝑂𝑆 𝐹𝐴𝐿𝑆𝑂𝑆 𝑁 𝑆𝐸𝑅𝐴𝑀 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐼𝐷𝑂𝑆 ')
                    break
                case 'reqjdjdjdjxuest':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`Mau request apa? Contoh: #request fitur anime`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return denz.sendMessage(from, '𝑇𝐸𝑋𝑅𝑂 𝑀𝑈𝐼𝑇𝑂 𝐿𝑂𝑁𝐺𝑂 𝑀𝐴𝑋𝐼𝑀𝑂 300 𝐶𝐴𝑅𝐴𝐶𝑇𝐸𝑅𝐸𝑆', text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    denz.sendMessage('19999516507@s.whatsapp.net', options, text, {quoted: mek})
                    reply('𝑂𝑆 𝑃𝑅𝑂𝐵𝐿𝐸𝑀𝐴𝑆 𝐹𝑂𝑅𝐴𝑀 𝑅𝐸𝐿𝐴𝑇𝐴𝐷𝑂𝑆 𝑃𝐴𝑅𝐴 𝑂 𝐷𝑂𝑁𝑂 𝐷𝑂 𝐵𝑂𝑇, 𝑅𝐸𝐿𝐴𝑇𝑂𝑆 𝐹𝐴𝐿𝑆𝑂𝑆 𝑁𝐴𝑂 𝑆𝐸𝑅𝐴𝑀 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐼𝐷𝑂𝑆')
                    break
				case 'memeindo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					denz.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
				case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('𝐶𝐴𝐷𝐸 𝑂 𝑈𝑅𝐿 ?')
					teks = `${body.slice(7)}`
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=tablet&url=${teks}&apiKey=${BarBarApi}`)
					ssweb = await getBuffer(anu.result)
					denz.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 
					case 'neko':
if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
denz.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
denz.sendMessage(from, pok, image, {
  quoted: mek, caption: `*Neko*`
})
await limitAdd(sender)
} catch {
  reply(mess.wait)
}
break
					case 'loli':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
                    reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LOLI`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					denz.sendMessage(from, nye, image, { caption: '*Loli*', quoted: mek })
					await limitAdd(sender)
					break
					case 'wibu':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                  data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VthearApi}`)
						buffer = await getBuffer(data.result.foto)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
					case 'nsfwloli':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' 𝑁𝑆𝐹𝑊 𝑂𝐹𝐹 ')
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, {method: 'get'})
						buffer = await getBuffer(res.result.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: '𝑁𝐴𝑂 𝑆𝐸𝐼 𝐴 𝑇𝑅𝐴𝐷𝑈𝐶𝐴𝑂 𝐴𝐾𝐴𝐾𝐾'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' 𝐸𝑅𝑅𝑂𝑅 ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwblowjob':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' 𝑁𝑆𝐹𝑊 𝑂𝐹𝐹 ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝐸𝑅𝑅𝑂𝑅')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwneko':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply('𝑁𝑆𝐹𝑊 𝑂𝐹𝐹')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' 𝐸𝑅𝑅𝑂𝑅 ')
					}
					await limitAdd(sender) 
					break 
				case 'nsfwtrap':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' 𝑁𝑆𝐹𝑊 𝑂𝐹𝐹 ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' 𝐸𝑅𝑅𝑂𝑅 ')
					}
					await limitAdd(sender) 
					break 
					case 'hentai':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' 𝑁𝑆𝐹𝑊 𝑂𝐹𝐹 ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' 𝐸𝑅𝑅𝑂𝑅 ')
					}
					await limitAdd(sender) 
					break 
				case 'hilih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('𝐶𝐴𝐷𝐸 𝑂 𝑇𝐸𝑋𝑇𝑂 ?')
					anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('𝑇𝑅𝐴𝐷𝑈𝐶̧𝐴̃𝑂 𝑁𝐴̃𝑂 𝐸𝑁𝐶𝑂𝑁𝑇𝑅𝐴𝐷𝐴')
					tels = body.slice(7)
					anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
               case 'infogempa':
               if (isBanned) return reply(mess.only.benned)    
               if (!isUser) return reply(mess.only.userB)
         				
               if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.map)
                   reply(mess.wait)
                   gempa = `•Lokasi *${anu.lokasi}*\n• Waktu: *${anu.waktu}* \n• Potensi: *${anu.potensi}*\n• Magnitude: *${anu.magnitude}*\n• Kedalaman: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`
                   denz.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
                   await limitAdd(sender) 
                   break 
                case 'kucing':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					buff = await getBuffer(anu.result.url)
					denz.sendMessage(from, buff, image, { quoted: mek , caption: '𝑀𝐼𝐴𝑈🐈'})
					await limitAdd(sender) 
					break 


// only grup fitur anime
              case 'anime':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					reply(mess.wait)
					pok = await getBuffer(anu.result)
					denz.sendMessage(from, pok, image, { quoted: mek , caption: '𝑃𝑅𝑂𝑁𝑇𝐼𝑁𝐻𝑂'})
					await limitAdd(sender) 
					break  
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					denz.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					denz.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					denz.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					denz.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					denz.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					denz.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 

				case 'kaneki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					denz.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					denz.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					denz.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					denz.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					denz.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					denz.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
				if (isBanned) return reply(mess.only.benned)
								
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' 𝐷𝐸𝑉𝐸 𝐴𝑇𝐼𝑉𝐴 𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					denz.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
// akhir fitur anime

				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					denz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender) 
					break 
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(mess.wait)
                   anu = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(14)}`, {method: 'get'})
                   masak = '==============================\n'
                   for (let msk of anu.results){
                   masak += `• *Title:* ${msk.title}\n• *• *Durasi Masak Sekitar:* ${msk.times}\n• *Porsi:* ${msk.serving}\n• *Tingkat Kesulitan:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`
                    }
                   reply(masak.trim())
                   await limitAdd(sender) 
                   break 
               case 'cersex':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (mess.wait)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   denz.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
              case 'randomkpop':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result)
                   denz.sendMessage(from, buff, image, {quoted: mek})
                   break 
               case 'puisiimg':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   denz.sendMessage(from, pus, image, {quoted: mek})
                   break 
                  case 'playstore':
                  if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
               case 'pornhub':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('𝐶𝐴𝐷𝐸 𝑂 𝑇𝐸𝑋𝑇𝑂 ?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let p of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'nekopoi':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('𝐶𝐴𝐷𝐸 𝑂 𝑇𝐸𝑋𝑇𝑂?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'xvideos':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('𝐶𝐴𝐷𝐸𝑁𝑂 𝑇𝐸𝑋𝑇𝑂?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 

				case 'fb':
				  denz.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					denz.sendMessage(from, '[ WAIT ] 𝑃𝐴𝑅𝐴 𝑂 𝑃𝑅𝑂𝐶𝐸𝑆𝑆𝐴𝑀𝐸𝑁𝑇𝑂\n\n𝐴𝑃𝐸𝑁𝐴𝑆 𝐿𝐼𝑁𝐾 𝐷𝑂 𝐺𝑂𝑂𝐺𝐿𝐸 𝑃𝐴𝑅𝐴 𝑄𝑈𝐸 𝑃𝑂𝑆𝑆𝐴 𝑆𝐸𝑅 𝐵𝐴𝐼𝑋𝐴𝐷𝑂', text, {quoted: mek})
					efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					denz.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					denz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
			case 'instaimg':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    denz.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('𝐸𝑅𝑅𝑂𝑅!')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'instavid':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    denz.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
			case 'instastory':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (args.length < 1) return reply('𝑁𝐼𝐶𝐾??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://api.vhtear.com/igstory?query=${instor}&apikey=${VthearApi}`, {method: 'get'})
				insta = '=========================\n'
				for (let i of anu.result.story.itemlist) {
				insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
			case 'hekerbucin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				hasil = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
				denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 

				case 'ytsearch':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('𝑇𝐴 𝑃𝑅𝑂𝐶𝑈𝑅𝐴𝑁𝐷𝑂 𝑂𝑄𝑈𝐸 𝐶𝐴𝑅𝐴𝐼 ? 𝑃𝐼𝐶𝐴 ?')
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
					
				case 'film':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('𝑄𝑈𝐴𝐿 𝐹𝐼𝐿𝑀𝐸 𝑃𝑅𝐸𝐶𝐼𝑆𝑂 𝐸𝑁𝐶𝑂𝑁𝑇𝑅𝐴?')
				reply(mess.wait)
				anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Titulo:* ${film.Title}\n• *Ano Lancamento:* ${film.Year}\n• *Modelo:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
				await limitAdd(sender) 
					break 
					case 'tiktok':
					case 'tiktoknowm': 
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('𝐶𝐴𝐷𝐸 𝑂 𝑈𝑅𝐿 𝑉𝐼𝐴𝐷𝑂?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    denz.sendMessage(from, buffer, video, )
				    break
				case 'tiktokstalk':
					try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return denz.sendMessage(from, '𝑄𝑈𝐴𝐿 𝐹𝑂𝐼 𝑉𝐼𝐴𝐷𝑂 𝐶𝐴𝐷𝐸 𝑂 𝑁𝑂𝑀𝐸 𝐷𝐸 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 ?', text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(mess.wait)
					teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					denz.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('𝑁𝑂𝑀𝐸 𝐷𝐸 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐼𝑁𝑉𝐴𝐿𝐼𝐷𝑂')
					}
					await limitAdd(sender) 
					break  
//creator
				case 'nulis':
				case 'tulis':
				  denz.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply(mess.wait)
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					denz.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'nulis2':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				ct = body.slice(8)
				reply(mess.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=WEMPYGANSS&text=${ct}`)
				denz.sendMessage(from, ct, image, {caption: '𝑃𝑅𝑂𝑇𝐼𝑁𝐻𝑂 𝑆𝐸𝑈 𝑉𝑂𝑅𝑁𝑂', quoted: mek})
				await limitAdd(sender)
				break
				case 'slide':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('𝐶𝐴𝐷𝐸 𝑂 𝑇𝐸𝑋𝑂 𝑀𝐴𝑁𝑂 ')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					denz.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
					 case 'quotemaker':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			    				
					gh = `${body.slice(12)}`
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					denz.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break 

//akhir kreator
			    case 'jarak':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    jarak = `${body.slice(7)}`
			    ja = jarak.split("/")[0];
			    rak = jarak.split("/")[1];
			    anu = await fetchJson(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, {method: 'get'})
			    denz.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			    await limitAdd(sender) 
			    break  
			    case 'infoalamat':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        denz.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			    case 'tinyurl':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
			    case 'infonomor':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        infonomor = `*nomor* \n${anu.nomor} *international* \n${anu.international}`
			        reply(infonomor)
			        await limitAdd(sender) 
			        break 
			   case 'igstalk':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   									
   					if (isLimit(sender)) return reply(limitend(pushname2))
                        anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.picture)
                     reply(mess.wait)
                     hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Jumlah Postingan: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`
                    denz.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender) 
                    break 
			    case 'mimpi':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			    				
			    reply(mess.wait)
			        anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result.hasil}`
			        denz.sendMessage(from, mimpi, text, {quoted: mek})
			        await limitAdd(sender) 
			       	break 
				case 'quotes':
				denz.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./Fxc7/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 denz.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
					break 
				case 'fakta':
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
					fakta = `Faktanya: *${anu.result}*`
					denz.sendMessage(from, fakta, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'katabijak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					denz.sendMessage(from, katabijak, text, {quoted: mek})
					await limitAdd(sender) 
					break 

			case 'profiltiktok':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
              denz.sendMessage(from, tiktok, image, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			case 'closetime': 
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              denz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `𝐻𝑂𝑅𝐴 𝑄𝑈𝐸 𝑂 𝐺𝑅𝑈𝑃𝑂 𝐹𝑂𝐼 𝐹𝐸𝑋𝐴𝐷𝑂 𝑃𝐸𝐿𝑂 𝐴𝐷𝑀 @${nomor.split("@s.whatsapp.net")[0]}\n𝐶𝐴𝐿𝐴𝐷𝑂𝑆 𝑆𝐸𝑅𝑉𝑂𝑆 𝐴𝑃𝐸𝑁𝐴𝑆 𝑂𝑆 𝑅𝐸𝐼𝑆 𝑃𝑂𝐷𝐸𝑀 𝐹𝐴𝐿𝐴𝑅`,
					contextInfo: { mentionedJid: [nomor] }
					}
					denz.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'opentime': 
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              denz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: ` 𝐺𝑅𝑈𝑃𝑂 𝐴𝐵𝐸𝑅𝑇𝑂 𝑃𝐸𝐿𝑂 𝐴𝐷𝑀@${nomor.split("@s.whatsapp.net")[0]}\n𝐴𝐹𝐹 𝐴𝐺𝑅 𝑂𝑆 𝐸𝑆𝐶𝑅𝐴𝑉𝑂𝑆 𝑃𝑂𝐷𝐸𝑀 𝐹𝐴𝐿𝐴𝑅 😒`,
					contextInfo: { mentionedJid: [nomor] }
					}
					denz.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				case 'darkjokes':
				denz.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./Fxc7/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 denz.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				await limitAdd(sender) 
				break  
			case 'katailham':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 
				case 'addsticker':
				if (!isOwner) return reply(mess.only.ownerB)
			    if (!isQuotedSticker) return reply('𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴 𝐹𝐼𝐺𝑈𝑅𝐼𝑁𝐻𝐴')
				svst = body.slice(12)
				if (!svst) return reply('𝑄𝑈𝐴𝐿 𝑂 𝑁𝑂𝑀𝐸 𝐷𝐴 𝐹𝐼𝐺𝑈𝑅𝐼𝑁𝐻𝐴 ?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await denz.downloadMediaMessage(boij)
				fs.writeFileSync(`./sticker/${svst}.webp`, delb)
				denz.sendMessage(from, `Berhasil menyimpan sticker!`, MessageType.text, { quoted: mek })
				break
				case 'addaudio':
                   if (!isOwner) return reply(mess.only.ownerB)
                   if (!isQuotedAudio) return reply('𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐸𝑅 𝐴𝑈𝐷𝐼𝑂 𝑁𝑂𝑉𝑂 𝑂𝑁')
                   gsh = body.slice(10)
                   if (!gsh) return reply('𝑄𝑈𝐴𝐿 𝑂 𝑁𝑂!𝐸 𝐷𝑂𝑁𝐴𝑅𝑄𝑈𝐼𝑉𝑂?')
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                   gx = await denz.downloadMediaMessage(uyw)
                   fs.writeFileSync(`./mp3/${gsh}.mp3`, gx)
                    reply('𝐴𝑈𝐷𝐼𝑂 𝑆𝐴𝐿𝑉𝑂 𝐶𝑂𝑀 𝑆𝑈𝑆𝐸𝑆𝑂𝑅!')
                     break
                     case 'katacinta':	
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
				
			case 'pasangan':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${VthearApi}`, {method: 'get'})
				denz.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
			await limitAdd(sender) 
			break 

			case 'persengay':
			case 'gaypersen':
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah GayðŸ¤¦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*HatiÂ² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur GanðŸƒðŸŒ¬ï¸*","83%\n\n Yaallah NakðŸ¤¦","97%\n\nAstagfirullahðŸ¤¦","100%\n\nKabur ae Gan Daripada Ditusbol Bool luðŸƒ","29%\n\n amann:v","94%\n\n YaallahðŸƒ","75%\n\nHadehh GayðŸ¤¦","82%\n\nMending Lu Tobat DahðŸƒ","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool TopanðŸƒ"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				denz.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  

			case 'pbucin':
			case 'persenbucin':
			case 'bucinpersen':
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nHadehhðŸ¤¦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n HadehhhðŸƒ","74%\n\n bucen Teroosss","83%\n\n SekaliÂ² kek Ga bucin Gitu","97%\n\nHadehh PakboiÂ²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				denz.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
		    case 'map':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  if (args.length < 1) return reply('𝐼𝑁𝑆𝐼𝑅𝐴 𝑂 𝑁𝑂𝑀𝐸 𝐷𝑂 𝐿𝑂𝐶𝐴𝐿')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
  denz.sendMessage(from, hasil, image, {
quoted: mek, caption: `Hasil Dari *${daerah}*`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
				case 'url2img':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('𝑄𝑈𝐴𝐿 𝑇𝐼𝑃𝑂 𝐸𝑀 𝑉𝐼𝐴𝐷𝑂 ?')
					if (!tipelist.includes(args[0])) return reply('𝐷𝐸𝑆𝐾𝑇𝑂𝑃|𝑇𝐴𝐵𝐿𝐸𝑇|𝐶𝐸𝐿𝐿')
					if (args.length < 2) return reply('Urlnya mana gan?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					url2img = await getBuffer(anu.result)
					denz.sendMessage(from, url2img, image, {quoted: mek})
					await limitAdd(sender)
					break 
			    case 'marcartodos':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(` 𝐶𝐻𝐴𝑀𝐴𝑁𝐷𝑂 𝑇𝑂𝐷𝑂𝑆 𝑂𝑆 𝐺𝐴𝐷𝑂𝑆 *${pushname2}* `+ teks +'╚═══〘 𝐵𝑂𝑇 𝑂𝑃𝑅𝐸𝑆𝑆𝑂𝑅〙═══', members_id, true)
					break
			    case 'mentionall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘  *${body.slice(12)}*  〙✪══`+teks+'╚═〘 𝐵𝑂𝑇 𝑂𝑃𝑅𝐸𝑆𝑆𝑂𝑅 〙', members_id, true)
					break
			    case 'kbbi':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
					if (args.length < 1) return reply('𝑌?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break 
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Grupo Aberto Com Sucesso\`\`\` *${groupMetadata.subject}*`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sucesso No Fechamento do Grupo\`\`\` *${groupMetadata.subject}*`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('𝑇𝐴 𝑃𝑅𝑂𝐶𝑈𝑅𝐴𝑁𝐷𝑂 𝑂𝑄𝑈𝐸 𝑀𝐸𝑁𝑂 ?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					denz.sendMessage(from, anu.result, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'clearall':
					if (!isOwner) return reply('𝑆𝐸 𝑈𝑆𝐴𝑅 𝐸𝑆𝑆𝐸 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝑁𝑂𝑉𝐴𝑀𝐸𝑁𝑇𝐸 𝐸𝑈 𝑉𝑂𝑈 𝐶𝑂𝑀𝐸 𝑆𝐸𝑈 𝐶𝑈́')
					anu = await denz.chats.all()
					denz.setMaxListeners(25)
					for (let _ of anu) {
						denz.deleteChat(_.jid)
					}
					reply(`\`\`\`𝑇𝑂𝐷𝑂𝑆 𝑂𝑆 𝐴𝑆 𝐶𝑂𝑁𝑉𝐸𝑆𝐴𝑆 𝐸𝑋𝐶𝐿𝑈𝐼𝐷𝐴𝑆 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂 \`\`\``)
					break
                                case 'bcgc':
					denz.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bcgc = await denz.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							denz.sendMessage(_.jid, bcgc, image, {caption: ` 𝑇𝑅𝐴𝑁𝑀𝐼𝑇𝐼𝑁𝐷𝑂 𝐸𝑀 𝐺𝑅𝑈𝑃𝑂 \n 𝐺𝑅𝑈𝑃𝑂 : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `𝑇𝑅𝐴𝑁𝑆𝑀𝐼𝑇𝐼𝑁𝐷𝑂 𝐸𝑀 𝐺𝑅𝑈𝑃𝑂\n𝐺𝑅𝑈𝑃𝑂: ${groupName}\n\n${body.slice(6)}`)
						}
						reply('𝑇𝑅𝐴𝑀𝐼𝑆𝑆𝐴̃𝑂 𝐸𝑀 𝐺𝑅𝑈𝑃𝑂 𝐶𝑂𝑀𝐶𝐿𝑈𝐼𝐷𝐴')
					}
					break
				case 'bc':
					if (!isOwner) return reply('𝑆𝐸 𝑈𝑆𝐴 𝐸𝑆𝑆𝐸 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝑁𝑂𝑉𝐴𝑀𝐸𝑁𝑇𝐸 𝐸𝑈 𝑉𝑂𝑈 𝐶𝑂𝑀𝐸 𝑆𝐸𝑈 𝐶𝑈')
					if (args.length < 1) return reply('.......')
					anu = await denz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, bc, image, {caption: ` 𝑇𝑅𝐴𝑀𝐼𝑇𝐼𝑁𝐷𝑂 \n\n${body.slice(4)}`})
						}
						denz.sendMessage(_.jid, bc, image, {caption: ` 𝑇𝑅𝐴𝑀𝐼𝑇𝐼𝑁𝐷𝑂\n\n${body.slice(4)}`})
						reply('𝑇𝑅𝐴𝑀𝐼𝑆𝑆𝐴̃𝑂 𝐶𝑂𝑁𝐶𝐿𝑈𝐼𝐷𝐴')
						} else {
						for (let _ of anu) {
							sendMess(_.jid, `𝑇𝑅𝐴𝑁𝑆𝑀𝐼𝑇𝐼𝑁𝐷𝑂 \n\n${body.slice(4)}`)
						}
						reply('𝑇')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('𝑄𝑈𝐸𝑀 𝑃𝑅𝐸𝐶𝐼𝑆𝐴 𝐴𝐷𝐼𝐶𝐼𝑂𝑁𝐴𝑅 ???')
					if (args[0].startsWith('08')) return reply('𝑈𝑆𝐸 𝑂 𝐶𝑂𝐷𝐼𝐺𝑂 𝐷𝑂 𝑃𝐴𝐼𝑆')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						denz.groupAdd(from, [num])
					} catch (e) {
						console.log('𝐸𝑅𝑅𝑂𝑅:', e)
						reply('𝐹𝐴𝐿𝐻𝐴 𝐴𝑂 𝐴𝐷𝐼𝐶𝐼𝑂𝑁𝐴𝑅 !')
					}
					break
			    case 'remover':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '𝑆𝐸𝑈 𝑃𝐸𝐷𝐼𝐷𝑂 𝐸 𝑈𝑀𝐴 𝑂𝑅𝐷𝐸𝑀 𝑆𝑊𝑁𝐻𝑂𝑅  :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupRemove(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, emitidos removido por nao seguir as regras : @${mentioned[0].split('@')[0]}`, mentioned, true)
						denz.groupRemove(from, mentioned)
					}
					break 
				case 'kicktime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					denz.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('𝑆𝑈𝐶𝐸𝑆𝑆𝑂 🔥')
					}, 7000)
					setTimeout( () => {
					denz.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					denz.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					denz.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('𝑃𝐸𝐷𝐼𝐷𝑂𝑆 𝑅𝐸𝐶𝐸𝐵𝐼𝐷𝑂𝑆')
					}, 0)
					break
				case 'promote':
				case 'pm':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '𝑀𝐴𝐼𝑆 𝑈𝑀 𝐴𝐷𝑀 𝐸𝑆𝑆𝐸 𝑀𝐴𝑀𝑂𝑈 𝐺𝑂𝑆𝑇𝑂𝑆𝑂 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝑀𝐴𝐼𝑆 𝑈𝑀 𝐴𝐷𝑀, @${mentioned[0].split('@')[0]} 𝐸𝑆𝑆𝐸 𝑀𝐴𝑀𝑂𝑈 𝐺𝑂𝑆𝑇𝑂𝑆𝑂 *${groupMetadata.subject}*`, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
			    case 'demote':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝑄𝑈𝐸𝑀 𝑉𝐶 𝐷𝐸𝑆𝐸𝐽𝐴 𝑄𝑈𝐸 𝑁𝐴𝑂 𝑆𝐸𝐽𝐴 𝑀𝐴𝐼𝑆 𝑈𝑀 𝐴𝐷𝑀? ')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '𝐸𝑆𝑆𝐸 𝐶𝐴𝑅𝐴 𝑁𝐴𝑂 𝐶𝑂𝐿𝐴 𝑀𝐴𝐼𝑆 𝑁𝐴 𝐵𝐴𝑁𝐶𝐴 𝑃𝑂𝐷𝐸 𝐿𝐼𝑋𝐴𝑅:\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝐸𝑆𝑆𝐸 𝐶𝐴𝑅𝐴 𝑁 𝐶𝑂𝐿𝐴 𝑀𝐴𝐼𝑆 𝑁𝐴 𝐵𝐴𝑁𝐶𝐴: @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					teks = `𝐿𝐼𝑆𝑇𝐴 𝐷𝐸 𝑅𝐸𝐼𝑆 𝐷𝐸𝑆𝑆𝐸 𝐺𝑅𝑈𝑃𝑂  *${groupMetadata.subject}*\n𝑇𝑂𝑇𝐴𝐿 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝑂𝑁 𝐸́ 𝑂𝐹𝐹 𝑃𝐴𝑅𝐴 𝐴𝑇𝐼𝑉𝐴 𝐽𝑈𝑀𝐸𝑁𝑇𝑂')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('𝑀𝑂𝐷𝑂 𝐼𝑁𝑇𝐸𝐿𝐼𝐺𝐸𝑁𝐶𝐼𝐴 𝐴𝑅𝑇𝐼𝐹𝐼𝐶𝐼𝐴𝐿 𝐴𝑇𝐼𝑉𝑂')
						samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`𝐷𝐸𝑆𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('𝑂𝑁 𝐸́ 𝑂𝐹𝐹 ')
					}
					break
			    case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝑂𝑁 𝐸́ 𝑂𝐹𝐹 𝑃𝐴𝑅𝐴 𝐴𝑇𝐼𝑉𝐴 ')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('𝑀𝑂𝐷𝑂 𝑁𝑆𝐹𝑊 𝐴𝑇𝐼𝑉𝑂 ')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓“𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅 \`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓“𝐷𝐸𝑆𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅 \`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('𝑂𝑁 𝐸́ 𝑂𝐹𝐹 ')
					}
					break
				case 'modeanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝑂𝑁 𝐸́ 𝑂𝐹𝐹 𝑃𝐴𝑅𝐴 𝐴𝑇𝐼𝑉𝐴')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('𝑂 𝑀𝑂𝐷𝑂 𝐴𝑁𝐼𝑀𝐸 𝐽𝐴 𝑇𝐴 𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝑂𝑇𝐴𝐾𝑈 𝐹𝐼𝐿𝐻𝐴 𝐷𝐴 𝑃𝑈𝑇𝐴')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓“𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓ 𝐷𝐸𝑆𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('𝑂𝑁 𝐸́ 𝑂𝐹𝐹 ')
					}
					break
				case 'bemvindo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝑂𝑁 𝐸́ 𝑂𝐹𝐹 ')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('𝑃𝑅𝐸𝑆𝑇𝐴 𝐴𝑇𝐸𝑁𝐶̧𝐴𝑂 𝐿𝐸𝑍𝐴𝐷𝑂 𝐽𝐴 𝐸𝑆𝑇𝐴 𝐴𝑇𝐼𝑉𝑂')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“𝐷𝐸𝑆𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓ 𝐷𝐸𝑆𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('𝑂𝑁 𝐸 𝑂𝐹𝐹')
					}
					break 
				case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('modelo #antilink para ativar')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('𝑃𝑅𝐸𝑆𝑇𝐴 𝐴𝑇𝐸𝑁𝐶𝐴𝑂 𝐿𝐸𝑍𝐴𝐷𝑂 𝐽𝐴 𝐸𝑆𝑇𝐴 𝐴𝑇𝐼𝑉𝑂')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('𝐴𝑁𝑇𝐼𝐿𝐼𝐾 𝑂𝐹𝐹')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“𝐷𝐸𝑆𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('𝑂𝑁 𝐸́ 𝐹𝐹 ')
					}
					break
				case 'antipalavrao':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('𝑂𝑁 𝐸 𝑂𝐹𝐹')
                if (args[0] === 'on') {
                if (isBadWord) return reply('𝑃𝑅𝐸𝑆𝑇𝐴 𝐴𝑇𝐸𝑁𝐶̧𝐴𝑂 𝐿𝐸𝑆𝐴𝐷𝑂 𝐽𝐴 𝐸𝑆𝑇𝐴 𝐴𝑇𝐼𝑉𝑂')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	   reply(`\`\`\`✓“𝐴𝑇𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
              	  } else if (args[0] === 'off') {
                    	if (!isBadWord) return reply('𝐴𝑁𝑇𝐼𝑃𝐴𝐿𝐴𝑉𝑅𝐴𝑂 𝑂𝐹𝐹')
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	    reply(`\`\`\`✓“𝐷𝐸𝑆𝐴??𝐼𝑉𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅\`\`\` *${groupMetadata.subject}*`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    case 'do':
                    if (!isOwner) return reply(mess.only.ownerB)
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                    case 'addpalavra':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `𝐸𝑁𝑉𝐼𝐴 𝑃𝐸𝐷𝐼𝐷𝑂𝑆 ${prefix}𝐴𝐷𝐷𝑃𝐴𝐿𝐴𝑉𝑅𝐴 [𝑋𝐼𝑁𝐺𝐴𝑀𝐸𝑁𝑇𝑂𝑆]. 𝐸𝑋𝐸𝑀𝑃𝐿𝑂${prefix}𝐴𝐷𝐷𝑃𝐴𝐿𝐴𝑉𝑅𝐴 𝐶𝑈𝑍𝐴̃𝑂`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅 𝐸𝑀 𝐴𝐷𝐼𝐶𝐼𝑂𝑁𝐴𝑅 𝑃𝐴𝐿𝐴𝑉𝑅𝐴𝑂!')
                    break
                case 'delpalavra':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `𝐸𝑁𝑉𝐼𝐴 𝑃𝐸𝐷𝐼𝐷𝑂 ${prefix}𝐷𝐸𝐿𝑃𝐴𝐿𝐴𝑉𝑅𝐴[𝐷𝐸𝐿𝐸𝑇𝐴𝑅 𝑃𝐴𝐿𝐴𝑉𝑅𝐴𝑂]. 𝐸𝑋𝐸𝑀𝑃𝐿𝑂 ${prefix}𝐷𝐸𝐿𝑃𝐴𝐿𝐴𝑉𝑅𝐴 𝐶𝑈𝑍𝐴𝑂`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('𝑃𝐴𝐿𝐴𝑉𝑅𝐴𝑂𝑁𝐸𝑋𝐶𝐿𝑈𝐼𝐷𝑂')
                    break 
                case 'listpalavra':
                    let lbw = `𝑃𝐴𝐿𝐴𝑉𝑅𝐴𝑆 𝑃𝑅𝑂𝐼𝐵𝐼𝐷𝐴𝑆\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					denz.sendMessage(from, '𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 '+anu.result.jawaban+ '\n\n• 𝐸𝑋𝑃𝐿𝐼𝐶𝐴𝐶̧𝐴𝑂'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					denz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					denz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'lukeasjdjdep':
				denz.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isNsfw) return reply(' *NSFW OF* ')
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./Fxc7/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 denz.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break

				case 'clone':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(' 𝑇𝐴𝐺 𝐷𝑂 𝐴𝐿𝑉𝑂 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐽𝐴 𝐶𝐿𝑂𝑁𝐴')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await denz.getProfilePicture(id)
						buffer = await getBuffer(pp)
						denz.updateProfilePicture(botNumber, buffer)
						mentions(`𝐹𝑂𝑇𝑂 𝐷𝐸 𝑃𝐸𝑅𝐹𝐼𝐿 𝐴𝑇𝑈𝐴𝐿𝐼𝑍𝐴𝐷𝐴 𝑃𝐴𝑅𝐴 𝑈𝑆𝐴𝑅 𝐴 𝐷𝐸𝑆𝑆𝐸 𝑁𝑈𝑀𝐸𝑅𝑂 @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('𝐹𝑅𝐴𝐶𝐴𝑆𝑆𝐴𝐷𝑂 𝑂𝑁')
					}
					break
//setting bot
				case 'setprefix':
				case 'setpref':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`𝑃𝑅𝐸𝐹𝐼𝑋 𝐶𝑂𝑁𝑉𝐸𝑅𝑇𝐼𝐷𝑂 : ${prefix}`)
					break 
					case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(` 𝑂 𝐿𝐼𝑀𝐼𝑇𝐸 𝐹𝑂𝐼 𝐴𝑙𝑇𝐸𝑅𝐴𝐷𝑂 𝑃𝐴𝑅𝐴 : ${limitt}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberLimit = args[0]
					reply(`𝑂 𝐿𝐼𝑀𝐼𝑇𝐸 𝐷𝐸 𝑀𝐸𝑁𝐵𝑅𝑂𝑆 𝐹𝑂𝐼 𝐴𝐿𝑇𝐸𝑅𝐴𝐷𝑂 𝑃𝐴𝑅𝐴: ${memberLimit}`)
					break 
				case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`𝑁𝑂𝑀𝐸 𝐷𝑂 𝐵𝑂𝑇 𝐹𝑂𝐼 𝐴𝐿𝑇𝐸𝑅𝐴𝐷𝑂 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅 : ${name}`)
					break 
				case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
                    denz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					rmenu = body.slice(10)
					reply(`𝐴 𝑅𝐸𝑆𝑃𝑂𝑆𝑇𝐴 𝐹𝑂𝐼 𝐴𝐿𝑇𝐸𝑅𝐴𝐷𝐴 𝐶𝑂𝑀 𝑆𝑈𝐶𝐸𝑆𝑆𝑂𝑅 𝑃𝐴𝑅𝐴: ${rmenu}`)
				break 
////////////
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await denz.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							denz.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('𝐴𝑃𝐸𝑁𝐴𝑆 𝑈𝑀𝐴 𝐹𝑂𝑇𝑂 𝑀𝐴𝐶𝐴𝐶𝑂')
					}
					break 
					
			case 'quran':
			 if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					denz.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender) 
					break 
	case 'infocuaca':
	 if (isBanned) return reply(mess.only.benned)    
     if (!isUser) return reply(mess.only.userB)
     				
     if (isLimit(sender)) return reply(limitend(pushname2))
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             denz.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            await limitAdd(sender)
            break 

         case 'pinterest':
         if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('𝑄𝑈𝐴𝐿 𝐹𝑂𝑇𝑂 𝑉𝐶 𝑃𝑅𝑂𝐶𝑈𝑅𝐴 ???')
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					denz.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					await limitAdd(sender) 
					break 
					
		case 'jadwalsholat':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('𝐼𝑁𝑆𝐼𝑅𝐴 𝑂 𝑁𝑂𝑀𝐸 𝐷𝐴 𝐴𝑅𝐸𝐴!!')
					sholat = `${body.slice(14)}`
					anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${sholat}&apiKey=${BarBarApi}`, {method: 'get'})
					reply(mess.wait)
					if (anu.result) return reply(anu.result)
					jsol = `Jadwal sholat di *${sholat}* hari ini adalah\n\nâž¸ *Subuh :* ${anu.Subuh} WIB\n*âž¸ Dzuhur :* ${anu.Dzuhur} WIB\n*âž¸ Ashar :* ${anu.Ashar} WIB\n*âž¸ Maghrib :* ${anu.Maghrib} WIB\n*âž¸ Isya :* ${anu.Isya} WIB`
					denz.sendMessage(from, jsol, text, {quoted: mek})
					await limitAdd(sender) 
					break 
            case 'jadwaltvnow':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  denz.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
method: 'get'
  })
  reply(anu.result.jadwalTV)
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
case 'jadwaltv':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  ch = body.slice(10)
  if (args.length < 1) return reply('Masukan nama channel')
  denz.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarApi}`, {
method: 'get'
  })
  n = JSON.parse(JSON.stringify(anu.result));
  hasil = `*Jadwal Tv* : ${ch} hari ini\n${n}`
  reply(hasil)
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break

// premium user
         case 'joox':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `╭─「 *JOOX DOWNLOADER* 」\n│\n│ *• Titulo* : ${anu.result.title}\n│ *• Album* : ${anu.result.album}\n│ *• Publicados* : ${anu.result.dipublikasi}\n│\n│ *espere um momento para ser enviado*\n│ *POR FAVOR, NAO SPAM*\n╰─────────────────────`
                bufferddd = await getBuffer(anu.result.thumb)
                 reply(mess.wait)
                buff = await getBuffer(anu.result.mp3)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                denz.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break  
                
          case 'snack':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                denz.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
                
       case 'play':
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break

case 'playmp3':
                  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`O que voce esta procurando? Digite o comando certo ?`)
                data = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`, {method: 'get'})
                 reply(mess.wait)
                 infomp3 = `「 *PLAY* 」\n*Titulo* : ${data.result.title}\n*Duracao* : ${data.result.duration}\n*Tamanho Arquivo* : ${data.result.size}\n\n*[ ESPERAR ] Audio Esta Sendo Enviado....*`
                bufferddd = await getBuffer(data.result.image)
                lagu = await getBuffer(data.result.mp3)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                denz.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
                
                case 'ytmp3':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Cade o url jovem?`)
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=apivinz`)
  infomp3 = `*Audio Encontrado*\n‣ Titulo : ${anu.result.title}\n‣ Fonte : ${anu.result.source}\n‣ Tamanho : ${anu.result.size}\n\n_Mandar arquivo por favor espere_\n\n_Se o audio nao aparecer, baixe-o usando o link abaixo_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  denz.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  denz.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

case 'ytmp4':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Urlnya mana kak?`)
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=apivinz`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video Encontrado*\n‣ *Titulo* : ${anu.result.title}\n‣ *Fonte* : ${anu.result.source}\n‣ *Tamanho* : ${anu.result.size}\n\n_Enviando arquivos por favor aguarde_\n\n_Se o vídeo não aparecer, baixe-o usando o link abaixo_\n‣ *link* : ${anu.result.url_video}`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  denz.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  denz.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
 
            case 'smule':
	       if (isBanned) return reply(mess.only.benned)
	       
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`
					thumb = await getBuffer(anu.thumb)
					denz.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					denz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 	
					break 

// Akhir Fitur Premium 

case 'wiki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
                    if (args.length < 1) return reply('teks nya mana om?')
                    reply(mess.wait)
                   wiki = `${body.slice(6)}`
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=${TobzApi}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    wikii = `${anu.result}`
                    denz.sendMessage(from, wikii, text, {quoted: mek})
                   await limitAdd(sender) 
                   break  
                   
               case 'pastebin':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
                   await limitAdd(sender) 				
                   break 
		case 'bpfont':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
							
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break  
		case 'spamcall':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
							
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			denz.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'spamgmail':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			denz.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'quransurah':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			surah = `${body.slice(12)}`
			anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`)
			quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
			for (let surah of anu.quran) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
			}
			reply(quran.trim())
			await limitAdd(sender) 
			break 
			case 'quranlist':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			anu = await fetchJson(`https://api.vhtear.com/quranlist?&apikey=${VthearApi}`, {method: 'get'})
			list = ''
			for (let sur of anu){
			list = `Nomer: ${sur.list}\n`
			}
			reply(list.trim())
			break
		case 'bitly':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			link = `${body.slice(7)}`
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, {method: 'get'})
			bitly = `${anu.result}`
			denz.sendMessage(from, anu, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'textstyle':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			await limitAdd(sender) 
			break  
			case 'pantun':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
			
		case 'jamdunia':
		if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			denz.sendMessage(from, wtime, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			
		 case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
                	denz.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Responda ao vídeo, mano!*_')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha ao converter vídeo para mp3')
						bufferlkj = fs.readFileSync(ran)
						denz.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					
				case 'setppbot':
					if (!isOwner) return reply(mess.only.owner)
				    denz.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(enmedia)
					await denz.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil☺️™‚')
					break

// Fitur Defacer

				case 'dorking':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					denz.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  denz.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
// akhir encrypt & decrypt Fitur

			case 'google':
                const googleQuery = body.slice(8)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado Pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    denz.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
                
                case 'addbucin':
                    if (!isOwner) return reply(mess.only.owner)
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
						break
                    case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
                    await limitAdd(sender)
            break
            case 'beritahoax':
                     if (!isUser) return reply(mess.only.userB)
                    denz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
case 'husbu':
				if (!isUser) return reply(mess.only.userB)
				try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai Husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break
            case 'nangis':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'ngewe':
				if (!isUser) return reply(mess.only.userB)
				if (!isNsfw) return reply(' *NSFW OF* ')
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break		
					case 'moddroid':
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			denz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			denz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				default:
				if (budy.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply(`*${pushname2} 𝑉𝑂𝐶𝐸́ 𝐸 𝑈𝑀 𝐴𝐷𝑀 𝐸𝑇𝑇 𝑇𝐴 𝑆𝑈𝐴𝑉𝐸 𝐶𝑋𝑅 `)
					denz.updatePresence(from, Presence.composing)
					if (messagesLink.includes("#izinadmin")) return reply("#izinadmin *_「 ᴅɪᴛᴇʀɪᴍᴀ 」_*")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(` 𝑀𝐴𝑁𝐷𝐴 𝐿𝐼𝑁𝐾 𝑁𝑂 𝐺𝑅𝑈𝑃𝑂 𝐷𝐸 𝑃𝐴𝐶𝐾 𝐷𝐴 𝑆𝑈𝐴 𝑀𝐴𝐸 \n𝐸𝑆𝑆𝐸 𝑉𝐼𝐴𝐷𝐼𝑁𝐻𝑂 ${pushname2}𝑇𝐴 𝐴𝐶𝐻𝐴𝑁𝐷𝑂 𝑄𝑈𝐸 𝐸́ 𝐵𝐴𝐺𝑈𝑁𝐶̧𝐴 😂 ${groupMetadata.subject}*`)
						setTimeout( () => {
						denz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 000)
		setTimeout( () => {
		denz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 00)
		setTimeout( () => {
		reply(`𝑆𝐸 𝐹𝑈𝐷𝐸𝑈 𝑂𝑇𝐴𝑅𝑈 😂🤙🏾`)
		}, 0)
		}
		if (budy.includes("Bot")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("haylander")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/haylander.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj kukira dia menyukaiku", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("oii")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("quack")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/quack.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : magic rude", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Halo")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("sdd")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/sdd.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Garox")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/garox.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : mamang garox remix", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Away")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/away.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj take away", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Tapi")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/tapi.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Boong")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boong.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Pagi")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/pagi.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Your")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/your.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj into your arms", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Iri")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Bilang")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Boma")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boma.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj boma boma ye", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("boma")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boma.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj boma boma ye", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("rules")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/rules.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj new rules", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Rules")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/rules.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj new rules", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Numa")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/numa.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("numa")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/numa.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("away")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/away.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj take away", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
		if (budy.includes("bot")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("menyukaiku")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/menyukaiku.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj kukira dia menyukaiku", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("hallo")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("magic")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/magic.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : magic rude", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("brando")){
        brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
        denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Brando")){
        brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
        denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Windah")){
        brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
        denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("windah")){
        brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
        denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("garox")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/garox.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : mamang garox remix", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("your")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/your.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj into your arms", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("pagi")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/pagi.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("halo")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("hai")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("tapi")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/tapi.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("boong")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boong.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("iri")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("bilang")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("35932540387")){  // respon tag ubah aja
        reply(`ᴍᴀᴀғ *${pushname2}*, ᴏᴡɴᴇʀ ᴅɴꜱ ʙᴏᴛ ᴛɪᴅᴀᴋ ᴍᴇɴᴇʀɪᴍᴀ ᴛᴀɢ!`)
        const d = fs.readFileSync('./sticker/kanna.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Denis")){  // respon tag ubah aja
        reply(`*${pushname2}*, ɴɢᴀᴘᴀɪɴ ᴍᴀɴɢɢɪʟ² ᴏᴡɴᴇʀ ɢᴡ?`)
        const d = fs.readFileSync('./sticker/anjim.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("denis")){  // respon tag ubah aja
        reply(`*${pushname2}*, ɴɢᴀᴘᴀɪɴ ᴍᴀɴɢɢɪʟ² ᴏᴡɴᴇʀ ɢᴡ?`)
        const d = fs.readFileSync('./sticker/anjim.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("DENIS")){  // respon tag ubah aja
        reply(`*${pushname2}*, ɴɢᴀᴘᴀɪɴ ᴍᴀɴɢɢɪʟ² ᴏᴡɴᴇʀ ɢᴡ?`)
        const d = fs.readFileSync('./sticker/anjim.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("DENNIS")){  // respon tag ubah aja
        reply(`*${pushname2}*, ɴɢᴀᴘᴀɪɴ ᴍᴀɴɢɢɪʟ² ᴏᴡɴᴇʀ ɢᴡ?`)
        const d = fs.readFileSync('./sticker/anjim.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("Dennis")){  // respon tag ubah aja
        reply(`*${pushname2}*, ɴɢᴀᴘᴀɪɴ ᴍᴀɴɢɢɪʟ² ᴏᴡɴᴇʀ ɢᴡ?`)
        const d = fs.readFileSync('./sticker/anjim.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
        if (budy.includes("dennis")){  // respon tag ubah aja
        reply(`*${pushname2}*, ɴɢᴀᴘᴀɪɴ ᴍᴀɴɢɢɪʟ² ᴏᴡɴᴇʀ ɢᴡ?`)
        const d = fs.readFileSync('./sticker/anjim.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "anak anjg", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        }
		if (budy.includes(`Thanks`)) {
                  reply(`ꜱᴀᴍᴀ-ꜱᴀᴍᴀ ᴋᴀᴋ *${pushname2}*, ᴅɴꜱ ᴍɪꜱꜱ ʏᴏᴜ >-<`)
                  }
                  if (budy.includes(`Makasih`)) {
                  reply(`ꜱᴀᴍᴀ-ꜱᴀᴍᴀ ᴋᴀᴋ *${pushname2}*, ᴅɴꜱ ᴍɪꜱꜱ ʏᴏᴜ >-<`)
                  }
                  if (budy.includes(`Tq`)) {
                  reply(`ꜱᴀᴍᴀ-ꜱᴀᴍᴀ ᴋᴀᴋ *${pushname2}*, ᴅɴꜱ ᴍɪꜱꜱ ʏᴏᴜ >-<`)
                  }
                  if (budy.includes(`Thx`)) {
                  reply(`ꜱᴀᴍᴀ-ꜱᴀᴍᴀ ᴋᴀᴋ *${pushname2}*, ᴅɴꜱ ᴍɪꜱꜱ ʏᴏᴜ >-<`)
                  }
                  if (budy.includes(`Assalamualaikum`)) {
                  reply(`ᴡᴀᴀʟᴀɪᴋᴜᴍꜱᴀʟᴀᴍ ᴋᴀᴋ *${pushname2}*`)
                  }
                  if (budy.includes(`Asalamualaikum`)) {
                  reply(`ᴡᴀᴀʟᴀɪᴋᴜᴍꜱᴀʟᴀᴍ ᴋᴀᴋ *${pushname2}*`)
                  }
                  if (budy.includes(`Assalamu'alaikum`)) {
                  reply(`ᴡᴀᴀʟᴀɪᴋᴜᴍꜱᴀʟᴀᴍ ᴋᴀᴋ *${pushname2}*`)
                  }
                  if (budy.includes(`assalamualaikum`)) {
                  reply(`ᴡᴀᴀʟᴀɪᴋᴜᴍꜱᴀʟᴀᴍ ᴋᴀᴋ *${pushname2}*`)
                  }
                  if (budy.includes(`assalamu'alaikum`)) {
                  reply(`ᴡᴀᴀʟᴀɪᴋᴜᴍꜱᴀʟᴀᴍ ᴋᴀᴋ *${pushname2}*`)
                  }
                  if (budy.includes(`asalamualaikum`)) {
                  reply(`ᴡᴀᴀʟᴀɪᴋᴜᴍꜱᴀʟᴀᴍ ᴋᴀᴋ *${pushname2}*`)
                  }
                  if (budy.includes(`thanks`)) {
                  reply(`ꜱᴀᴍᴀ-ꜱᴀᴍᴀ ᴋᴀᴋ *${pushname2}*, sᴄʀᴇᴀᴍᴏ sᴀᴜᴅᴀᴅᴇs >-<`)
                  }
                  if (budy.includes(`makasih`)) {
                  reply(`ꜱᴀᴍᴀ-ꜱᴀᴍᴀ ᴋᴀᴋ *${pushname2}*, sᴄʀᴇᴀᴍᴏ sᴀᴜᴅᴀᴅᴇs >-<`)
                  }
                  if (budy.includes(`tq`)) {
                  reply(`ꜱᴀᴍᴀ-ꜱᴀᴍᴀ ᴋᴀᴋ *${pushname2}*, sᴄʀᴇᴀᴍᴏ sᴀᴜᴅᴀᴅᴇs>-<`)
                  }
                  if (budy.includes(`thq`)) {
                  reply(`ꜱᴀᴍᴀ-ꜱᴀᴍᴀ ᴋᴀᴋ *${pushname2}*, sᴄʀᴇᴀᴍᴏ sᴀᴜᴅᴀᴅᴇs >-<`)
                  }
                  if (budy.includes(`DNS`)) {
                  reply(`𝑄𝑈𝐴𝐿 𝐹𝑂𝐼 ${pushname2} 𝐹𝐴𝐿𝐴 𝑂𝑄𝑈𝐸 𝑉𝐶  𝑄𝑈𝐸 𝐿𝑂𝐺𝑂 𝑃𝑂𝑅𝑅𝐴${prefix}menu* ʏᴀ ᴋᴀᴋ`)
                  }
			      if (budy.includes(`Dns`)) {
                  reply(`𝑄𝑈𝐴𝐿 𝐹𝑂𝐼 ${pushname2}𝐹𝐴𝐿𝐴 𝑂𝑄𝑈𝐸 𝑉𝐶 𝑄𝑈𝐸 𝐿𝑂𝐺𝑂 𝑃𝑂𝑅𝑅𝐴${prefix}menu* ʏᴀ ᴋᴀᴋ`)
                  }
                  if (budy.includes(`dns`)) {
                  reply(`𝑄𝑈𝐴𝐿 𝐹𝑂𝐼 ${pushname2}𝐹𝐴𝐿𝐴 𝑂𝑄𝑈𝐸 𝑉𝐶 𝑄𝑈𝐸 𝐿𝑂𝐺𝑂 𝑃𝑂𝑅𝑅𝐴${prefix}menu* ʏᴀ ᴋᴀᴋ`)
                  }
                  if (body.startsWith(`${prefix}${command}`)) {
comd = ` 𝐸𝑆𝐶𝑅𝐸𝑉𝐸 𝐷𝐼𝑅𝐸𝐼𝑇𝑂 𝑃𝑂𝑅𝑅𝐴${pushname2} !!!\n𝑁𝐴𝑂 𝐸𝑋𝐼𝑇𝐸 𝐶𝑂𝑀𝐴𝑁𝐷𝑂${prefix}${command}*\n𝑁𝐴𝑂 𝐸𝑋𝐼𝑆𝑌𝐸𝑅 𝑁𝐴 𝐿𝐼𝑆𝑇𝐴${prefix}menu*\n    `
denz.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "tidak ada dalam #menu", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
				  }
                  if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[db]','aqua'), '𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝑁 𝑅𝐸𝐺𝐼𝑆𝑇𝑅𝐴𝐷𝑂', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
    
