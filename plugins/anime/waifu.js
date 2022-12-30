exports.run = {
   usage: ['waifu'],
   category: 'anime',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
         let anu = await Api.waifu
         if (!anu.status) return client.reply(m.chat, global.status.fail, m)
         client.sendFile(m.chat, anu.url, '', `nih waifu`, m)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   restrict: true
}