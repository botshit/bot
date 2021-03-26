const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { return`        𝐵𝑂𝑇 𝑂𝑃𝑅𝐸𝑆𝑆𝑂𝑅 𝐼𝑁𝐹𝑂

♨️𝑁𝐴𝑂  𝑀𝐸 𝐶𝑂𝐿𝑂𝐶𝐴𝑅 𝐸𝑀 𝐺𝑅𝑈𝑃𝑂𝑆 𝑆𝐸𝐽𝐸𝐼𝑇𝑂 𝐴 𝐵𝐿𝑂𝐾
♨️𝑁𝐴𝑂 𝐿𝐼𝐺𝐴𝑅 𝑆𝑈𝐺𝐸𝐼𝑇𝑂 𝐴 𝐵𝐿𝑂𝐾 
♨️𝑃𝑅𝑂𝐼𝐵𝐼𝐷𝑂 𝐶𝐻𝐴𝑀𝐴 𝑁𝑂 𝑃𝑉 𝐷𝑂 𝐵𝑂𝑇 
♨️𝑃𝐴𝑅𝐴 𝐷𝑈𝑉𝐼𝐷𝐴𝑆 𝐸 𝐵𝑈𝐺𝑆 𝐸𝑁𝑇𝑅𝐴 𝐸𝑀 𝐶𝑇𝑇 𝐶𝑂𝑀 𝑀𝐸𝑈 𝐷𝑂𝑁𝑂
♨️𝑉𝐼𝑁𝐼 𝑂𝑃𝑅𝐸𝑆𝑆𝑂𝑅  Wa.me/+5519999516507
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (6060));
  var minutes = Math.floor(seconds % (6060) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

// info bot 
const bottt = (prefix) => {
return `
𝑃𝐴𝑅𝐴 𝑈𝑆𝐴𝑅 𝑂 𝑀𝐸𝑈 𝐵𝑂𝑇 𝐸𝑁𝑇𝑅𝐴 𝑁𝑂 𝑀𝐸𝑈 𝐺𝑅𝑈𝑃𝑂 𝐷𝑂 𝑊𝐻𝐴𝑇𝑆

https://chat.whatsapp.com/J1ChP0au4pu0gLcFg8GiSP
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
╭──────「 *_ᴅᴏɴᴀꜱɪ_* 」
┴
│√ ᴘᴜʟꜱᴀ : 08572709134555558924
│√ ꜱᴀᴡᴇʀɪᴀ : https://saweria.co/denisputra
│
│\`\`\`ᴘᴜʟꜱᴀ\`\`\`
│ 5ᴋ ɪɴᴠɪᴛᴇ ʙᴏᴛ ᴋᴇ ɢʀᴜᴘ ꜱᴇʟᴀᴍᴀ 1 ʙᴜʟᴀɴ
┬
╰──────「 *_ᴅɴꜱʙᴏᴛ_* 」
`
}
exports.donasi = donasi
// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command ${prefix}tts

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*ᴍᴀᴀғ ${pushname2} ʟɪᴍɪᴛ ʜᴀʀɪ ɪɴɪ ʜᴀʙɪꜱ*\ɴ*ʟɪᴍɪᴛ ᴅɪ ʀᴇꜱᴇᴛ ꜱᴇᴛɪᴀᴘ ᴊᴀᴍ 12:00 ᴡɪʙ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: *${limitCounts}*
`
}

exports.limitend = limitend
exports.limitcount = limitcount