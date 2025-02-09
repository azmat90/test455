

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `MANNO-BOT`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'GURU-BOT'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    var vn = "https://cdn.jsdelivr.net/gh/Itxmanno05/GURU-BOT@main/Assets/mp3/sajjad.m4a"
    let url = "https://github.com/MANNO-GDS/MANNO-MD-2.0"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://i.imgur.com/EOU8n5C.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "manno",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "I AM ALIVE NOW 🄼ANNO-MD",
          body: "MANNO BOT",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
