let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `❏  𝙼𝙴𝙽𝚂𝙰𝙹𝙴: 𝙿𝙰𝚁𝙰 𝙲𝙾𝙼𝙿𝚁𝙰𝚁 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙶𝚁𝚄𝙿𝙾𝚂 𝚈 𝚂𝙿𝙰𝙼 
https://chat.whatsapp.com/LyMfzukGtcO7lw87VFIxBV ${pesan}`
  let teks = `⺀𝐊𝐀𝐓𝐓𝐄 𝐋𝐎𝐒 𝐋𝐋𝐀𝐌𝐀⺀
${oi}\n\n💚 ❏  𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:\n`
  for (let mem of participants) {
  teks += `💚 ➥ @${mem.id.split('@')[0]}\n`}
  teks += `𝐁𝐨𝐭 𝐊𝐚𝐭𝐞`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler