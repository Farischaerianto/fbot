//CREATOR SC + BASE ORI : NATHAN
//DILARANG HAPUS CREDITNYA YA COK
//MOFAL EDIT NAMA DOANG BANGGA
//GAK USAH DIJUAL YA SU
//JANGAN NGAKU² BUATAN ELU

//FOLLOW SOSIAL MEDIA
//YOUTUBE | ZEROBOT
//GITHUB | ZeroChanBot

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const brainly = require('brainly-scraper')
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const speed = require('performance-now')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafiredl } = require('./lib/mediafire.js')
//ijo wa fake
//━━[ THUMBNAIL ]━━━━━━━━━━━━━━━\\

const gambar = fs.readFileSync("./media/gambar/menu.jpg"); 
const thumb = fs.readFileSync("./media/gambar/thumb.jpg");
const ytprem = fs.readFileSync("./media/gambar/ytprem.jpg");
const pricelist = fs.readFileSync("./media/gambar/pricelist.jpg");
const wetv = fs.readFileSync("./media/gambar/wetv.jpeg");
const payment = fs.readFileSync("./media/gambar/payment.jpg");
const order = fs.readFileSync("./media/gambar/order.jpg");




//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\

Lolhuman = 'rikkabotz'
AlphaBot = 'Alphabot'
Leyscoders = 'MIMINGANZ'
ZeksKey = 'apivinz'
//centang iji cr

//centang ijo
//━━━━━━━━━━━━━━━[ RESPONSE ]━━━━━━━━━━━━━━━\\

autorespon = true
autoread = true
autocomposing = true
autorecording = true
AutoRespon: true

//━━━━━━━━━━━━━━━[ PUBLIC ]━━━━━━━━━━━━━━━\\

publik = true

//━━━━━━━━━━━━━━━[ INFO OWNER ]━━━━━━━━━━━━━━━\\

namabot = 'Faris shop'
namaowner = 'Faris'
nomorowner = '6281717277124'
githubowner = 'https://github.com/ZeroChanBot/Base-NathanBot'
youtubeowner = 'https://youtube.com/c/ZEROBOT7'

//━━━━━━━━━━━━━━━[ STICKER WM ]━━━━━━━━━━━━━━━\\

const Exif = require('./lib/exif')
const exif = new Exif() 

//━━━━━━━━━━━━━━━[ BATTERY ]━━━━━━━━━━━━━━━\\

baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}

//━━━━━━━━━━━━━━━[ COMMAND HIT ]━━━━━━━━━━━━━━━\\

cmhit = []
        
//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━\\

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  

//━━━━━━━━━━━━━━━[ EXPORTS & FUNCTION ]━━━━━━━━━━━━━━━\\

module.exports = nathan = async (nathan, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : ',' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
cmhit.push(command)
nathan.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━\\
			
			mess = {
				wait: 'Mohon Tunggu Sebentar...',
				banned: 'Maaf Anda Telah Di Banned, Hubungi Owner Untuk Melepaskan Banned',
				success: `Sukses Kak\nJangan Lupa Subscribe ${youtubeowner}`,
				error: {
					stick: 'Terjadi Kesalahan Saat Ingin Mengkonversi Menjadi Sticker',
					Iv: 'Link Yang Anda Berikan Tidak Valid'
				},
				only: {
					group: 'Perintah Hanya Berlaku Di Group!!',
					premium: 'Fitur Hanya Berlaku Untuk User Premium!!',
					ownerG: 'Perintah Hanya Untuk Pemilik Group!!',
					ownerB: 'Perintah Hanya Untuk Pemilik Bot!!',
					admin: 'Perintah Hanya Berlaku Untuk Admin!!',
					Badmin: 'Jadikan Bot Sebagai Admin Untuk Menggunakan Perintah Ini!!'
				}
			}
			
//━━━━━━━━━━━━━━━[ FUNCTION 2 ]━━━━━━━━━━━━━━━\\

			const botNumber = nathan.user.jid
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = nathan.contacts[sender] != undefined ? nathan.contacts[sender].vname || nathan.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await nathan.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = nomorowner.includes(sender)
			const group = nathan.chats.array.filter(v => v.jid.endsWith('g.us'))
            const private = nathan.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            const totalchat = await nathan.chats.all()
            const timestampp = speed();
            const latensiu = speed() - timestampp
//━━━━━━━━━━━━━━━[ DATE ]━━━━━━━━━━━━━━━\\

		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jumat"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal = "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			nathan.sendMessage(from, teks, text, { thumbnail: gambar, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} WIB - ${week}`,body:"Developer NathanBot",previewType:"PHOTO",thumbnail:gambar,sourceUrl:`https://chat.whatsapp.com/Ea1a8eZB1dl5tQK85jTqdH`}}})
		}
		const reply2 = (teks) => {
nathan.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
			const sendMess = (hehe, teks) => {
				nathan.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nathan.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nathan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu Terdeteksi Mengirim Link Group, Maaf Anda Akan Saya Kick!!`)
				setTimeout(() => {
				nathan.groupRemove(from, [kic]).catch((e) => { reply(`Jadikan Bot Sebagai Admin Untuk Menggunakan Perintah Ini!!`) })
				}, 0)
			   }
//━━━━━━━━━━━━━━━[ WAKTU ]━━━━━━━━━━━━━━━\\
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//━━━━━━━━━━━━━━━[ FAKE REPLY ]━━━━━━━━━━━━━━━\\

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `NathanBot by Nathan`, jpegThumbnail: fs.readFileSync(`./media/gambar/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/gambar/logoku.jpg') }, 'title': `${namabot}\nRP. 50.000,00`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `${namabot} \nRP. 50.000,00`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftag = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftroly = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `NathanBot by Nathan`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           nathan.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/gambar/menu.jpg"),
                                  "itemCount":100,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRP. 50.000,00`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	nathan.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	nathan.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await nathan.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    nathan.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    nathan.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await nathan.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      nathan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               nathan.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      nathan.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      nathan.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = nathan.contacts[from] != undefined ? nathan.contacts[from].vname || nathan.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'NathanBot'; if (!author) author = 'by Nathan';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return nathan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }       
        
        const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       nathan.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       nathan.sendMessage(from, hasil, type, options).catch(e => {
	       nathan.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
nathan.updatePresence(from, Presence.composing)

//━━━━━━━━━━━━━━━[ PUBLIC FUNCTION ]━━━━━━━━━━━━━━━\\

if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ UCAPAN WAKTU ]━━━━━━━━━━━━━━━\\

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
//━━━━━━━━━━━━━━━[ FAKE MENU ]━━━━━━━━━━━━━━━\\

const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `Faris Shop`,
                 "title": `Faris shop`,
                 'jpegThumbnail': fs.readFileSync("./media/gambar/menu.jpg"),
                        }
	                  } 
                     }
//━━━━━━━━━━━━━━━[ BUAT BIO BOT ]━━━━━━━━━━━━━━━\\

run = process.uptime() 
           nathan.setStatus(`Hi`).catch((_)=>_);
          settingstatus = new Date() * 1;
          
//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2022').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
//━━━━━━━━━━━━━━━[ BUFFER ]━━━━━━━━━━━━━━━\\

const fakeText = (teks) => {
nathan.sendMessage(from, teks, text, {quoted: froxx})
}

//━━━━━━━━━━━━━━━[ COMMAND ]━━━━━━━━━━━━━━━\\

switch(command) {
case 'help':
case 'Hi':
case 'menu':
if (isBanned) return reply(mess.banned)
stst = await nathan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
anu =`Hai Kak ${pushname}👋
_*Selamat Datang Di Faris Shop*_
"Dapatkan Produk Terbaik & Berkualitas! Hanya Di Toko Kami"
*keunggulan Di Faris shop:*
*•Bergaransi*
*•Terpercaya*
*•amanah*
*•Harga murahh*
*•produk berkualitas*
*•dll*

panduan:
klik *Price List* untuk melihat harga
klik *Order* untuk memesan
klik *Chat Admin* jika ingin bertanya dengan admin`
sendButImage(from, anu,`Silahkan pilih menu di bawah ini`, thumb, [
            {buttonId: `${prefix}pricelist`, buttonText: {displayText: `Price List`, }, type: 1, },
            {buttonId: `${prefix}order`, buttonText: { displayText: `Order`, }, type: 1, },
             {buttonId: `${prefix}chatadmin`, buttonText: { displayText: `Chat Admin`, }, type: 1, },
            ]); 
break
//pricelistt
case 'pricelist':
case 'Price List':
if (isBanned) return reply(mess.banned)
stst = await nathan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
anu =`*Price List🏷️*
*YouTube Premium*
• 1 bulan invite : Rp1000 
• 1 bulan admin : Rp2500 (bisa menginvite 5 akun)

YouTube Premium adalah layanan berlangganan streaming berbayar yang menyediakan 
streaming bebas iklan untuk semua video yang dihosting oleh YouTube,
konten asli eksklusif yang diproduksi dalam kolaborasi dengan pembuat utama situs,
serta pemutaran offline dan pemutaran latar belakang video di ponsel perangkat.

note: akun dari pembeli ya kak
akun dari admin nambah 2 ribu
kalau mau chat admin ya


panduan:
klik *back to menu* untuk kembali ke menu awal
klik *chat admin* untuk chat dengan admin
klik *buat pesanan* jika ingin membeli`
sendButImage(from, anu,`Daftar Harga`, pricelist, [
            {buttonId: `${prefix}help`, buttonText: {displayText: `Back To Menu`, }, type: 1, },
            {buttonId: `${prefix}chatadmin`, buttonText: { displayText: `Chat Admin`, }, type: 1, },
                        {buttonId: `${prefix}order`, buttonText: { displayText: `buat pesanan`, }, type: 1, }
            ]); 
break
//pc
case 'chatadmin':
case 'Chat Admin':
if (isBanned) return reply(mess.banned)
fakeText(`Mohon Tunggu Sebentar Ya kak, Pesan kamu akan segera kami balas🙏🏻`)

break
//yt email
case 'ytm':
if (isBanned) return reply(mess.banned)
		const pesanorder = body.slice(7)
		if (args.length > 300) return nathan.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const repo = `*[Pesanan baru]*\nNomor : @${stod.split('@')[0]}\nEmail : ${pesanorder}\nTanggal:${tanggal}\nwaktu:${jam}\nwaktu wib:${timeWib}`
							var options = {
							text: repo,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					nathan.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Mohon menunggu.. Pesanan anda akan segera kami proses dalam 2-12 menit,kami akan memberi tahu anda jika sudah,Terimakasih')
					break
//order
case 'order':
case 'beli':
if (isBanned) return reply(mess.banned)
stst = await nathan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
anu =`*Order📝*
*1. YouTube premium invite (1k)*
*2. YouTube Premium Admin(2k)*


note: akun dari pembeli ya ka.

Silahkan Klik nomor sesuai Produk Yang Ingin Anda Beli contoh *1*

_Jika Produk yang Anda inginkan tidak ada silahkan klik chat admin di menu awal_`
sendButImage(from, anu,`Buat Pesanan\nFaris Shop`, order, [
            {buttonId: `${prefix}ytprem1`, buttonText: {displayText: `1`, }, type: 1, },
            {buttonId: `${prefix}ytprem2`, buttonText: { displayText: `2`, }, type: 1, }
            ]); 
break
//yt prem order1
case 'ytprem1':
if (isBanned) return reply(mess.banned)
anu =`*YouTube Premium 1 bulan invite*
Silahkan Ketikkan email anda menggunakan format seperti contoh berikut
contoh: #ytm budi@gmail.com .`
sendButImage(from, anu,`Youtube Premium\nFaris Shop`, ytprem, [
            {buttonId: `${prefix}payment`, buttonText: {displayText: `Bayar`, }, type: 1, }
                  ]); 
break
//ytprem 2
case 'ytprem2':
if (isBanned) return reply(mess.banned)
anu =`*YouTube Premium 1 bulan admin*
silahkan ketikkan email & password (pastikan belum pernah premium ya), jika sudah mohon menunggu admin akan segera merespon pesanan anda😉`
sendButImage(from, anu,`Youtube Premium\nFaris Shop`, ytprem, [
            {buttonId: `${prefix}payment`, buttonText: {displayText: `Bayar`, }, type: 1, }
                  ]); 
break
//wetipi
case 'wetv':
if (isBanned) return reply(mess.banned)
anu =`*Wetv Vip 1 bulan*
silahkan melakukan pembayaran terlebih dahulu klik payment dibawah, jika sudah kirimkan bukti pembayarannya, admin akan segera membalas pesan anda.`
sendButImage(from, anu,`Wetv vip\nFaris Shop`, wetv, [
            {buttonId: `${prefix}payment`, buttonText: {displayText: `Payment`, }, type: 1, }
                  ]); 
break
//sudah
case 'sudahkirim':
if (isBanned) return reply(mess.banned)
fakeText('Mohon tunggu sebentar...., admin akan segera memproses pesanan kamu😉')
break
//test
case 'sc':
case 'script':
if (isBanned) return reply(mess.banned)
reply2(`[ INFO SCRIPT ]
• Creator Bot : Nathan
• Youtube Creator : ${youtubeowner}
• GitHub Creator : ${githubowner}

[ LINK SCRIPT ]
• ${githubowner}/Base-NathanBot`)
break
//pembayaran
case 'payment':
case 'pembayaran':
if (isBanned) return reply(mess.banned)
anu =`*Metode Pembayaran💳*
•Dana : 081717277124
•Gopay: 081717277124
•Qris : (Gambar Di atas)

_*Bayar sesuai nominal tertera, jangan kurang kalau lebih boleh hehe😂*_

_Jika sudah bayar kirimkan bukti pembayarannya yaa_`
sendButImage(from, anu,`Pembayaran`, payment, [
            {buttonId: `${prefix}menu`, buttonText: {displayText: `Balik ke menu awal`, }, type: 1, }
                  ]); 
break
//━━━━━━━━━━━━━━━[ ANIME FITUR ]━━━━━━━━━━━━━━━\\

            case 'ppcouple':
            case 'ppcp':
            if (isBanned) return reply(mess.banned)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              nathan.sendMessage(from, cowo, image, {quoted: froxx, caption: 'Cowo' })
              nathan.sendMessage(from, cewe, image, {quoted: froxx, caption: 'Cewe' })
              break
             case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
            if (isBanned) return reply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `Get Again`},type:1}]
              imageMsg = ( await nathan.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'©Created by Nathan', imageMessage: imageMsg,
              contentText:`NthnDevId It's Me`,buttons,headerType:4}
              prep = await nathan.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              nathanrelayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              
//━━━━━━━━━━━━━━━[ TEXTPRO ]━━━━━━━━━━━━━━━\\
case 'blackpink':
case 'water_pipe':
case 'halloween':
case 'sketch':
case 'sircuit':
case 'discovery':
case 'fiction':
case 'demon':
case 'transformer':
case 'berry':
case 'thunder':
case 'magma':
case '3dstone':
case 'neon':
case 'glitch':
case 'harry_potter':
case 'embossed':
case 'broken':
case 'papercut':
case 'gradient':
case 'glossy':
case 'watercolor':
case 'multicolor':
case 'neon_devil':
case 'underwater':
case 'bear':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Masukan Teksnya?\nContoh: ${prefix + command} Nathan`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${query}&apikey=${AlphaBot}`)
nathan.sendMessage(from, bf, image, { quoted: froxx })
break
case 'halloween2':
case 'horror':
case 'game8bit':
case 'layered':
case 'glitch2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Nathan|DevId`)
reply(mess.wait)
query = args.join (" ")
txt1 = query.split('|')[0]
txt2 = query.split('|')[1]
if(!txt2)return reply('Text 2 nya?')
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${txt1}&text2=${txt2}&apikey=${AlphaBot}`)
nathan.sendMessage(from, bf, image, { quoted: froxx })
break

//━━━━━━━━━━━━━━━[ ANIMATION ANIMALS ]━━━━━━━━━━━━━━━\\

case 'script':
case 'sc':
teks =
`[ INFO SCRIPT ]
• Creator Bot : Nathan
• Youtube Creator : ${youtubeowner}
• GitHub Creator : ${githubowner}

[ LINK SCRIPT ]
• Coming Soon

[ LINK YOUTUBE ]
• https://youtube.com/ZEROBOT7`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 }
]
        sendButLocation(from, teks, `©Created by Nathan`, fakeimg, but, { thumbnail: Buffer.alloc(0) })
break

//━━━━━━━━━━━━━━━[ ANIMATION ANIMALS ]━━━━━━━━━━━━━━━\\

                   case 'fox':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nathan.sendMessage(from, anu1, image, {caption: `Ini Rubah`, quoted: froxx})
                   break
                   case 'dog':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nathan.sendMessage(from, anu1, image, {caption: `Ini Anjing`, quoted: froxx})
                   break
                   case 'cat':
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nathan.sendMessage(from, anu1, image, {caption: `Ini Kucing`, quoted: froxx})
                   break
                   case 'panda':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nathan.sendMessage(from, anu1, image, {caption: `Ini Panda`, quoted: froxx})
                   break
                   case 'panda2':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nathan.sendMessage(from, anu1, image, {caption: `Ini Panda`, quoted: froxx})
                   break
                   case 'bird': 
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nathan.sendMessage(from, anu1, image, {caption: `Ini Burung`, quoted: froxx})
                   break
                   case 'koala':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nathan.sendMessage(from, anu1, image, {caption: `Ini Koala`, quoted: froxx})
                   break
              
//━━━━━━━━━━━━━━━[ RANDOM IMAGE ]━━━━━━━━━━━━━━━\\

                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        nathan.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        nathan.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                if (!isPremium) return reply(mess.only.premium)
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${Lolhuman}`).then((gambar) => {
                        nathan.sendMessage(from, gambar, image, { quoted: froxx })
                    })
                    break
//━━━━━━━━━━━━━━━[ SELF & PUBLIC ]━━━━━━━━━━━━━━━\\
case 'public':
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
publik = true
fakeText('*SELF -> PUBLIC*')
break
case 'self':
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
publik = false
fakeText('*PUBLIC -> SELF*')
break
//━━━━━━━━━━━━━━━[ EXIF STICKER ]━━━━━━━━━━━━━━━\\
           case 'exif':
                    if (isBanned) return reply(mess.banned)
                    if (!isOwner) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply(mess.success)
				     break
//━━━━━━━━━━━━━━━[ ISLAM ]━━━━━━━━━━━━━━━\\
                case 'listsurah':
                if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                if (isBanned) return reply(mess.banned)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${Lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${Lolhuman}`)
                    await lolhuman.sendMessage(from, ini_buffer, audio, { quoted: lol, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (isBanned) return reply(mess.banned)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
//━━━━━━━━━━━━━━━[ KODE BAHASA ]━━━━━━━━━━━━━━━\\

                     case 'bahasa':
                     if (isBanned) return reply(mess.banned)
                    nathan.sendMessage(from, bahasa(), text, { quoted:froxx })
                    break 
                    case 'kodenegara':
                    if (isBanned) return reply(mess.banned)
					nathan.sendMessage(from, negara(), text)
					break
                    case 'tts':
                    if (isBanned) return reply(mess.banned)
				    if (args.length < 1) return nathan.sendMessage(from, 'Masukan Kode Bahasanya!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nathan.sendMessage(from, 'Masukan Text Nya?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Text Terlalu Banyak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							Syifa.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//━━━━━━━━━━━━━━━[ PREMIUM ]━━━━━━━━━━━━━━━\\
				case 'addprem':
if (!isOwner) return reply(mess.only.ownerB)
prik = body.slice(9)
prem.push(`${prik}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prik}*\n_Berhasil Ditambahkan Menjadi User Premium_`)
break
case 'delprem':
if (!isOwner) return reply(mess.only.ownerB)
prik = body.slice(9)
prem.splice(`${prik}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prik}*\n_Berhasil Berhasil Menghapus Premium_`)
break
                case 'premiumlist':
				nathan.updatePresence(from, Presence.recording) 
				teks = 'LIST USER PREMIUM :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				nathan.sendMessage(from, teks.trim(), extendedText, {quoted: froxx, contextInfo: {"mentionedJid": prem}})
				break
//━━━━━━━━━━━━━━━[ BANNED ]━━━━━━━━━━━━━━━\\
case 'ban':
if (!isOwner) return reply(mess.only.ownerB)
bun = body.slice(5)
ban.push(`${bun}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bun}*\n_Telah Dibanned_`)
break
        case 'unban':
if (!isOwner) return reply(mess.only.ownerB)
bun = body.slice(7)
ban.splice(`${bun}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bun}*\n_Telah Diunbanned_`)
break

//━━━━━━━━━━━━━━━[ STICKER ]━━━━━━━━━━━━━━━\\

            case 'patrick':
            if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			nathan.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
			case 'amongus':
			if (isBanned) return reply(mess.banned)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=${Lolhuman}`)
			nathan.sendMessage(from, wkwk, sticker, {quoted: froxx})
			break
            case 'toimg':
            if (isBanned) return reply(mess.banned)
			if (!isQuotedSticker) return reply('Fotonya Mana?!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await nathan.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Terjadi Kesalahan, Silahkan Coba Lagi')
			buffer = fs.readFileSync(ran)
			reply(buffer,'BERHASIL')
			fs.unlinkSync(ran)
			})
			break
                    case 'sticker':
					case 'stiker':
					case 's':
					if (isBanned) return reply(mess.banned)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await nathan.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											nathan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await nathan.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											nathan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim Atau Reply Gambar/Video Dengan Caption ${prefix}sticker\nDurasi Video Maksimal 10 Detik`)
						}
						break
						
//━━━━━━━━━━━━━━━[ DOWNLOAD ]━━━━━━━━━━━━━━━\\

case 'mediafire':
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link Tidak Valid !!')
               reply(mess.wait)
 
               res = await mediafiredl(q)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`❒ Nama : ${res[0].nama}\`\`\`
\`\`\`❒ Ukuran : ${res[0].size}\`\`\`
\`\`\`❒ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Pengiriman Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6287834993722l@g.us" }: {})},message:{"orderMessage":{"orderId":"6287834993722","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break  
case 'play':
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Lagunya?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksKey}&q=${bo}`)
thum = await getBuffer(ini.result.thumbnail)
tol =`Judul: ${ini.result.title}\nSize: ${ini.result.size}\nDurasi: ${ini.result.duration}`
loul =`Tersedia Beberapa Tipe, Silahkan Pilih`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: '️AUDIO' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'VIDEO' }, type: 1 }
]
sendButLocation(from, tol, loul, thum, but)
break

case 'mp4':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${ZeksKey}&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
nathan.sendMessage(from, mp4, video)
break
case 'mp3':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${ZeksKey}&q=${bo}`)
mp3 = await getBuffer(ini.result.url_audio)
nathan.sendMessage(from, mp3, audio)
break
case 'ytmp3':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length ==0)return reply('Linknya?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thum = await getBuffer(get.thumbnail)
nathan.sendMessage(from, thum, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_audio)
nathan.sendMessage(from, res, audio)
break
case 'ytmp4':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length ==0)return reply('Linknya?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thum = await getBuffer(get.thumbnail)
nathan.sendMessage(from, thum, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_video)
nathan.sendMessage(from, res, video)
break
case 'tiktok':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
              result = `Data Ditemukan\n*Nickname*: ${data.result.author.nickname}\n*Like*: ${data.result.statistic.diggCount}\n *Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}tiktokmp3 ${q}`,buttonText:{displayText:'AUDIO'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await nathan.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih Salah Satu', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await nathan.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              nathan.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'tiktoknowm': 
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${Lolhuman}&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              nathan.sendMessage(from, ini_video, video, { quoted: froxx })
              break
          case 'tiktokmp3': 
          if (isBanned) return reply(mess.banned)
           reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Lolhuman}&url=${args[0]}`)
              nathan.sendMessage(from, data, audio, { quoted: froxx })
              break
              case 'ytplaymp3':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${ZeksKey}&q=${q}`)
		     .then(res => {
			  nathan.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: froxx, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
case 'lirik':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break

//━━━━━━━━━━━━━━━[ MOBILE LEGENDS ]━━━━━━━━━━━━━━━\\

case 'herolist':
if (isBanned) return reply(mess.banned)
await herolist().then((ress) => {
let listt = `*Untuk Detai Hero Ketik ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (isBanned) return reply(mess.banned)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle Point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break

//━━━━━━━━━━━━━━━[ OWNER ]━━━━━━━━━━━━━━━\\

case 'addcmd': 
case 'setcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmd Dan Reply Sticker`)
var kodeng = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodeng, c)
reply("Done")
} else {
reply('Reply Sticker')
}
break
case 'delcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} reply_stickernya`)
var kodeng = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodeng), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done")
break
case 'listcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 LIST STICKER CMD 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*ID:* ${i.id}\n*COMMAND:* ${i.chats}`
}
reply(teksnyee)
break
case 'bc': 
                    if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('Teksnya?')
					anu = await nathan.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nathan.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Sukses Boadcast')
             } else {
             for (let _ of anu) {
             nathan.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
			"footerText": 'NathanBot by Nathan',
			"buttons": [
			{"buttonId": `${prefix}owner`,
			"buttonText": {"displayText": "OWNER"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Sukses broadcast')}
        break
        case 'bc2':
        if (isBanned) return reply(mess.banned)
             if(!isOwner) return reply('Anda Bukan Owner')
             bctlah = (await axios.get(`https://api-xcz.herokuapp.com/api/random/waifu`))
             if (args.length < 1) return reply('Teksnya?')
             anu = await nathan.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await nathan.downloadMediaMessage(encmedia)
             for (let i of anu) {
             	tes = `${body.slice(4)}`
             	nathan.sendMessage(i.jid, bc, { contentText: `${tes}`, footerText: `_Broadcast*_`, buttons: [{buttonId: `${prefix}owner`,buttonText:{displayText: 'OWNER'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: bctlah, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess Broadcast')
             } else {
             for (let i of anu) {
             	textt = `${body.slice(4)}`
             nathan.sendMessage(i.jid, { contentText: `${textt}`, footerText: `_Broadcast*_`, buttons: [{buttonId: `${prefix}owner`,buttonText:{displayText: 'OWNER'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: bctlah, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Sukses broadcast')}
             break

//━━━━━━━━━━━━━━━[ FUN ]━━━━━━━━━━━━━━━\\

case 'nickepep':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
reply(`*Random Nick Free Fire*\n${anu.result}`)
break
case 'katailham':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${Leyscoders}`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=${Leyscoders}`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'tongue':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Format Salah\nExample :\n*${prefix}${command} Nathan*`)  
yntkts = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${yntkts}`)
anu1 = `➻ *NAMA ASLI* : ${anu.your_name}\n`
anu1 += `➻ *NAMA NINJA* : ${anu.result}\n`
reply(anu1)
break 

//━━━━━━━━━━━━━━━[ TOOLS ]━━━━━━━━━━━━━━━\\

case 'ssweb':
case 'ss':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Linknya Mana?')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
nathan.sendMessage(from, buff, image, {quoted: froxx, caption : teks})
break

//━━━━━━━━━━━━━━━[ INFO ]━━━━━━━━━━━━━━━\\

case 'notif':
if (isBanned) return reply(mess.banned)
if (!isGroupAdmins) return reply(ind.only.admin)
nathan.updatePresence(from, Presence.composing)
teks = `Notifikasi Dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await nathan.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await nathan.sendMessage(from, options, text)
break
case 'wa.me':
case 'wame':
if (isBanned) return reply(mess.banned)
nathan.updatePresence(from, Presence.composing) 
options = {
text: `「 *BOT WHATSAPP* 」\n\n_Request_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour Number Link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
menu.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return reply(data.error)
reply(data.result)
break
               case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  nathan.sendMessage(from, {displayname: "Nathan", vcard: vcard}, MessageType.contact, { quoted: mek})
hilih = 'Butuh info tentang apa ya?'
           sendButMessage(from, hilih, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}menu`, buttonText: { displayText: `MENU`, }, type: 1, },
{buttonId: `${prefix}script`, buttonText: { displayText: `SCRIPT`, }, type: 1, }
]); 
                 break
                 case 'request':
                 if (isBanned) return reply(mess.banned)
					const inidia = body.slice(8)
					if (args.length > 300) return Syifa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const reqs = `*[REQUEST]*\nNomor : @${stod.split('@')[0]}\nPesan : ${inidia}`
							var options = {
							text: reqs,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					nathan.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Request Telah Tersampaikan Ke Owner, Sialhkan Menunggu Jawaban. Request Palsu/Main-Main Tidak Akan Ditanggapi.')
					break
case 'report':
case 'lapor':
if (isBanned) return reply(mess.banned)
					const inipesannya = body.slice(7)
					if (args.length > 300) return nathan.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const repo = `*[REPORT]*\nNomor : @${stod.split('@')[0]}\nPesan : ${inipesannya}`
							var options = {
							text: repo,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					nathan.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Request Telah Tersampaikan Ke Owner, Sialhkan Menunggu Jawaban. Request Palsu/Main-Main Tidak Akan Ditanggapi.')
					break
      case 'shutdown':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(`Bot Akan Dimatikan Dalam 3 Detik`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main.js`)
             reply('_Restarting Success_')
             break
      case 'leaveall':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return  reply(mess.only.owner)
             let totalgerup = nathan.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgerup) {
             sendMess(id, 'Selamat Tinggal', null)
             await sleep(3000)
             nathan.groupLeave(id)
}
             break
        case 'join':
        if (isBanned) return reply(mess.banned)
            if (!isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            nah = args[0]
            if (!q) return reply('Masukan Link Groupnya')
            var codeInvite = nah.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('Pastikan Link Yang Anda Kirim Sudah Benar!')
            var response = await nathan.acceptInvite(codeInvite)
            fakeitem('Berhasil Bergabung Dalam Group')
            } catch {
            fakeitem('Link Salah/Telah Di Setel Ulang!')
            }
        break
        case 'joinv2': 
        if (isBanned) return reply(mess.banned)
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Link Invalid')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = nathan.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Join Grup')
             break
        case 'ban':
        if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					baning = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor ${baning} Telah Dibanned !`)
	    break
        case 'unban':
        if (isBanned) return reply(mess.banned)
					if (!isOwner) return reply(mess.only.ownerB)
					unbin = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor ${unbin} telah di unban!`)
		break

//━━━━━━━━━━━━━━━[ GROUP ]━━━━━━━━━━━━━━━\\

       case 'online':
       case 'listonline':
       case 'here':                
       if (isBanned) return reply(mess.banned)
 if (!isGroup) return reply(mess.only.group)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(nathan.chats.get(ido).presences), nathan.user.jid]
             nathan.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
       case 'setnamegc':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Contoh Penggunaan ${prefix}setgrupname NthnDevId`)
              nathan.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc deskripsinya`)
              nathan.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       case 'setppgc':
       if (isBanned) return reply(mess.banned)
           if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await nathan.downloadMediaMessage(encmedia)
              nathan.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim Atau Reply Gambar Dengan Caption ${prefix + command}`)
}
              break
case 'demoteall':
if (isBanned) return reply(mess.banned)
		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  nathan.groupDemoteAdmin(from, members_id)
              
		 		    break
                
		 		    case 'promoteall':
	if (isBanned) return reply(mess.banned)
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   nathan.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
    nthn = '©Created by Nathan'
        sendButMessage(from, nthn, `Pilih Salah Satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `GROUP OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `GROUP CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
if (isBanned) return reply(mess.banned)
      if (!mek.key.fromMe && !isGroupAdmins) return reply("Hanya Bisa Dilakukan Oleh Bot Dan Admin Group Saja");
        if (!isBotGroupAdmins) return reply("Bot Bukan Admin");
        if (!isGroup) return;
        reply(`*Group Berhasil Ditutup Oleh ${pushname}*`);
        nathan.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
      if (isBanned) return reply(mess.banned)
  if (!mek.key.fromMe && !isGroupAdmins) return reply("Hanya Bisa Dilakukan Oleh Bot Dan Admin Group Saja");
        if (!isBotGroupAdmins) return reply("Bot Bukan Admin");
        if (!isGroup) return;
        reply(`*Group Berhasil Dibuka Oleh ${pushname}*`);
        nathan.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':        
   if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var lahh = await nathan.groupMetadata(from)
					var member = lahh['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: ftag}
					nathan.sendMessage(from, value, text, {quoted: ftag, contextInfo: { mentionedJid: mem }})
					break;
									case 'tagall':
									if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let memk of groupMembers) {
						teks += `*${prefix}* @${memk.jid.split('@')[0]}\n`
						members_id.push(memk.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
                                if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Telah Di Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						nathan.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						nathan.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Telah Di Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nathan.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group Biasa!`, mentioned, true)
						nathan.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Masukan Nomor Target?')
					if (args[0].startsWith('62')) return reply('Gunakan Kode Negara Kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nathan.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal Menambahkan Target, Mungkin Karena Di Private')
					}
					break
				case 'kick':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nathan.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah Di Terima, Mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nathan.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					teks = `List Admin Di Group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                if (isBanned) return reply(mess.banned)
                 if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await nathan.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	nathan.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'welcome':
if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Welcome Sudah Aktif Sebelumnya')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Berhasil Mengaktifkan Welcome Untuk Group Ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Berhasil Mematikan Welcome Untuk Group Ini')
					} else {
						sendButMessage(from, `WELCOME MODE`, `Pilih Salah Satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `WELCOME ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `WELCOME OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                case 'antilink':
                if (isBanned) return reply(mess.banned)
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Antilink Sudah Aktif Sebelumnya')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Berhasil Mengaktifkan Antilink Untuk Group Ini')
						nathan.sendMessage(from,`*ANTILINK* Sudah Aktif. Semua Member Dilarang Mengirim Link Group, Karena Bot Akan Mengeluarkan Target Jika Target Tersebut Mengirimkan Link Group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Antilink Sudah Dimatikan Sebelumnya')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Berhasil Mematikan Antilink Untuk Group Ini')
					} else {
						sendButMessage(from, `ANTILINK MODE`, `Pilih Salah Satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ANTILINK ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `ANTILINK OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
        if (isBanned) return reply(mess.banned)
     if (!isGroup) return reply(mess.only.group)
					nathan.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nathan.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								nathan.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nathan.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								nathan.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim Gambar/Video/Gif Dengan Caption \n${prefix}sticker\nDurasi Sticker Video Maksimal 9 Detik`)
					}
					break

//━━━━━━━━━━━━━━━[ TOOLS ]━━━━━━━━━━━━━━━\\
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nathan.downloadAndSaveMediaMessage(encmedia)
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
						reply('Kirim Fotonya')
					}
					break
default:
if (budy.includes(`tes`)) {
nathan.sendMessage(from, ' silahkan ketik *#menu* untuk melihat daftar harga, membuat pesanan, atau chat dengan admin.', text, {quoted: mek})
                  }
                         
}
if (budy.startsWith('x')){
try {
return nathan.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ TEXT ]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
